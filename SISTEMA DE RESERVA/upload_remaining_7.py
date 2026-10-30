#!/usr/bin/env python3
import subprocess
import time
import sys

def exec_js(js):
    escaped_js = js.replace('\\', '\\\\').replace('"', '\\"')
    script = f'''tell application "Google Chrome" to tell active tab of window 1 to execute javascript "{escaped_js}"'''
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return out.strip()

tasks = [
    ("meeting-card-service-6", "04_corte_barba_cejas.jpg", "Corte + barba + cejas(efectivo)"),
    ("meeting-card-service-5", "05_corte_nino.jpg", "Corte niño 👶🏼"),
    ("meeting-card-service-4", "06_barba_moderna.jpg", "Barba moderna 🧔🏻‍♂️🔥 (efectivo)"),
    ("meeting-card-service-3", "07_cejas.jpg", "Cejas"),
    ("meeting-card-service-2", "08_mechas_rubias.jpg", "Mechas rubias 💇🏼‍♂️"),
    ("meeting-card-service-1", "09_mechas_corte_blanco.jpg", "Mechas + corte 👱🏻‍♂️🧊 (efectivo)"),
    ("meeting-card-service-0", "10_decoloracion_corte.jpg", "Decoloración+corte(efectivo)"),
]

for card_id, filename, title in tasks:
    print(f"\n==========================================")
    print(f"💈 Subiendo {filename} a [{card_id}] {title}...")
    print(f"==========================================")

    # 1. Close drawer if open
    exec_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

    # 2. Click the card
    open_js = f'''
    (() => {{
        const card = document.querySelector('[data-testid="{card_id}"]');
        if (card) {{ card.click(); return 'clicked'; }}
        return 'not found';
    }})()
    '''
    r_open = exec_js(open_js)
    print("1. Abrir tarjeta:", r_open)
    if r_open != 'clicked':
        print(f"Error abriendo tarjeta {card_id}")
        continue
    time.sleep(2.0)

    # 3. Attach file
    attach_js = f'''
    (() => {{
        window.__res = 'pending';
        fetch('http://localhost:8765/{filename}')
            .then(r => r.blob())
            .then(b => {{
                const f = new File([b], '{filename}', {{ type: 'image/jpeg' }});
                const dt = new DataTransfer();
                dt.items.add(f);
                const input = document.querySelector('input[data-testid="upload-file-input"]');
                if (!input) {{ window.__res = 'no input'; return; }}
                input.files = dt.files;
                input.dispatchEvent(new Event('input', {{ bubbles: true }}));
                input.dispatchEvent(new Event('change', {{ bubbles: true }}));
                window.__res = 'attached ' + f.size;
            }})
            .catch(e => {{ window.__res = 'err: ' + e.message; }});
    }})()
    '''
    exec_js(attach_js)
    time.sleep(2.5)
    r_status = exec_js('window.__res')
    print("2. Estado de adjunto:", r_status)

    # 4. Click Apply in crop modal
    apply_js = '''
    (() => {
        const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
        if (applyBtn) {
            applyBtn.click();
            return 'clicked Apply';
        }
        return 'no apply btn';
    })()
    '''
    r_apply = exec_js(apply_js)
    print("3. Aplicar recorte:", r_apply)
    time.sleep(2.0)

    # 5. Touch description
    touch_js = '''
    (() => {
        function setReactVal(el, val) {
            if (!el) return false;
            const proto = el.tagName === 'TEXTAREA' ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
            const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
            setter.call(el, val);
            el.dispatchEvent(new Event('input', { bubbles: true }));
            el.dispatchEvent(new Event('change', { bubbles: true }));
            el.dispatchEvent(new Event('blur', { bubbles: true }));
            return true;
        }
        const desc = document.querySelector('textarea[data-testid="service-description"]');
        if (desc) {
            const cur = desc.value || '';
            setReactVal(desc, cur + ' ');
            setReactVal(desc, cur);
        }
    })()
    '''
    exec_js(touch_js)
    time.sleep(1.0)

    # 6. Save
    save_js = '''
    (() => {
        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (saveBtn && !saveBtn.disabled) {
            saveBtn.click();
            return 'clicked Save';
        }
        return 'save disabled or not found';
    })()
    '''
    r_save = exec_js(save_js)
    print("4. Guardar:", r_save)
    time.sleep(3.0)

    # 7. Close drawer
    exec_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

print("\n🎉 Todas las 7 imágenes han sido procesadas con éxito!")

