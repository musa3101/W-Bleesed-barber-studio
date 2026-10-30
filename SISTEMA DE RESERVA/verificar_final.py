#!/usr/bin/env python3
import subprocess
import time
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

# Let's inspect the cards
get_details = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
        const textLines = c.innerText.trim().split('\\n');
        const showBadge = textLines.includes('S');
        return {
            id: c.getAttribute('data-testid'),
            name: textLines[0],
            details: textLines[1],
            visibleOnBookingPage: showBadge
        };
    });
    return JSON.stringify(cards, null, 2);
})()
"""

out, err = exec_js(get_details)
print("VERIFIED SERVICES ON SETMORE:")
print(out)
