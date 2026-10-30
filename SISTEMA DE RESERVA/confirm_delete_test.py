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

confirm_delete = """
(() => {
    // 1. Click Delete menuitem
    const delItem = Array.from(document.querySelectorAll('[role="menuitem"]')).find(el => el.innerText.trim() === 'Delete');
    if (delItem) {
        delItem.click();
    } else {
        return 'no delete menuitem';
    }

    return 'clicked delete menuitem';
})()
"""

out, err = exec_js(confirm_delete)
print("Click delete result:", out)

time.sleep(1)

# Check if there is a confirmation modal
confirm_modal = """
(() => {
    const confirmBtn = Array.from(document.querySelectorAll('button, [role="button"]')).find(b => {
        const t = (b.innerText || '').toLowerCase();
        return t === 'delete' || t === 'confirm' || t === 'yes' || t === 'eliminar';
    });
    if (confirmBtn) {
        confirmBtn.click();
        return 'clicked confirm delete button';
    }
    return 'no confirm modal needed';
})()
"""

out2, err2 = exec_js(confirm_modal)
print("Confirm modal result:", out2)

time.sleep(2)

# Verify remaining services
check_final = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
        const lines = c.innerText.trim().split('\\n');
        return {
            name: lines[0],
            details: lines[1]
        };
    });
    return JSON.stringify(cards);
})()
"""

out3, err3 = exec_js(check_final)
print("Final clean list:", out3)

