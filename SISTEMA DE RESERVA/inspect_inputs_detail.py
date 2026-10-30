#!/usr/bin/env python3
import subprocess
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

inspect_inputs = """
(() => {
    const dur = document.querySelector('input[data-testid="service-duration"]');
    const cost = document.querySelector('input[data-testid="service-cost"]');
    return JSON.stringify({
        dur: dur ? {
            value: dur.value,
            placeholder: dur.placeholder,
            parentText: dur.parentElement ? dur.parentElement.innerText : ''
        } : null,
        cost: cost ? {
            value: cost.value,
            placeholder: cost.placeholder,
            parentText: cost.parentElement ? cost.parentElement.innerText : ''
        } : null
    });
})()
"""

out, err = exec_js(inspect_inputs)
print("Inputs detail:", out)

