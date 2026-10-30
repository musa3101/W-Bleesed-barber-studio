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

inspect_edit_form = """
(() => {
    const titleInput = document.querySelector('input[data-testid="service-title"]');
    const descInput = document.querySelector('textarea[data-testid="service-description"]');
    const durInput = document.querySelector('input[data-testid="service-duration"]');
    const costInput = document.querySelector('input[data-testid="service-cost"]');
    const submitBtn = document.querySelector('button[data-testid="form-submit-button"]');
    const cancelBtn = Array.from(document.querySelectorAll('button')).find(b => b.innerText.trim().toLowerCase() === 'cancel');

    return JSON.stringify({
        title: titleInput ? { val: titleInput.value, id: titleInput.getAttribute('data-testid') } : null,
        desc: descInput ? { val: descInput.value, id: descInput.getAttribute('data-testid') } : null,
        dur: durInput ? { val: durInput.value, id: durInput.getAttribute('data-testid') } : null,
        cost: costInput ? { val: costInput.value, id: costInput.getAttribute('data-testid') } : null,
        submit: submitBtn ? { text: submitBtn.innerText.trim(), id: submitBtn.getAttribute('data-testid'), disabled: submitBtn.disabled } : null,
        cancel: cancelBtn ? { text: cancelBtn.innerText.trim() } : null
    }, null, 2);
})()
"""

out, err = exec_js(inspect_edit_form)
print(out)
