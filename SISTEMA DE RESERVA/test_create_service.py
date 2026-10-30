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

check_gus_and_done = """
(() => {
    const drawer = document.querySelector('.input-drawers');
    if (!drawer) return 'no drawer';

    // Click checkbox for Gustavo
    const cb = drawer.querySelector('input[type="checkbox"]');
    if (cb && !cb.checked) {
        cb.click();
    }

    // Click Done button
    const doneBtn = Array.from(drawer.querySelectorAll('button')).find(b => b.innerText.trim() === 'Done');
    if (doneBtn) {
        doneBtn.click();
        return 'clicked checkbox and Done';
    }
    return 'done button not found';
})()
"""

out, err = exec_js(check_gus_and_done)
print("Drawer result:", out)

time.sleep(1)

# Now click Create
click_create = """
(() => {
    const submitBtn = document.querySelector('button[data-testid="form-submit-button"]');
    if (submitBtn) {
        submitBtn.click();
        return 'clicked Create button';
    }
    return 'Create button not found';
})()
"""

out2, err2 = exec_js(click_create)
print("Create result:", out2)

time.sleep(3)

# Check cards
check_cards = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => c.innerText.trim());
    return JSON.stringify(cards);
})()
"""

out3, err3 = exec_js(check_cards)
print("Cards now on page:", out3)

