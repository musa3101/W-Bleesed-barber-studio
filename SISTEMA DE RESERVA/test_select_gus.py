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

select_and_submit = """
(() => {
    // 1. Click Gustavo Quinoz LI
    const lis = Array.from(document.querySelectorAll('li, [role="option"]'));
    const gus = lis.find(el => el.innerText && el.innerText.includes('Gustavo Quinoz'));
    if (gus) {
        gus.click();
    }

    // 2. Click outside or close dropdown
    const title = document.querySelector('input[data-testid="service-title"]');
    if (title) title.click();

    // 3. Check submit button
    const submitBtn = document.querySelector('button[data-testid="form-submit-button"]');
    if (submitBtn) {
        submitBtn.click();
        return 'clicked submit';
    }
    return 'submit not found';
})()
"""

out, err = exec_js(select_and_submit)
print("Submit result:", out)

time.sleep(3)

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

