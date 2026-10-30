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

inspect_modal = """
(() => {
    const dialogs = Array.from(document.querySelectorAll('[role="dialog"], [role="alertdialog"], div.fixed')).map(d => ({
        text: d.innerText.trim(),
        buttons: Array.from(d.querySelectorAll('button')).map(b => b.innerText.trim())
    }));
    return JSON.stringify(dialogs);
})()
"""

out, err = exec_js(inspect_modal)
print("Dialogs:", out)

