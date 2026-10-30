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

# Click the service menu item
click_service = """
(() => {
    const item = document.querySelector('[data-testid="service"]');
    if (item) {
        item.click();
        return 'clicked service menuitem';
    }
    return 'service menuitem not found';
})()
"""

out, err = exec_js(click_service)
print("Click Service result:", out)

time.sleep(1)

# Check what form/modal opened
inspect_form = """
(() => {
    const inputs = Array.from(document.querySelectorAll('input, textarea, select')).map(el => ({
        tag: el.tagName,
        type: el.type,
        name: el.name,
        placeholder: el.placeholder,
        testId: el.getAttribute('data-testid'),
        id: el.id,
        value: el.value
    }));

    const buttons = Array.from(document.querySelectorAll('button')).map(b => ({
        text: b.innerText.trim(),
        testId: b.getAttribute('data-testid')
    })).filter(b => b.text || b.testId);

    return JSON.stringify({
        url: window.location.href,
        inputs: inputs,
        buttons: buttons
    });
})()
"""

out2, err2 = exec_js(inspect_form)
print("Form inspection:")
print(out2)

