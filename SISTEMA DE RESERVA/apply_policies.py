import subprocess
import time
import json

def exec_js(js):
    # Pass js via stdin or base64 to avoid all escaping problems
    cmd = ['osascript', '-l', 'JavaScript', '-e', f'''
    const chrome = Application('Google Chrome');
    const tab = chrome.windows[0].activeTab;
    tab.execute({{javascript: {json.dumps(js)}}});
    ''']
    res = subprocess.run(cmd, capture_output=True, text=True)
    return res.stdout.strip()

print("Setting leadTime input to 1...")
r1 = exec_js("""
(() => {
    const input = document.getElementById('leadTime');
    if (input) {
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(input, '1');
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        return 'leadTime set to 1';
    }
    return 'leadTime input not found';
})()
""")
print(r1)

print("Setting leadTime unit to Hours...")
r2 = exec_js("""
(() => {
    const btn = document.querySelector('[data-testid="dropdown_leadTime"]');
    if (btn) {
        btn.click();
        return 'clicked lead dropdown';
    }
    return 'btn not found';
})()
""")
print(r2)
time.sleep(0.5)

r3 = exec_js("""
(() => {
    const opt = document.getElementById('hour') || document.querySelector('[data-testid="dropdown_hour"]');
    if (opt) {
        opt.click();
        return 'selected hour';
    }
    return 'hour option not found';
})()
""")
print(r3)

print("Setting Policy Text...")
policy_text = "📍 Carrer Miquel Marquès 12, Palma. Rogamos puntualidad (máx. 10 min de cortesía). Cancelaciones con mínimo 1 hora de antelación. 💳💶 Aceptamos pago en efectivo y con tarjeta en el local."
r4 = exec_js(f"""
(() => {{
    const ta = document.getElementById('review');
    if (ta) {{
        const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
        setter.call(ta, {json.dumps(policy_text)});
        ta.dispatchEvent(new Event('input', {{ bubbles: true }}));
        ta.dispatchEvent(new Event('change', {{ bubbles: true }}));
        return 'policy text set';
    }}
    return 'review textarea not found';
}})()
""")
print(r4)

print("Checking 'Add policy to home' checkbox...")
r5 = exec_js("""
(() => {
    const cb = Array.from(document.querySelectorAll('input[type=checkbox]')).find(c => {
        const p = c.closest('div') || c.parentElement;
        return p && p.innerText.includes('Add policy to home');
    }) || document.querySelector('input[id*="r2m"]');
    if (cb && !cb.checked) {
        cb.click();
        return 'checkbox checked';
    }
    return 'already checked or not found';
})()
""")
print(r5)

print("Setting Time format to 24 Hours...")
r6 = exec_js("""
(() => {
    const tfBtn = document.getElementById('time_format');
    if (tfBtn && !tfBtn.innerText.includes('24 Hours')) {
        tfBtn.click();
        return 'clicked time_format';
    }
    return 'already 24 Hours';
})()
""")
print(r6)
time.sleep(0.5)

r7 = exec_js("""
(() => {
    const opt = Array.from(document.querySelectorAll('[role=option], li')).find(el => el.innerText && el.innerText.includes('24 Hours'));
    if (opt) {
        opt.click();
        return 'selected 24 Hours';
    }
    return '24 Hours option not found';
})()
""")
print(r7)

print("Verifying current state...")
r8 = exec_js("""
(() => {
    return {
        leadTime: document.getElementById('leadTime')?.value,
        leadUnit: document.querySelector('[data-testid="dropdown_leadTime"]')?.innerText?.trim(),
        advanceBooking: document.getElementById('advanceBooking')?.value,
        cancellationTime: document.getElementById('cancellationTime')?.innerText?.trim(),
        timeFormat: document.getElementById('time_format')?.innerText?.trim(),
        lang: document.getElementById('preferred_language')?.innerText?.trim(),
        reviewText: document.getElementById('review')?.value,
        saveBtnDisabled: document.getElementById('saveButtonBp')?.disabled
    };
})()
""")
print("Final state:", r8)

