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

inspect_team_html = """
(() => {
    const box = document.querySelector('[data-testid="provider-select-input-box"]');
    if (!box) return 'no box';
    box.click();
    return document.querySelector('ul, [role="listbox"], [data-testid*="provider"]')?.outerHTML || 'no ul';
})()
"""

out, err = exec_js(inspect_team_html)
print("Team HTML:")
print(out)

