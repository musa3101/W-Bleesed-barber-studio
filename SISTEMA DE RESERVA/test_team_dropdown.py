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

click_team = """
(() => {
    const box = document.querySelector('[data-testid="provider-select-input-box"]');
    if (box) {
        box.click();
        return 'clicked provider-select-input-box';
    }
    return 'box not found';
})()
"""

out, err = exec_js(click_team)
print("Click result:", out)

time.sleep(1)

check_dropdown = """
(() => {
    const items = Array.from(document.querySelectorAll('[role="option"], [role="listbox"] div, [role="menuitem"], label, li')).map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim() : '',
        role: el.getAttribute('role'),
        className: el.className
    })).filter(x => x.text.toLowerCase().includes('gustavo') || x.text.toLowerCase().includes('select all') || x.role === 'option');

    return JSON.stringify(items);
})()
"""

out2, err2 = exec_js(check_dropdown)
print("Dropdown items:", out2)

