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

check_share = """
(() => {
    const shareBtn = document.querySelector('[data-testid="share-button"]');
    if (shareBtn) shareBtn.click();
    return 'clicked share';
})()
"""

out, err = exec_js(check_share)

import time
time.sleep(1)

get_link = """
(() => {
    const inputs = Array.from(document.querySelectorAll('input')).map(i => i.value).filter(v => v.includes('.setmore.com'));
    const as = Array.from(document.querySelectorAll('a')).map(a => a.href).filter(h => h.includes('.setmore.com'));
    return JSON.stringify({ inputs, as });
})()
"""

out2, err2 = exec_js(get_link)
print("Share link:", out2)

