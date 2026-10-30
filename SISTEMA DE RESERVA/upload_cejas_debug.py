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

# We already have Corte + cejas drawer open!
upload_step = """
(async () => {
    const input = document.querySelector('input[data-testid="upload-file-input"]');
    if (!input) return 'no input';

    const res = await fetch('http://localhost:8765/02_corte_cejas.jpg');
    const blob = await res.blob();
    const file = new File([blob], '02_corte_cejas.jpg', { type: 'image/jpeg' });

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;
    input.dispatchEvent(new Event('change', { bubbles: true }));

    return 'attached file of ' + file.size + ' bytes';
})()
"""

out, err = exec_js(upload_step)
print("Attach:", out)
time.sleep(2.0)

# Check if crop modal opened
check_modal = """
(() => {
    const modal = document.querySelector('[role="dialog"]');
    const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
    return JSON.stringify({
        hasModal: !!modal,
        hasApply: !!applyBtn
    });
})()
"""
out2, err2 = exec_js(check_modal)
print("Modal status:", out2)

# If applyBtn, click it!
click_apply = """
(() => {
    const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
    if (applyBtn) {
        applyBtn.click();
        return 'clicked Apply';
    }
    return 'no apply';
})()
"""
out3, err3 = exec_js(click_apply)
print("Apply:", out3)
time.sleep(1.5)

# Save
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
    return 'save disabled';
})()
"""
out4, err4 = exec_js(save_js)
print("Save:", out4)
time.sleep(1.5)

# Close drawer
exec_js("document.querySelector('[data-testid=\"form-back-button\"]')?.click();")

