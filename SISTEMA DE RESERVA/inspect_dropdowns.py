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

inspect_all_dropdowns = """
(() => {
    const list = Array.from(document.querySelectorAll('*')).filter(el => {
        const t = el.innerText ? el.innerText.trim() : '';
        return t === 'Select team' || t === 'Gustavo Quinoz' || el.getAttribute('data-testid')?.includes('provider');
    }).map(el => ({
        tag: el.tagName,
        testId: el.getAttribute('data-testid'),
        className: el.className,
        text: el.innerText ? el.innerText.trim() : ''
    }));
    return JSON.stringify(list);
})()
"""

out, err = exec_js(inspect_all_dropdowns)
print("Dropdown candidates:", out)

