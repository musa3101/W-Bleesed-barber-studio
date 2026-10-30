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

inspect_gus_row = """
(() => {
    const drawer = document.querySelector('.input-drawers');
    if (!drawer) return 'no drawer';
    const gusRow = Array.from(drawer.querySelectorAll('div, li, label')).find(el => el.innerText && el.innerText.trim() === 'Gustavo Quinoz');
    return JSON.stringify({
        rowHtml: gusRow ? gusRow.parentElement.outerHTML : 'no gus row',
        drawerButtons: Array.from(drawer.querySelectorAll('button')).map(b => ({
            text: b.innerText.trim(),
            testId: b.getAttribute('data-testid'),
            aria: b.getAttribute('aria-label')
        }))
    });
})()
"""

out, err = exec_js(inspect_gus_row)
print("Gus row in drawer:", out)

