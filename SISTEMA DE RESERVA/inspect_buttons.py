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

inspect_code = """
(() => {
    // Check iframes
    const iframes = Array.from(document.querySelectorAll('iframe')).map(f => f.src);
    
    // Check main buttons
    const allButtons = Array.from(document.querySelectorAll('button')).map(b => ({
        text: b.innerText.trim(),
        aria: b.getAttribute('aria-label') || '',
        testId: b.getAttribute('data-testid') || '',
        svg: !!b.querySelector('svg'),
        rect: b.getBoundingClientRect()
    })).filter(b => b.rect.width > 0);

    return JSON.stringify({
        iframes,
        buttons: allButtons
    });
})()
"""

out, err = exec_js(inspect_code)
print("Buttons & IFrames:")
print(out)

