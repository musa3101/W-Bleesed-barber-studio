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

js = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
        return {
            id: c.getAttribute('data-testid'),
            text: c.innerText.trim(),
            buttons: Array.from(c.querySelectorAll('button, [role="button"]')).map(b => ({
                id: b.getAttribute('data-testid'),
                text: b.innerText.trim(),
                aria: b.getAttribute('aria-label')
            }))
        };
    });
    return JSON.stringify(cards, null, 2);
})()
"""

out, err = exec_js(js)
print(out)
if err:
    print("ERR:", err)
