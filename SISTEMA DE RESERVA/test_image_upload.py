#!/usr/bin/env python3
import subprocess
import time
import base64
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

# Read the image as base64
img_path = "/Users/musa/W-Bleesed barberia/SISTEMA DE RESERVA/fotos de corte-SETMORE/01_corte_al_0_moderno.jpg"
with open(img_path, "rb") as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

print(f"Base64 length: {len(b64_data)}")

# 1. Open the card for "Corte de pelo al 0 moderno"
open_card = """
(() => {
    const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-"]'));
    const target = cards.find(c => c.innerText.includes('Corte de pelo al 0 moderno'));
    if (!target) return 'target card not found';
    target.click();
    return 'clicked target card';
})()
"""
out, _ = exec_js(open_card)
print("Open card:", out)
time.sleep(1.0)

# 2. Assign the file using DataTransfer and trigger change
upload_script = f"""
(async () => {{
    const input = document.querySelector('input[data-testid="upload-file-input"]') || document.querySelector('input[type="file"]');
    if (!input) return 'no file input found';

    const b64 = "{b64_data}";
    const byteCharacters = atob(b64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {{
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }}
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {{ type: 'image/jpeg' }});
    const file = new File([blob], '01_corte_al_0_moderno.jpg', {{ type: 'image/jpeg' }});

    const dt = new DataTransfer();
    dt.items.add(file);
    input.files = dt.files;

    input.dispatchEvent(new Event('input', {{ bubbles: true }}));
    input.dispatchEvent(new Event('change', {{ bubbles: true }}));

    return 'file assigned, length: ' + input.files.length;
}})()
"""

out2, err2 = exec_js(upload_script)
print("Upload script result:", out2)
if err2:
    print("Err2:", err2)

