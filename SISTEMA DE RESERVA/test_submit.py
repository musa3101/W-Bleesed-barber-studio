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

click_submit = """
(() => {
    const btn = document.querySelector('button[data-testid="form-submit-button"]');
    if (btn) {
        btn.click();
        return 'clicked Create';
    }
    return 'create button not found';
})()
"""

out, err = exec_js(click_submit)
print("Submit result:", out)

time.sleep(2)

check_cards = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => c.innerText.trim());
    return JSON.stringify({
        url: window.location.href,
        services: cards
    });
})()
"""

out2, err2 = exec_js(check_cards)
print("Cards after creation:", out2)

