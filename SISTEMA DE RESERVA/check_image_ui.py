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

check_image_ui = """
(() => {
    // Check if an image or cropper or upload preview is visible
    const imgs = Array.from(document.querySelectorAll('img')).map(i => i.src).filter(s => !s.includes('avatar') && !s.includes('google'));
    const uploadBtn = document.querySelector('[data-testid="image-upload-button"]');
    const saveBtn = document.querySelector('[data-testid="form-submit-button"]');
    return JSON.stringify({
        images: imgs,
        uploadBtnText: uploadBtn ? uploadBtn.innerText : null,
        saveBtnDisabled: saveBtn ? saveBtn.disabled : null
    });
})()
"""

out, err = exec_js(check_image_ui)
print("Image UI:", out)

