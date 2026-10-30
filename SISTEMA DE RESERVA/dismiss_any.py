#!/usr/bin/env python3
import subprocess
import time

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

dismiss_js = """
(() => {
    // 1. If any Cancel button is visible, click it
    const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Cancel');
    if (cancelBtn) {
        cancelBtn.click();
        return 'clicked cancel';
    }
    // 2. If drawer is open, click form-back-button
    const backBtn = document.querySelector('[data-testid="form-back-button"]');
    if (backBtn) {
        backBtn.click();
        return 'clicked back';
    }
    // 3. Dispatch Escape
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    return 'dispatched escape';
})()
"""

out, err = exec_js(dismiss_js)
print("Dismiss:", out)
