#!/usr/bin/env python3
import subprocess
import time

def exec_js(js):
    escaped = js.replace('\\', '\\\\').replace('"', '\\"')
    script = f'''
tell application "Google Chrome"
    tell active tab of window 1
        execute javascript "{escaped}"
    end tell
end tell
'''
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return out.strip(), err.strip()

def upload_image_to_service(target_title, image_filename):
    print(f"\n==========================================")
    print(f"Processing '{target_title}' with '{image_filename}'...")

    # 1. Click the service card
    click_card_js = f"""
    (() => {{
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-service-"]'));
        const card = cards.find(c => c.innerText.includes("{target_title}"));
        if (card) {{
            card.click();
            return 'clicked card';
        }}
        return 'card not found';
    }})()
    """
    out, _ = exec_js(click_card_js)
    print("1. Click card:", out)
    if "clicked" not in out:
        return False
    time.sleep(2)

    # 2. Attach image via local server
    attach_js = f"""
    (async () => {{
        try {{
            const input = document.querySelector('input[data-testid="upload-file-input"]');
            if (!input) return 'file input not found';

            const res = await fetch('http://localhost:8765/{image_filename}');
            const blob = await res.blob();
            const file = new File([blob], '{image_filename}', {{ type: 'image/jpeg' }});

            const dt = new DataTransfer();
            dt.items.add(file);
            input.files = dt.files;

            input.dispatchEvent(new Event('input', {{ bubbles: true }}));
            input.dispatchEvent(new Event('change', {{ bubbles: true }}));

            return 'file attached: ' + file.size + ' bytes';
        }} catch(e) {{
            return 'error: ' + e.message;
        }}
    }})()
    """
    out, _ = exec_js(attach_js)
    print("2. Attach file:", out)
    time.sleep(2)

    # 3. Click Apply in crop modal
    apply_js = """
    (() => {
        const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
        if (applyBtn) {
            applyBtn.click();
            return 'clicked Apply';
        }
        return 'apply not found';
    })()
    """
    out, _ = exec_js(apply_js)
    print("3. Crop Apply:", out)
    time.sleep(2)

    # 4. Touch form to enable Save button
    touch_js = """
    (() => {
        const desc = document.querySelector('textarea[data-testid="service-description"]');
        if (desc) {
            const proto = window.HTMLTextAreaElement.prototype;
            const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
            const cur = desc.value || '';
            setter.call(desc, cur + ' ');
            desc.dispatchEvent(new Event('input', { bubbles: true }));
            setter.call(desc, cur);
            desc.dispatchEvent(new Event('input', { bubbles: true }));
            desc.dispatchEvent(new Event('change', { bubbles: true }));
        }
        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        return 'save disabled: ' + (saveBtn ? saveBtn.disabled : 'no save btn');
    })()
    """
    out, _ = exec_js(touch_js)
    print("4. Touch state:", out)
    time.sleep(1)

    # 5. Click Save button
    save_js = """
    (() => {
        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (saveBtn && !saveBtn.disabled) {
            saveBtn.click();
            return 'clicked Save';
        }
        return 'save disabled or not found';
    })()
    """
    out, _ = exec_js(save_js)
    print("5. Save:", out)
    time.sleep(3)

    return True

# Upload to Corte + cejas(efectivo)
upload_image_to_service("Corte + cejas", "02_corte_cejas.jpg")

# Upload to Corte + barba
upload_image_to_service("Corte + barba", "03_corte_barba.jpg")

print("\nDone with 02 and 03!")

