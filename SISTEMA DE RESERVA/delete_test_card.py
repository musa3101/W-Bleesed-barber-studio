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

# Find card with text exactly starting with "Corte fade\n"
delete_test_card = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));
    const testCard = cards.find(c => {
        const t = c.innerText.trim();
        return t.startsWith('Corte fade\\n') || t.startsWith('Corte fade');
    });

    if (!testCard) return 'test card not found';

    // Find ellipsis button inside this card
    const ellipsis = testCard.querySelector('[data-testid="meeting-ellipsis-button"]');
    if (!ellipsis) return 'ellipsis not found';
    ellipsis.click();

    return 'clicked ellipsis on test card';
})()
"""

out, err = exec_js(delete_test_card)
print("Ellipsis click:", out)

time.sleep(1)

# Inspect menu items opened
inspect_menu = """
(() => {
    const items = Array.from(document.querySelectorAll('[role="menuitem"], button, [role="button"]')).map(el => ({
        tag: el.tagName,
        text: el.innerText ? el.innerText.trim() : '',
        role: el.getAttribute('role')
    })).filter(x => x.text.toLowerCase().includes('delete') || x.text.toLowerCase().includes('eliminar'));

    return JSON.stringify(items);
})()
"""

out2, err2 = exec_js(inspect_menu)
print("Delete menu items:", out2)

