#!/usr/bin/env python3
import subprocess
import json

def exec_js(js):
    # Escape backslashes and double quotes for AppleScript string literal
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

inspect_code = """
(() => {
    const data = {
        title: document.title,
        textElements: Array.from(document.querySelectorAll('h1, h2, h3, button, a')).map(el => ({
            tag: el.tagName,
            text: el.innerText ? el.innerText.trim() : '',
            aria: el.getAttribute('aria-label') || '',
            className: el.className
        })).filter(x => x.text || x.aria)
    };
    return JSON.stringify(data);
})()
"""

out, err = exec_js(inspect_code)
print("DOM inspection:")
print(out[:2000])
if err:
    print("Err:", err)

