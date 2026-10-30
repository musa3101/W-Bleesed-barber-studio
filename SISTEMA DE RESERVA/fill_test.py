#!/usr/bin/env python3
import subprocess
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

fill_test = """
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

    const title = document.querySelector('input[data-testid="service-title"]');
    const desc = document.querySelector('textarea[data-testid="service-description"]');
    const dur = document.querySelector('input[data-testid="service-duration"]');
    const cost = document.querySelector('input[data-testid="service-cost"]');
    const createBtn = document.querySelector('button[data-testid="form-submit-button"]');

    setReactVal(title, 'Corte de pelo (fade al 0 moderno)');
    setReactVal(desc, 'Degradado super candela + corte a tijera.');
    setReactVal(dur, '35');
    setReactVal(cost, '14');

    return JSON.stringify({
        titleVal: title ? title.value : null,
        descVal: desc ? desc.value : null,
        durVal: dur ? dur.value : null,
        costVal: cost ? cost.value : null,
        createBtnDisabled: createBtn ? createBtn.disabled : null,
        createBtnText: createBtn ? createBtn.innerText : null
    });
})()
"""

out, err = exec_js(fill_test)
print("Fill test result:", out)

