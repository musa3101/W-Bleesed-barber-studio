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

# Let's see what happens if we click on card 0
click_card = """
(() => {
    const card = document.querySelector('[data-testid="meeting-card-service-0"]');
    if (!card) return 'no card 0';
    // Let's click the card itself or inspect what clickable elements are in it
    card.click();
    return 'clicked card 0';
})()
"""

out, err = exec_js(click_card)
print("Click card:", out)
time.sleep(1)

inspect_dom = """
(() => {
    const titles = Array.from(document.querySelectorAll('input, textarea, [data-testid], h1, h2, h3, h4, h5')).map(el => ({
        tag: el.tagName,
        testId: el.getAttribute('data-testid'),
        val: el.value,
        text: el.innerText ? el.innerText.trim() : ''
    })).filter(x => x.testId || x.tag === 'INPUT' || x.tag === 'TEXTAREA');
    return JSON.stringify(titles.slice(0, 30), null, 2);
})()
"""

out2, err2 = exec_js(inspect_dom)
print("DOM after click card:", out2)
