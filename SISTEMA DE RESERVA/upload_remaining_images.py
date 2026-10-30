#!/usr/bin/env python3
import subprocess
import time

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

def upload_to_service(target_title, img_filename):
    print(f"⏳ Subiendo imagen '{img_filename}' a '{target_title}'...")

    # 1. Close any open drawer
    exec_js("document.querySelector('[data-testid=\"form-back-button\"]')?.click();")
    time.sleep(1.0)

    # 2. Click the target card
    click_target = f"""
    (() => {{
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));
        const card = cards.find(c => c.innerText.includes({json.dumps(target_title)}));
        if (card) {{ card.click(); return 'ok'; }}
        return 'not-found';
    }})()
    """
    res = exec_js(click_target)[0]
    if 'ok' not in res:
        print(f"  ❌ No se encontró la tarjeta para {target_title}")
        return
    time.sleep(1.5)

    # 3. Attach file via fetch from local server
    attach_file = f"""
    (async () => {{
        const input = document.querySelector('input[data-testid="upload-file-input"]') || document.querySelector('input[type="file"]');
        if (!input) return 'no-input';

        const res = await fetch('http://localhost:8765/{img_filename}');
        const blob = await res.blob();
        const file = new File([blob], '{img_filename}', {{ type: 'image/jpeg' }});

        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;

        input.dispatchEvent(new Event('input', {{ bubbles: true }}));
        input.dispatchEvent(new Event('change', {{ bubbles: true }}));
        return 'attached';
    }})()
    """
    exec_js(attach_file)
    time.sleep(2.0)

    # 4. Click Apply in crop modal
    click_apply = """
    (() => {
        const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
        if (applyBtn) { applyBtn.click(); return 'applied'; }
        return 'no-apply';
    })()
    """
    exec_js(click_apply)
    time.sleep(1.5)

    # 5. Touch desc to enable Save and click Save
    touch_and_save = """
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
            const cur = desc.value;
            setReactVal(desc, cur + ' ');
            setReactVal(desc, cur);
        }

        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (saveBtn && !saveBtn.disabled) {
            saveBtn.click();
            return 'saved';
        }
        return 'no-save';
    })()
    """
    res_save = exec_js(touch_and_save)[0]
    time.sleep(2.5)
    print(f"  ✅ Imagen subida y guardada para '{target_title}' ({res_save})")

import json

if __name__ == '__main__':
    upload_to_service("Corte + cejas(efectivo)", "02_corte_cejas.jpg")
    upload_to_service("Corte + barba", "03_corte_barba.jpg")
    print("\n🏁 Subida completada.")

