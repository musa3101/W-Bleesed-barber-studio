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

get_booking_info = """
(() => {
    // 1. Get cards list
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]')).map(c => {
        const lines = c.innerText.trim().split('\\n');
        return {
            title: lines[0],
            details: lines[1]
        };
    });

    // 2. Find booking page link or share button
    const links = Array.from(document.querySelectorAll('a, button, span')).map(el => ({
        text: el.innerText ? el.innerText.trim() : '',
        href: el.getAttribute('href') || ''
    })).filter(x => x.text.includes('.setmore.com') || x.href.includes('.setmore.com'));

    return JSON.stringify({
        servicesCount: cards.length,
        services: cards,
        bookingLinks: links
    });
})()
"""

out, err = exec_js(get_booking_info)
print("Booking info:", out)

