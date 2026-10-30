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

# 1. Click card 10
open_10 = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-10"]');
    if (!card) return 'no card 10';
    card.click();
    return 'clicked 10';
})()
"""
print("Open 10:", exec_js(open_10)[0])
time.sleep(1.0)

# 2. Inspect toggle and checkboxes in drawer
inspect_toggle = """
(() => {
    const inputs = Array.from(document.querySelectorAll('input, button, [role="switch"], [role="checkbox"]')).map(el => ({
        tag: el.tagName,
        type: el.getAttribute('type'),
        role: el.getAttribute('role'),
        id: el.getAttribute('data-testid') || el.id,
        checked: el.checked,
        ariaChecked: el.getAttribute('aria-checked'),
        text: el.innerText ? el.innerText.trim() : ''
    })).filter(x => (x.role === 'switch' || x.type === 'checkbox' || (x.text && x.text.includes('Show on Booking'))));

    return JSON.stringify(inputs, null, 2);
})()
"""
print("Toggle:", exec_js(inspect_toggle)[0])
