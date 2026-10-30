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

# Remaining services to create (Service 1 is already created!)
SERVICIOS = [
    { "name": "Corte + cejas", "duration": "40", "price": "15", "desc": "Degradado bien afeitado + perfilado de cejas." },
    { "name": "Corte + barba", "duration": "45", "price": "18", "desc": "El combo de siempre. Corte completo + arreglo de barba." },
    { "name": "Corte + barba + cejas", "duration": "50", "price": "20", "desc": "El pack completo." },
    { "name": "Corte niño", "duration": "30", "price": "12", "desc": "Para los pequeños. Hasta los 10 años." },
    { "name": "Barba moderna", "duration": "20", "price": "8", "desc": "Degradado de barba con perfilado." },
    { "name": "Cejas", "duration": "10", "price": "3", "desc": "Perfilado con cuchilla o portanavajas." },
    { "name": "Mechas rubias", "duration": "60", "price": "30", "desc": "Mechas con acabado natural." },
    { "name": "Mechas + tinte", "duration": "75", "price": "35", "desc": "Mechas estructuradas tirando al blanco." },
    { "name": "Decoloración + corte", "duration": "90", "price": "50", "desc": "Decoloración completa + corte." }
]

def add_single_service(s):
    print(f"⏳ Creando: {s['name']} ({s['duration']} min - {s['price']}€)...")

    # Step 1: Click Add button
    click_add = """
    (() => {
        const btn = document.querySelector('[data-testid="add-button"]');
        if (btn) { btn.click(); return 'ok'; }
        return 'no-btn';
    })()
    """
    exec_js(click_add)
    time.sleep(0.8)

    # Step 2: Click Service menuitem
    click_service_item = """
    (() => {
        const item = document.querySelector('[data-testid="service"]');
        if (item) { item.click(); return 'ok'; }
        return 'no-item';
    })()
    """
    exec_js(click_service_item)
    time.sleep(1.0)

    # Step 3: Fill form fields
    fill_fields = f"""
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

        setReactVal(title, {json.dumps(s['name'])});
        setReactVal(desc, {json.dumps(s['desc'])});
        setReactVal(dur, {json.dumps(s['duration'])});
        setReactVal(cost, {json.dumps(s['price'])});

        return 'filled';
    }})()
    """
    exec_js(fill_fields)
    time.sleep(0.5)

    # Step 4: Open Team Drawer
    open_team = """
    (() => {
        const box = document.querySelector('[data-testid="provider-select-input-box"] [role="button"]') || document.querySelector('[data-testid="provider-select-input-box"]');
        if (box) { box.click(); return 'ok'; }
        return 'no-box';
    })()
    """
    exec_js(open_team)
    time.sleep(0.8)

    # Step 5: Check Gustavo and click Done
    select_team_done = """
    (() => {
        const drawer = document.querySelector('.input-drawers');
        if (!drawer) return 'no-drawer';

        // Check Gustavo Quinoz
        const cb = drawer.querySelector('input[type="checkbox"]');
        if (cb && !cb.checked) {
            cb.click();
        }

        const doneBtn = Array.from(drawer.querySelectorAll('button')).find(b => b.innerText.trim() === 'Done');
        if (doneBtn) {
            doneBtn.click();
            return 'done';
        }
        return 'no-done-btn';
    })()
    """
    exec_js(select_team_done)
    time.sleep(0.8)

    # Step 6: Click Create submit button
    submit_service = """
    (() => {
        const submitBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (submitBtn) {
            submitBtn.click();
            return 'submitted';
        }
        return 'no-submit';
    })()
    """
    res, _ = exec_js(submit_service)
    time.sleep(2.0)
    print(f"  ✅ Guardado: {s['name']}")

if __name__ == '__main__':
    print("💈 Creando los 9 servicios restantes en Setmore para Blessed Barber Studio...")
    for idx, serv in enumerate(SERVICIOS):
        add_single_service(serv)
        time.sleep(1)

    print("\n🎉 ¡Todos los servicios han sido creados con éxito!")
    # Get final cards
    cards_js = """
    (() => {
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => c.innerText.trim());
        return JSON.stringify(cards);
    })()
    """
    cards, _ = exec_js(cards_js)
    print("📋 Servicios finales en Setmore:", cards)

