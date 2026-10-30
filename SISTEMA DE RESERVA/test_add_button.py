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

# Click the add button
click_js = """
(() => {
    const btn = document.querySelector('[data-testid="add-button"]');
    if (btn) {
        btn.click();
        return 'clicked add-button';
    }
    return 'add-button not found';
})()
"""

out, err = exec_js(click_js)
print("Click result:", out)

time.sleep(1)

# Check what popped up
inspect_popup = """
(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitem"], [role="option"], button, a, div[tabindex]')).map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim() : '',
        role: el.getAttribute('role'),
        testId: el.getAttribute('data-testid')
    })).filter(x => x.text && x.text.length < 50);
    return JSON.stringify(items.slice(0, 30));
})()
"""

out2, err2 = exec_js(inspect_popup)
print("Popup items:", out2)

