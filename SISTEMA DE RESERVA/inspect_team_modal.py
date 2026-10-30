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

inspect_team_modal = """
(() => {
    const h5 = Array.from(document.querySelectorAll('h5')).find(el => el.innerText.includes('Select team'));
    if (!h5) return 'no h5';
    let container = h5.parentElement;
    while (container && !container.querySelector('.flex.items-center.gap-3.w-full.pr-5')) {
        container = container.parentElement;
    }
    return container ? container.outerHTML : 'no container';
})()
"""

out, err = exec_js(inspect_team_modal)
print("Team Modal HTML:")
print(out[:2000])

