#!/usr/bin/env python3
import subprocess
import time

def exec_setmore_js(js):
    escaped_js = js.replace('\\', '\\\\').replace('"', '\\"')
    script = f'''tell application "Google Chrome" to tell (first tab of window 1 whose URL contains "setmore") to execute javascript "{escaped_js}"'''
    p = subprocess.Popen(['osascript'], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    out, err = p.communicate(input=script)
    return out.strip()

# Target services that have "(efectivo)" in title
targets = [
    ("Decoloración+corte", "Decoloración + corte"),
    ("Mechas + corte", "Mechas + corte 👱🏻‍♂️🧊"),
    ("Barba moderna", "Barba moderna 🧔🏻‍♂️🔥"),
    ("Corte + barba + cejas", "Corte + barba + cejas"),
    ("Corte + cejas", "Corte + cejas"),
    ("Corte de pelo al 0 moderno", "Corte de pelo al 0 moderno 🔥"),
]

for pattern, new_title in targets:
    print(f"\n==========================================")
    print(f"Limpiando título para '{pattern}' -> '{new_title}'...")

    # 1. Close drawer if open
    exec_setmore_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

    # 2. Click target card
    open_js = f'''
    (() => {{
        const cards = Array.from(document.querySelectorAll('[data-testid^="meeting-card-service-"]'));
        const card = cards.find(c => {{
            const t = c.innerText.split('\\n')[0];
            return t.includes("{pattern}");
        }});
        if (card) {{ card.click(); return 'clicked'; }}
        return 'not found';
    }})()
    '''
    r_open = exec_setmore_js(open_js)
    print("1. Abrir tarjeta:", r_open)
    if r_open != 'clicked':
        print(f"No se pudo abrir tarjeta para {pattern}")
        continue
    time.sleep(1.8)

    # 3. Set new title
    set_title_js = f'''
    (() => {{
        function setReactVal(el, val) {{
            const proto = window.HTMLInputElement.prototype;
            const setter = Object.getOwnPropertyDescriptor(proto, 'value').set;
            setter.call(el, val);
            el.dispatchEvent(new Event('input', {{ bubbles: true }}));
            el.dispatchEvent(new Event('change', {{ bubbles: true }}));
            el.dispatchEvent(new Event('blur', {{ bubbles: true }}));
        }}
        const titleInput = document.querySelector('input[data-testid="service-title"]');
        if (titleInput) {{
            setReactVal(titleInput, "{new_title}");
            return 'title updated to ' + titleInput.value;
        }}
        return 'no title input';
    }})()
    '''
    r_set = exec_setmore_js(set_title_js)
    print("2. Nuevo título:", r_set)
    time.sleep(1.0)

    # 4. Save
    save_js = '''
    (() => {
        const saveBtn = document.querySelector('button[data-testid="form-submit-button"]');
        if (saveBtn && !saveBtn.disabled) {
            saveBtn.click();
            return 'clicked Save';
        }
        return 'save disabled or not found';
    })()
    '''
    r_save = exec_setmore_js(save_js)
    print("3. Guardar:", r_save)
    time.sleep(2.5)

    # 5. Close drawer
    exec_setmore_js('document.querySelector(\'button[data-testid="form-back-button"]\')?.click();')
    time.sleep(1.0)

print("\n🎉 Todos los títulos han sido limpiados sin la palabra '(efectivo)'!")

