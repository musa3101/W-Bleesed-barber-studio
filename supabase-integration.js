import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://felvvzeajswdpeymytvq.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_HH1jzZRRhJrgXWzyAQVRUA_UN_kHPQh';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
let supabaseContent = {};
let supabaseServices = [];
let supabaseGallery = [];
let supabaseBarbers = [];

// Mapeo de servicios originales para identificarlos y reemplazarlos en el DOM
const originalServices = [
    { name: "Corte de pelo (fade al 0 moderno)", price: "14€", desc: "Degradado super candela + corte a tijera." },
    { name: "Corte + cejas", price: "15€", desc: "Degradado bien afeitado + perfilado de cejas." },
    { name: "Corte + barba", price: "18€", desc: "El combo de siempre. Corte completo + arreglo de barba." },
    { name: "Corte + barba + cejas", price: "20€", desc: "El pack completo." },
    { name: "Corte niño", price: "desde 12€", desc: "Para los pequeños. Hasta los 10 años." },
    { name: "Barba moderna", price: "8€", desc: "Degradado de barba con perfilado." },
    { name: "Cejas", price: "3€", desc: "Perfilado con cuchilla o portanavajas." },
    { name: "Mechas rubias", price: "30€", desc: "Mechas con acabado natural." },
    { name: "Mechas + tinte", price: "35€", desc: "Mechas estructuradas tirando al blanco." },
    { name: "Decoloración + corte", price: "50€", desc: "Decoloración completa + corte." }
];

// Mapeo de fotos originales para buscarlas en el DOM por su src base
const originalGallery = [
    { origSrc: "corte-01.jpg", index: 0 },
    { origSrc: "corte-02.jpg", index: 1 },
    { origSrc: "corte-03.jpg", index: 2 },
    { origSrc: "corte-04.jpg", index: 3 },
    { origSrc: "corte-05.jpg", index: 4 },
    { origSrc: "corte-06.jpg", index: 5 },
    { origSrc: "corte-07.jpg", index: 6 },
    { origSrc: "corte-08.jpg", index: 7 },
    { origSrc: "corte-09.jpg", index: 8 }
];

export async function fetchDynamicContent() {
    try {
        // 1. Cargar Textos de Supabase
        const { data: contentData, error: contentError } = await supabase
            .from('content')
            .select('*');
            
        if (!contentError && contentData) {
            contentData.forEach(item => {
                supabaseContent[item.id] = item;
            });
        }

        // 2. Cargar Servicios de Supabase
        const { data: servicesData, error: servicesError } = await supabase
            .from('services')
            .select('*');

        if (!servicesError && servicesData) {
            supabaseServices = servicesData;
        }

        // 3. Cargar Galería de Supabase
        const { data: galleryData, error: galleryError } = await supabase
            .from('gallery')
            .select('*')
            .order('order_index', { ascending: true });

        if (!galleryError && galleryData) {
            supabaseGallery = galleryData;
        }

        // 4. Cargar Trabajadores de Supabase
        const { data: barbersData, error: barbersError } = await supabase
            .from('barbers')
            .select('*')
            .order('order_index', { ascending: true });

        if (!barbersError && barbersData) {
            supabaseBarbers = barbersData;
        }

        // Aplicar cambios iniciales
        applyReplacements();

        // Crear un observador para detectar cuando React dibuja o cambia la pantalla
        const observer = new MutationObserver(() => {
            applyReplacements();
        });
        
        observer.observe(document.body, { childList: true, subtree: true, characterData: true });

        console.log("Supabase Dynamic Content Loaded Successfully", { supabaseContent, supabaseServices, supabaseGallery, supabaseBarbers });
        
    } catch (err) {
        console.error("Error fetching data from Supabase", err);
    }
}

function applyReplacements() {
    // Reemplazar el Hero
    if (supabaseContent['hero']) {
        const parts = supabaseContent['hero'].title.split('.');
        replaceTextNode('El Arte del ', parts[0] ? parts[0] + '.' : '');
        replaceTextNode('Corte Perfecto.', parts[1] ? parts[1].trim() + '.' : '');
        replaceTextNode('Precisión, estilo y atención al detalle en cada servicio.', supabaseContent['hero'].description);
    }

    // Reemplazar la sección About
    const aboutTitle = (supabaseContent['about'] && supabaseContent['about'].title && supabaseContent['about'].title !== 'Nuestra Esencia')
        ? supabaseContent['about'].title
        : 'Sobre nosotros';

    replaceTextNode('Nuestra Esencia', aboutTitle);
    replaceTextNode('Filosofía', aboutTitle);

    // Reemplazar Servicios Dinámicamente
    originalServices.forEach(orig => {
        const match = supabaseServices.find(s => s.name.trim().toLowerCase() === orig.name.trim().toLowerCase() || 
                                                 (s.description && s.description.trim().toLowerCase() === orig.desc.trim().toLowerCase()));
        
        if (match) {
            replaceTextNode(orig.name, match.name);
            replaceTextNode(orig.price, match.price);
            replaceTextNode(orig.desc, match.description);
        }
    });

    // Reemplazar Galería Dinámicamente (Imágenes y Videos)
    originalGallery.forEach(orig => {
        const match = supabaseGallery.find(g => g.order_index === orig.index);
        if (match) {
            const imgs = document.querySelectorAll('img');
            imgs.forEach(img => {
                if (img.src && img.src.includes(orig.origSrc)) {
                    if (img.src !== match.media_url) {
                        img.src = match.media_url;
                        if (img.nextElementSibling && img.nextElementSibling.tagName === 'VIDEO') {
                            img.nextElementSibling.setAttribute('poster', match.media_url);
                        }
                    }
                }
            });

            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                if (video.dataset && video.dataset.src && video.dataset.src.includes(`video${orig.index - 2}`)) {
                    if (match.media_url !== video.dataset.src) {
                        video.dataset.src = match.media_url;
                        // Preload the new remote video dynamically and set as src when resolved
                        preloadVideo(match.media_url).then(blobUrl => {
                            if (video.src !== blobUrl) {
                                video.src = blobUrl;
                                if (video.parentElement.parentElement.classList.contains('visible-on-screen')) {
                                    video.play().catch(e => {});
                                }
                            }
                        });
                    }
                }
            });
        }
    });

    // Interceptar e inyectar barberos en el Modal
    injectBarbersToModal();
}

