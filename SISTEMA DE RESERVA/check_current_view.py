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

check_current_view = """
(() => {
    const drawer = document.querySelector('[data-testid="scrollable-container"]');
    const dialogs = Array.from(document.querySelectorAll('[role="dialog"]')).map(d => d.innerText.slice(0, 100));
    return JSON.stringify({
        drawerOpen: !!drawer,
        drawerText: drawer ? drawer.innerText.slice(0, 200) : null,
        dialogs: dialogs
    });
})()
"""

out, err = exec_js(check_current_view)
print(out)

