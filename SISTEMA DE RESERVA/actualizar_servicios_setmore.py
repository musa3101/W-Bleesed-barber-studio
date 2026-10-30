#!/usr/bin/env python3
import subprocess
import time
import json
import sys

def exec_js(js):
    escaped_js = js.replace('\\', '\\\\').replace('"', '\\"')
    script = f'''
tell application "Google Chrome"
    tell active tab of window 1
        execute javascript "{escaped_js}"
    end tell
end tell
'''
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return out.strip(), err.strip()

SERVICIOS_SYNC = [
    {
        "id_match": ["decoloración", "decoloracion"],
        "name": "Decoloración+corte(efectivo)",
        "duration": "60",
        "price": "60",
        "desc": "Decoloración completa + corte."
    },
    {
        "id_match": ["mechas + tinte", "mechas + corte"],
        "name": "Mechas + corte 👱🏻‍♂️🧊 (efectivo)",
        "duration": "60",
        "price": "50",
        "desc": "Mechas mas extructurasas y mas tirando al tinte blanco⚪️⚪️⚪️"
    },
    {
        "id_match": ["mechas rubias"],
        "name": "Mechas rubias 💇🏼‍♂️",
        "duration": "50",
        "price": "30",
        "desc": "Mechas con acabado natural."
    },
    {
        "id_match": ["cejas"],
        "name": "Cejas",
        "duration": "5",
        "price": "3",
        "desc": "Perfilado de cejas con cuchilla o portanavajas !"
    },
    {
        "id_match": ["barba moderna"],
        "name": "Barba moderna 🧔🏻‍♂️🔥 (efectivo)",
        "duration": "20",
        "price": "8",
        "desc": "Degradado de barba con perfilado y adaptación al rostro"
    },
    {
        "id_match": ["corte niño"],
        "name": "Corte niño 👶🏼",
        "duration": "30",
        "price": "12",
        "desc": "Corte para los pequeños 👶🏼,"
    },
    {
        "id_match": ["corte + barba + cejas"],
        "name": "Corte + barba + cejas(efectivo)",
        "duration": "50",
        "price": "20",
        "desc": "El pack completo."
    },
    {
        "id_match": ["corte + barba"], # Note: won't match "corte + barba + cejas" if we check exact prefix or longer first
        "name": "Corte + barba",
        "duration": "50",
        "price": "18",
        "desc": "El combo de siempre. Corte completo + arreglo de barba."
    },
    {
        "id_match": ["corte + cejas"],
        "name": "Corte + cejas(efectivo)",
        "duration": "40",
        "price": "15",
        "desc": "Un verdadero degradado bien afeitado mas el perfilado de las..."
    },
    {
        "id_match": ["corte de pelo", "fade al 0"],
        "name": "Corte de pelo al 0 moderno 🔥(efectivo)",
        "duration": "35",
        "price": "14",
        "desc": "Corte en degradado super candela + un buen corte a tijera..."
    }
]

def update_single_service(s):
    print(f"\n🔄 Procesando: {s['name']} ({s['duration']} min · {s['price']}€)...")

    # Step 1: Find and click the right card
    # To avoid "corte + barba" matching "corte + barba + cejas", we do strict priority
    click_js = f"""
    (() => {{
        const matches = {json.dumps(s['id_match'])};
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));

        for (const card of cards) {{
            const t = (card.innerText || '').toLowerCase();
            // Ignore "corte fade" standalone card (card 10)
            const firstLine = t.split('\\n')[0].trim();
            if (firstLine === 'corte fade') continue;

            // If this is "corte + barba", ensure it doesn't match "corte + barba + cejas"
            if (matches.includes('corte + barba') && !matches.includes('corte + barba + cejas')) {{
                if (firstLine.includes('cejas')) continue;
            }}

            for (const m of matches) {{
                if (firstLine.includes(m.toLowerCase())) {{
                    card.click();
                    return 'clicked card: ' + firstLine;
                }}
            }}
        }}
        return 'card not found';
    }})()
    """
    res, _ = exec_js(click_js)
    print("  👉 Click en tarjeta:", res)
    if 'not found' in res:
        print("  ❌ No se encontró la tarjeta para:", s['name'])
        return False

    time.sleep(1.2)

    # Step 2: Fill form
    fill_js = f"""
    (() => {{
        function setReactVal(el, val) {{
            if (!el) return false;
            const proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
            const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
            setter.call(el, val);
            el.dispatchEvent(new Event('input', {{ bubbles: true }}));
            el.dispatchEvent(new Event('change', {{ bubbles: true }}));
            el.dispatchEvent(new Event('blur', {{ bubbles: true }}));
            return true;
        }}

        const title = document.querySelector('input[data-testid="service-title"]');
        const desc = document.querySelector('textarea[data-testid="service-description"]');
        const dur = document.querySelector('input[data-testid="service-duration"]');
        const cost = document.querySelector('input[data-testid="service-cost"]');

        if (!title || !dur || !cost) return 'missing inputs';

        setReactVal(title, {json.dumps(s['name'])});
        setReactVal(desc, {json.dumps(s['desc'])});
        setReactVal(dur, {json.dumps(s['duration'])});
        setReactVal(cost, {json.dumps(s['price'])});

        return 'filled';
    }})()
    """
    res_fill, _ = exec_js(fill_js)
    print("  📝 Relleno de datos:", res_fill)
    if res_fill != 'filled':
        print("  ❌ Error rellenando campos:", res_fill)
        return False

    time.sleep(0.8)

    # Step 3: Click Save
    save_js = """
    (() => {
        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (saveBtn) {
            saveBtn.click();
            return 'saved';
        }
        return 'no save btn';
    })()
    """
    res_save, _ = exec_js(save_js)
    print("  💾 Guardado:", res_save)
    time.sleep(2.0)
    return True

def get_current_services():
    js = """
    (() => {
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
            const lines = c.innerText.trim().split('\\n');
            return {
                title: lines[0],
                details: lines[1] || '',
                raw: c.innerText.trim()
            };
        });
        return JSON.stringify(cards, null, 2);
    })()
    """
    out, _ = exec_js(js)
    try:
        return json.loads(out)
    except:
        return []

if __name__ == '__main__':
    print("💈 Sincronizando los 10 servicios oficiales de Booksy en Setmore...")
    for idx, s in enumerate(SERVICIOS_SYNC):
        ok = update_single_service(s)
        time.sleep(1.0)

    print("\n==========================================")
    print("🎉 Sincronización completada. Verificando estado final:")
    final_cards = get_current_services()
    for idx, c in enumerate(final_cards):
        print(f"[{idx+1}] {c.get('title')} -> {c.get('details')}")
    print("==========================================")
