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

upload_js = """
(async () => {
    try {
        const input = document.querySelector('input[data-testid="upload-file-input"]');
        if (!input) return 'no file input found';

        const res = await fetch('http://localhost:8765/01_corte_al_0_moderno.jpg');
        const blob = await res.blob();
        const file = new File([blob], '01_corte_al_0_moderno.jpg', { type: 'image/jpeg' });

        const dt = new DataTransfer();
        dt.items.add(file);
        input.files = dt.files;

        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));

        return 'success, file attached: ' + file.size + ' bytes';
    } catch (e) {
        return 'error: ' + e.message;
    }
})()
"""

out, err = exec_js(upload_js)
print("Upload result:", out)
if err:
    print("Err:", err)

