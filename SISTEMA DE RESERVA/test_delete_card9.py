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

# Check card 9 delete ellipsis
js = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-9"]');
    if (!card) return 'no card 9';
    const btn = card.querySelector('[data-testid="meeting-ellipsis-button"]');
    if (!btn) return 'no ellipsis 9';
    btn.click();
    return 'clicked 9 ellipsis';
})()
"""
print("Ellipsis 9:", exec_js(js)[0])
time.sleep(0.5)

js_del = """
(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitem"], li, button')).filter(el => (el.innerText || '').trim() === 'Delete');
    if (items.length > 0) {
        items[0].click();
        return 'clicked delete';
    }
    return 'no delete item';
})()
"""
print("Delete item:", exec_js(js_del)[0])
time.sleep(1.0)

js_confirm = """
(() => {
    const dialogs = Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], .modal, .popup, [class*="dialog"], [class*="modal"]')).map(d => ({
        tag: d.tagName,
        text: d.innerText,
        buttons: Array.from(d.querySelectorAll('button')).map(b => b.innerText)
    }));
    return JSON.stringify(dialogs, null, 2);
})()
"""
print("Confirm dialog for 9:", exec_js(js_confirm)[0])
