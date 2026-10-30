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

check_card_images = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
        const title = c.querySelector('[data-testid="meeting-card__title"]')?.innerText || c.innerText.split('\\n')[0];
        const img = c.querySelector('img');
        return {
            title: title.trim(),
            hasImage: !!img,
            imgSrc: img ? img.src : null
        };
    });
    return JSON.stringify(cards, null, 2);
})()
"""

out, err = exec_js(check_card_images)
print(out)

