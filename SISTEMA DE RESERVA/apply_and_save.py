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

apply_and_save = """
(() => {
    // 1. Click Apply button in crop modal
    const applyBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim() === 'Apply');
    if (applyBtn) {
        applyBtn.click();
    } else {
        return 'apply button not found';
    }
    return 'clicked Apply';
})()
"""

out, err = exec_js(apply_and_save)
print("Apply result:", out)

time.sleep(1.5)

save_js = """
(() => {
    const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
    if (saveBtn) {
        saveBtn.click();
        return 'clicked Save';
    }
    return 'save button not found';
})()
"""

out2, err2 = exec_js(save_js)
print("Save result:", out2)

