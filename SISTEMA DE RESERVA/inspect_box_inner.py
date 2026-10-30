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

inspect_box_inner = """
(() => {
    const box = document.querySelector('[data-testid="provider-select-input-box"]');
    return box ? box.outerHTML : 'no box';
})()
"""

out, err = exec_js(inspect_box_inner)
print("Box outer HTML:")
print(out)

