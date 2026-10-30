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

# 1. Click card 0
click_card = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-0"]');
    if (!card) return 'no card 0';
    card.click();
    return 'clicked card 0';
})()
"""
print("Click:", exec_js(click_card)[0])
time.sleep(1.2)

# 2. Fill fields
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

    setReactVal(title, {json.dumps("Decoloración+corte(efectivo)")});
    setReactVal(desc, {json.dumps("Decoloración completa + corte.")});
    setReactVal(dur, "60");
    setReactVal(cost, "60");

    return 'filled';
}})()
"""
print("Fill:", exec_js(fill_js)[0])
time.sleep(0.8)

# 3. Click Save
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
print("Save:", exec_js(save_js)[0])
time.sleep(2.0)

# 4. Check card 0
check_card = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-0"]');
    return card ? card.innerText : 'not found';
})()
"""
print("Card 0 after save:", exec_js(check_card)[0])
