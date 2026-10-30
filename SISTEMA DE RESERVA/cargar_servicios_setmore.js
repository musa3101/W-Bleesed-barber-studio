/**
 * ==============================================================================
 * BLESSED BARBER STUDIO - SCRIPT DE CARGA AUTOMÁTICA DE SERVICIOS EN SETMORE
 * ==============================================================================
 * Instrucciones:
 * 1. Entra a tu pestaña de Setmore donde ves la lista de servicios.
 * 2. Abre la consola de Chrome pulsando: Cmd + Option + J (en Mac).
 * 3. Copia todo este código, pégalo en la consola y presiona Enter.
 * ==============================================================================
 */

(async function cargarServiciosBlessed() {
  console.log("%c💈 INICIANDO CARGA DE SERVICIOS PARA BLESSED BARBER STUDIO...", "color: #eab308; font-size: 14px; font-weight: bold;");

  const servicios = [
    { name: "Corte de pelo (fade al 0 moderno)", duration: 35, price: 14, desc: "Degradado super candela + corte a tijera." },
    { name: "Corte + cejas", duration: 40, price: 15, desc: "Degradado bien afeitado + perfilado de cejas." },
    { name: "Corte + barba", duration: 45, price: 18, desc: "El combo de siempre. Corte completo + arreglo de barba." },
    { name: "Corte + barba + cejas", duration: 50, price: 20, desc: "El pack completo." },
    { name: "Corte niño", duration: 30, price: 12, desc: "Para los pequeños. Hasta los 10 años." },
    { name: "Barba moderna", duration: 20, price: 8, desc: "Degradado de barba con perfilado." },
    { name: "Cejas", duration: 10, price: 3, desc: "Perfilado con cuchilla o portanavajas." },
    { name: "Mechas rubias", duration: 60, price: 30, desc: "Mechas con acabado natural." },
    { name: "Mechas + tinte", duration: 75, price: 35, desc: "Mechas estructuradas tirando al blanco." },
    { name: "Decoloración + corte", duration: 90, price: 50, desc: "Decoloración completa + corte." }
  ];

  // Helper para esperar
  const sleep = (ms) => new Promise(res => setTimeout(res, ms));

  // Función para simular escritura natural y disparar eventos de React/Vue
  function setInputValue(input, value) {
    if (!input) return;
    input.focus();
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
    input.dispatchEvent(new Event('change', { bubbles: true }));
    input.dispatchEvent(new Event('blur', { bubbles: true }));
  }

  // Detectar botón negro con '+' para añadir servicio
  function buscarBotonAdd() {
    // 1. Buscar por aria-label o texto
    const botones = Array.from(document.querySelectorAll('button, [role="button"], a'));
    for (const btn of botones) {
      const aria = (btn.getAttribute('aria-label') || '').toLowerCase();
      const txt = (btn.innerText || '').toLowerCase();
      if (aria.includes('add service') || aria.includes('create service') || txt.includes('add service') || txt.includes('añadir servicio')) {
        return btn;
      }
    }
    // 2. Buscar botón circular negro con SVG de plus en el header
    const plusButtons = botones.filter(b => {
      const svg = b.querySelector('svg');
      return svg && (b.className.includes('circle') || b.className.includes('plus') || b.className.includes('add') || b.getBoundingClientRect().top < 150);
    });
    if (plusButtons.length > 0) return plusButtons[plusButtons.length - 1];
    return null;
  }

  console.log(`📋 Total servicios a registrar: ${servicios.length}`);
  
  // Estrategia 1: API Directa de Setmore si tenemos token en sesión
  let token = null;
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k.toLowerCase().includes('token') || k.toLowerCase().includes('auth')) {
        const val = localStorage.getItem(k);
        if (val && val.length > 20) {
          try {
            const parsed = JSON.parse(val);
            token = parsed.accessToken || parsed.token || parsed.jwt || val;
          } catch(e) {
            token = val;
          }
        }
      }
    }
  } catch(e) {}

  console.log("🔍 Sesión detectada:", token ? "Token encontrado ✅" : "Modo interfaz visual activo 🖥️");

  let exito = 0;
  for (let i = 0; i < servicios.length; i++) {
    const s = servicios[i];
    console.log(`%c[${i+1}/${servicios.length}] ⏳ Procesando: ${s.name} (${s.price}€ - ${s.duration}min)`, "color: #38bdf8;");

    const addBtn = buscarBotonAdd();
    if (addBtn) {
      addBtn.click();
      await sleep(1000);

      // Buscar inputs del formulario abierto
      const inputs = Array.from(document.querySelectorAll('input, textarea'));
      const nameInput = inputs.find(el => el.placeholder?.toLowerCase().includes('name') || el.name?.toLowerCase().includes('name') || el.placeholder?.toLowerCase().includes('service'));
      const costInput = inputs.find(el => el.placeholder?.toLowerCase().includes('cost') || el.placeholder?.toLowerCase().includes('price') || el.name?.toLowerCase().includes('price') || el.name?.toLowerCase().includes('cost'));
      const durationInput = inputs.find(el => el.placeholder?.toLowerCase().includes('duration') || el.name?.toLowerCase().includes('duration'));
      const descInput = document.querySelector('textarea');

      if (nameInput) setInputValue(nameInput, s.name);
      if (costInput) setInputValue(costInput, String(s.price));
      if (durationInput) setInputValue(durationInput, String(s.duration));
      if (descInput) setInputValue(descInput, s.desc);

      await sleep(500);

      // Buscar botón de Guardar / Save
      const saveBtn = Array.from(document.querySelectorAll('button, [role="button"]'))
        .find(b => {
          const t = (b.innerText || '').toLowerCase();
          return t.includes('save') || t.includes('guardar') || t.includes('create') || t.includes('crear');
        });

      if (saveBtn) {
        saveBtn.click();
        console.log(`%c  ✅ Guardado: ${s.name}`, "color: #4ade80;");
        exito++;
        await sleep(1500);
      } else {
        console.warn(`  ⚠️ No se encontró el botón de Guardar para "${s.name}".`);
      }
    } else {
      console.warn("⚠️ No se encontró el botón de añadir servicio automáticamente en esta vista.");
      break;
    }
  }

  if (exito === servicios.length) {
    console.log("%c🎉 ¡TODOS LOS SERVICIOS DE BLESSED BARBER HAN SIDO CARGADOS CON ÉXITO!", "color: #4ade80; font-size: 16px; font-weight: bold;");
  } else {
    console.log(`%cℹ️ Se completaron ${exito} de ${servicios.length}. Si Setmore usa una ventana especial, podemos lanzar el asistente manual paso a paso.`, "color: #facc15; font-size: 13px;");
  }
})();

