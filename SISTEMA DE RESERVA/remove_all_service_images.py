#!/usr/bin/env python3
import subprocess
import time

def exec_js(js):
    escaped_js = js.replace('\\', '\\\\').replace('"', '\\"')
    script = f'''tell application "Google Chrome" to tell active tab of window 1 to execute javascript "{escaped_js}"'''
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return out.strip()

print("Iniciando eliminación de fotos de todos los servicios...")

# Services 0 to 9
for idx in range(10):
    print(f"\n----------------------------------------")
    print(f"Comprobando tarjeta meeting-card-service-{idx}...")

    # 1. Close drawer if open
    exec_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

    # 2. Click card
    open_js = f'''
    (() => {{
        const card = document.querySelector('[data-testid="meeting-card-service-{idx}"]');
        if (card) {{ card.click(); return 'clicked'; }}
        return 'card not found';
    }})()
    '''
    r_open = exec_js(open_js)
    if r_open != 'clicked':
        print(f"Tarjeta {idx} no encontrada: {r_open}")
        continue
    time.sleep(1.8)

    # 3. Check and click delete icon
    check_and_del = '''
    (() => {
        const delBtn = document.querySelector('[data-testid="image-upload-delete-icon"]');
        if (delBtn) {
            delBtn.click();
            return 'deleted';
        }
        return 'no_image';
    })()
    '''
    r_del = exec_js(check_and_del)
    print(f"Estado de imagen en servicio {idx}:", r_del)

    if r_del == 'deleted':
        time.sleep(1.0)
        # Click Save
        save_js = '''
        (() => {
            const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
            if (saveBtn && !saveBtn.disabled) {
                saveBtn.click();
                return 'saved';
            }
            return 'save disabled or not found';
        })()
        '''
        r_save = exec_js(save_js)
        print(f"Guardado de servicio {idx}:", r_save)
        time.sleep(2.5)

    # 4. Close drawer
    exec_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

print("\n✅ Proceso de eliminación completado.")

