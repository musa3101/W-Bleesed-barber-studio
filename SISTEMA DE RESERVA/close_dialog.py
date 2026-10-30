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

close_dialog = """
(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const closeBtn = btns.find(b => b.getAttribute('aria-label') === 'Close' || b.getAttribute('aria-label') === 'close');
    if (closeBtn) {
        closeBtn.click();
        return 'closed';
    }
    return 'not found';
})()
"""

out, err = exec_js(close_dialog)
print("Close dialog:", out)

