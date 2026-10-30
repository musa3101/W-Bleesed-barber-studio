#!/usr/bin/env python3
import subprocess
import time

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

# Open Corte + cejas
open_cejas = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));
    const target = cards.find(c => c.innerText.includes('Corte + cejas'));
    if (!target) return 'target not found';
    target.click();
    return 'clicked target';
})()
"""

out, err = exec_js(open_cejas)
print("Open:", out)
time.sleep(1.5)

inspect_cejas = """
(() => {
    const uploadBtn = document.querySelector('[data-testid="image-upload-button"]');
    const imgPreview = document.querySelector('[data-testid="scrollable-container"] img');
    return JSON.stringify({
        uploadBtnText: uploadBtn ? uploadBtn.innerText : null,
        imgSrc: imgPreview ? imgPreview.src : null
    });
})()
"""
out2, err2 = exec_js(inspect_cejas)
print("Inspect:", out2)

