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
    return JSON.stringify({
        saveBtnDisabled: saveBtn ? saveBtn.disabled : null,
        saveBtnText: saveBtn ? saveBtn.innerText : null
    });
})()
"""

out, err = exec_js(touch_and_save)
print("Touch result:", out)

time.sleep(1)

click_save = """
(() => {
    const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
    if (saveBtn && !saveBtn.disabled) {
        saveBtn.click();
        return 'clicked Save';
    }
    return 'save disabled or not found';
})()
"""

out2, err2 = exec_js(click_save)
print("Save result:", out2)

