#!/usr/bin/env python3
import subprocess
import time
import json

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

def upload_image_to_service(target_name, filename):
    print(f"\n==========================================")
    print(f"💈 Subiendo {filename} a '{target_name}'")
    print(f"==========================================")

    # 1. Close any open drawer or modal
    exec_js("document.querySelector('[data-testid=\"form-back-button\"]')?.click();")
    time.sleep(1.0)

    # 2. Click the target card
    open_js = f"""
    (() => {{
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));
        const card = cards.find(c => c.innerText.includes({json.dumps(target_name)}));
        if (!card) return 'not found';
        card.click();
        return 'opened';
    }})()
    """
    res = exec_js(open_js)[0]
    print("Paso 1 (Abrir tarjeta):", res)
    if res != 'opened':
        return False
    time.sleep(1.5)

    # 3. Trigger async fetch and attach with global flag
    trigger_js = f"""
    (() => {{
        window.__upload_done = false;
        window.__upload_error = null;

        fetch('http://localhost:8765/{filename}')
            .then(res => res.blob())
            .then(blob => {{
                const file = new File([blob], '{filename}', {{ type: 'image/jpeg' }});
                const dt = new DataTransfer();
                dt.items.add(file);
                const input = document.querySelector('input[data-testid="upload-file-input"]') || document.querySelector('input[type="file"]');
                if (!input) {{
                    window.__upload_error = 'no file input';
                    window.__upload_done = true;
                    return;
                }}
                input.files = dt.files;
                input.dispatchEvent(new Event('input', {{ bubbles: true }}));
                input.dispatchEvent(new Event('change', {{ bubbles: true }}));
                window.__upload_done = true;
            }})
            .catch(err => {{
                window.__upload_error = err.message;
                window.__upload_done = true;
            }});
        return 'triggered';
    }})()
    """
    exec_js(trigger_js)

    # Wait for window.__upload_done
    for _ in range(20):
        done_status = exec_js("window.__upload_done")[0]
        if done_status == 'true':
            break
        time.sleep(0.3)

    err_status = exec_js("window.__upload_error")[0]
    print(f"Paso 2 (Adjuntar archivo): finalizado (error: {err_status})")
    time.sleep(1.5)

    # 4. Click Apply in crop modal
    apply_js = """
    (() => {
        const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
        if (applyBtn) {
            applyBtn.click();
            return 'clicked apply';
        }
        return 'no apply btn';
    })()
    """
    apply_res = exec_js(apply_js)[0]
    print("Paso 3 (Confirmar recorte):", apply_res)
    time.sleep(1.5)

    # 5. Touch description and click Save
    save_js = """
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
            return 'clicked save';
        }
        return 'save disabled or not found';
    })()
    """
    save_res = exec_js(save_js)[0]
    print("Paso 4 (Guardar servicio):", save_res)
    time.sleep(2.0)

    # 6. Close drawer
    exec_js("document.querySelector('[data-testid=\"form-back-button\"]')?.click();")
    time.sleep(1.0)
    return True

if __name__ == '__main__':
    upload_image_to_service("Corte + cejas(efectivo)", "02_corte_cejas.jpg")
    upload_image_to_service("Corte + barba", "03_corte_barba.jpg")
    print("\n🎉 Proceso finalizado.")