function injectBarbersToModal() {
    if (supabaseBarbers.length === 0) return;

    // Buscar el header de elegir barbero
    const header = Array.from(document.querySelectorAll('h2, h3, div')).find(el => 
        el.textContent && el.textContent.toUpperCase().includes('ELIGE TU BARBERO')
    );

    if (header) {
        // Encontrar el contenedor de botones de barberos
        const parentContainer = header.parentElement.querySelector('.px-2.py-2') || 
                                header.parentElement.parentElement.querySelector('.px-2.py-2');
        
        if (parentContainer && !parentContainer.classList.contains('barbers-injected')) {
            parentContainer.classList.add('barbers-injected');

            // Obtener el texto del servicio elegido para el mensaje de WhatsApp
            let serviceText = '';
            const dialog = header.closest('[role="dialog"]') || document.querySelector('.modal-booking-container');
            if (dialog) {
                const candidates = Array.from(dialog.querySelectorAll('p, div, span, [class*="text-muted-foreground"]'));
                for (const el of candidates) {
                    if (el.textContent && el.textContent.includes('Servicio:')) {
                        serviceText = el.textContent.replace(/^.*Servicio:\s*/i, '').trim();
                        break;
                    }
                }
            }

            if (!serviceText) {
                const subtitleEl = header.parentElement.querySelector('p') || (dialog ? dialog.querySelector('p') : null);
                if (subtitleEl && subtitleEl.textContent && subtitleEl.textContent.includes('Servicio:')) {
                    serviceText = subtitleEl.textContent.replace(/^.*Servicio:\s*/i, '').trim();
                } else if (subtitleEl && subtitleEl.textContent && !subtitleEl.textContent.includes('Elige')) {
                    serviceText = subtitleEl.textContent.trim();
                }
            }

            // Limpiar los botones estáticos de React
            parentContainer.innerHTML = '';

            // Renderizar los barberos dinámicos de Supabase
            supabaseBarbers.forEach(barber => {
                const btn = document.createElement('button');
                btn.className = 'modal-booking-btn group';
                btn.innerHTML = `
                    <div class="flex items-center gap-3 min-w-0 flex-1">
                        <span class="text-xl shrink-0 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">${barber.emoji || '💈'}</span>
                        <div class="min-w-0 text-left">
                            <div class="font-serif text-lg text-foreground group-hover:text-primary transition-colors truncate">${barber.name}</div>
                            <div class="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">${barber.role}</div>
                        </div>
                    </div>
                    <svg class="w-4 h-4 text-primary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                `;

                // Añadir el listener para enviar el WhatsApp y cerrar el modal
                btn.addEventListener('click', () => {
                    const msg = `Hola Blessed Studio, me gustaría reservar cita para: ${serviceText || 'un servicio de barbería'} con el barbero ${barber.name}. Muchas gracias.`;
                    const phone = "34631935439";
                    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
                    window.open(waUrl, "_blank", "noopener,noreferrer");

                    // Cerrar el modal limpiamente
                    const closeBtn = (dialog ? dialog.querySelector('button[aria-label*="Close"], button[aria-label*="Cerrar"], button.absolute.right-4.top-4') : null) || 
                                     Array.from(document.querySelectorAll('button')).find(el => el.textContent.trim() === '✕');
                    if (closeBtn) {
                        closeBtn.click();
                    } else {
                        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true }));
                    }
                });

                parentContainer.appendChild(btn);
            });
        }
    }
}

// Función auxiliar para buscar y reemplazar texto exacto sin romper el HTML de React
function replaceTextNode(oldText, newText) {
    if (!newText || !oldText || oldText === newText) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while ((node = walker.nextNode())) {
        if (node.nodeValue && node.nodeValue.toLowerCase().includes(oldText.toLowerCase().trim())) {
            node.nodeValue = node.nodeValue.replace(new RegExp(escapeRegExp(oldText.trim()), 'gi'), newText);
        }
    }
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Helper for caching and preloading remote videos as blob URLs
async function preloadVideo(url) {
    try {
        const cache = await caches.open('blessed-video-cache');
        let response = await cache.match(url);
        if (!response) {
            await cache.add(url);
            response = await cache.match(url);
        }
        if (response) {
            const blob = await response.blob();
            return URL.createObjectURL(blob);
        }
    } catch (e) {
        console.warn("Cache API failed, falling back to direct URL", e);
    }
    return url;
}

// Ejecutar al cargar la ventana
window.addEventListener('DOMContentLoaded', fetchDynamicContent);
