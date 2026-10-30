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

# 1. Click ellipsis on meeting-card-service-10
click_ellipsis = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-10"]');
    if (!card) return 'no card 10';
    const btn = card.querySelector('[data-testid="meeting-ellipsis-button"]');
    if (!btn) return 'no ellipsis btn';
    btn.click();
    return 'clicked';
})()
"""

print("Ellipsis:", exec_js(click_ellipsis)[0])
time.sleep(0.5)

# 2. Inspect menu and click Delete
click_delete = """
(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitem"], li, button')).filter(el => (el.innerText || '').trim() === 'Delete');
    if (items.length > 0) {
        items[0].click();
        return 'clicked delete';
    }
    return 'no delete item';
})()
"""
print("Delete item:", exec_js(click_delete)[0])
time.sleep(1.0)

# 3. Inspect what appeared on the page (modal, alert, dialog)
inspect_modal = """
(() => {
    const dialogs = Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], .modal, .popup, [class*="dialog"], [class*="modal"]')).map(d => ({
        tag: d.tagName,
        text: d.innerText,
        buttons: Array.from(d.querySelectorAll('button')).map(b => b.innerText)
    }));
    return JSON.stringify(dialogs, null, 2);
})()
"""
print("Dialogs:", exec_js(inspect_modal)[0])
