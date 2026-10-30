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

inspect_current = """
(() => {
    const form = document.querySelector('input[data-testid="service-title"]');
    const submitBtn = document.querySelector('button[data-testid="form-submit-button"]');
    const errorTexts = Array.from(document.querySelectorAll('[class*="error"], [role="alert"]')).map(e => e.innerText.trim());
    return JSON.stringify({
        formOpen: !!form,
        submitBtnExists: !!submitBtn,
        submitBtnDisabled: submitBtn ? submitBtn.disabled : null,
        errorTexts: errorTexts
    });
})()
"""

out, err = exec_js(inspect_current)
print("Current state:", out)

