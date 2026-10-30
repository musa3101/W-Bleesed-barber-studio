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

find_staff = """
(() => {
    // Look for anything related to staff or provider
    const all = Array.from(document.querySelectorAll('input[type="checkbox"], [role="checkbox"], [data-testid*="staff"], [data-testid*="provider"], div, button, label')).map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim() : '',
        testId: el.getAttribute('data-testid') || '',
        type: el.type,
        checked: el.checked
    })).filter(x => x.text.toLowerCase().includes('gustavo') || x.testId.toLowerCase().includes('staff') || x.testId.toLowerCase().includes('provider') || (x.tag === 'INPUT' && x.type === 'checkbox'));

    return JSON.stringify(all);
})()
"""

out, err = exec_js(find_staff)
print("Staff elements:", out)

