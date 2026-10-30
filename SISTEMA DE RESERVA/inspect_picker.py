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

inspect_team_picker = """
(() => {
    const box = document.querySelector('[data-testid="provider-select-input-box"]');
    if (box) box.click();

    // Check all elements in document that appeared
    const matches = Array.from(document.querySelectorAll('*')).filter(el => {
        return (el.innerText && el.innerText.trim() === 'Gustavo Quinoz') || 
               el.getAttribute('data-testid')?.includes('staff') ||
               el.getAttribute('data-testid')?.includes('provider');
    }).map(el => ({
        tag: el.tagName,
        testId: el.getAttribute('data-testid'),
        className: el.className,
        text: el.innerText.trim().slice(0, 50)
    }));

    return JSON.stringify(matches);
})()
"""

out, err = exec_js(inspect_team_picker)
print("Picker elements:", out)

