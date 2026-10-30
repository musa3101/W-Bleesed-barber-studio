#!/usr/bin/env python3
import subprocess

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

dismiss_modal = """
(() => {
    const dialog = Array.from(document.querySelectorAll('[role="dialog"]')).find(d => d.innerText.includes("Can't delete"));
    if (dialog) {
        const btn = dialog.querySelector('button');
        if (btn) {
            btn.click();
            return 'clicked dialog button';
        }
    }
    // Also try pressing Escape key
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', code: 'Escape', keyCode: 27, which: 27, bubbles: true }));
    return 'dispatched escape';
})()
"""

out, err = exec_js(dismiss_modal)
print("Dismiss result:", out)

