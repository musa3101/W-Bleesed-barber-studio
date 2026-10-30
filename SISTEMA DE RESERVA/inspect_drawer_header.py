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

inspect_header = """
(() => {
    const container = document.querySelector('[data-testid="scrollable-container"]');
    if (!container) return 'no container';
    // Look at parent or sibling buttons
    const parent = container.parentElement;
    const buttons = Array.from(parent.querySelectorAll('button, svg, [role="button"]')).map(b => ({
        id: b.getAttribute('data-testid'),
        aria: b.getAttribute('aria-label'),
        text: b.innerText ? b.innerText.trim() : '',
        tag: b.tagName
    }));
    return JSON.stringify(buttons, null, 2);
})()
"""

out, err = exec_js(inspect_header)
print(out)
