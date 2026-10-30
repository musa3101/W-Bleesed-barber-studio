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

click_inner = """
(() => {
    const btn = document.querySelector('[data-testid="provider-select-input-box"] [role="button"]');
    if (btn) {
        btn.click();
        return 'clicked inner button';
    }
    return 'inner button not found';
})()
"""

out, err = exec_js(click_inner)
print("Click result:", out)

time.sleep(1)

check_popover = """
(() => {
    // Check all divs or elements with role dialog, listbox, popover, or fixed position
    const popovers = Array.from(document.querySelectorAll('[data-radix-popper-content-wrapper], [role="dialog"], [role="listbox"], [role="menu"], [class*="popover"], [class*="dropdown"]')).map(el => ({
        tag: el.tagName,
        html: el.outerHTML.slice(0, 500)
    }));
    return JSON.stringify(popovers);
})()
"""

out2, err2 = exec_js(check_popover)
print("Popovers:", out2)

