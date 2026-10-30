import subprocess
import time
import sys

def run_js(js_code):
    clean_js = js_code.replace('"', '\\"').replace('\n', ' ')
    cmd = [
        'osascript', '-e',
        f'tell application "Google Chrome" to tell active tab of window 1 to execute javascript "{clean_js}"'
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("Error executing JS:", res.stderr)
    return res.stdout.strip()

print("1. Setting Lead Time to 1 Hour...")
js_lead = """
(() => {
    // Set input value
    const input = document.getElementById('leadTime');
    if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, '1');
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
    }

    // Click unit dropdown
    const unitBtn = document.querySelector('[data-testid="dropdown_leadTime"]');
    if (unitBtn && !unitBtn.innerText.includes('Hours')) {
        unitBtn.click();
        return 'opened_lead_unit';
    }
    return 'already_hours';
})()
"""
res = run_js(js_lead)
print("Lead res:", res)

if 'opened' in res:
    time.sleep(0.5)
    js_pick_hour = """
    (() => {
        const opt = Array.from(document.querySelectorAll('[role=option], [role=menuitem]'))
            .find(el => el.innerText.trim() === 'Hours');
        if (opt) {
            opt.click();
            return 'picked_hours';
        }
        return 'hours_not_found';
    })()
    """
    print("Pick hours:", run_js(js_pick_hour))

time.sleep(0.5)

print("2. Setting Cancellation Time to 1 Hour...")
js_cancel = """
(() => {
    const btn = document.getElementById('cancellationTime');
    if (btn) {
        btn.click();
        return 'opened_cancel';
    }
    return 'no_cancel_btn';
})()
"""
print("Cancel click:", run_js(js_cancel))
time.sleep(0.5)
js_pick_cancel = """
(() => {
    const opt = Array.from(document.querySelectorAll('[role=option], [role=menuitem]'))
        .find(el => el.innerText.trim() === '1 Hour');
    if (opt) {
        opt.click();
        return 'picked_1_hour';
    }
    return '1_hour_not_found';
})()
"""
print("Pick cancel:", run_js(js_pick_cancel))

time.sleep(0.5)

print("3. Setting Scheduling Window to 60 Days...")
js_adv = """
(() => {
    const input = document.getElementById('advanceBooking');
    if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, '60');
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.dispatchEvent(new Event('change', { bubbles: true }));
        return 'set_60';
    }
    return 'no_adv_input';
})()
"""
print("Adv res:", run_js(js_adv))

time.sleep(0.5)

print("4. Setting Policy Text and checking Add policy to home...")
policy_text = "📍 Carrer Miquel Marquès 12, Palma. Rogamos puntualidad (máx. 10 min de cortesía). Cancelaciones con mínimo 1 hora de antelación. 💳💶 Aceptamos pago en efectivo y con tarjeta en el local."

js_policy = f"""
(() => {{
    const ta = document.getElementById('review');
    if (ta) {{
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
        nativeSetter.call(ta, `{policy_text}`);
        ta.dispatchEvent(new Event('input', {{ bubbles: true }}));
        ta.dispatchEvent(new Event('change', {{ bubbles: true }}));
    }}

    // Checkbox for Add policy to home
    const cb = document.querySelector('input[id*="r2m"]') || Array.from(document.querySelectorAll('input[type=checkbox]')).find(c => {{
        const p = c.closest('div') || c.parentElement;
        return p && p.innerText.includes('Add policy to home');
    }});
    if (cb && !cb.checked) {{
        cb.click();
    }}

    return 'policy_text_and_checkbox_set';
}})()
"""
print("Policy res:", run_js(js_policy))

time.sleep(0.5)

print("5. Setting Time Format to 24 Hours...")
js_tf = """
(() => {
    const btn = document.getElementById('time_format');
    if (btn && !btn.innerText.includes('24 Hours')) {
        btn.click();
        return 'opened_time_format';
    }
    return 'already_24h';
})()
"""
res = run_js(js_tf)
print("TF click:", res)
if 'opened' in res:
    time.sleep(0.5)
    js_pick_tf = """
    (() => {
        const opt = Array.from(document.querySelectorAll('[role=option], [role=menuitem]'))
            .find(el => el.innerText.trim() === '24 Hours');
        if (opt) {
            opt.click();
            return 'picked_24h';
        }
        return '24h_not_found';
    })()
    """
    print("Pick 24h:", run_js(js_pick_tf))

time.sleep(0.5)

print("6. Setting Preferred Language to Spanish...")
js_lang = """
(() => {
    const btn = document.getElementById('preferred_language');
    if (btn && !btn.innerText.includes('Spanish')) {
        btn.click();
        return 'opened_lang';
    }
    return 'already_spanish';
})()
"""
res = run_js(js_lang)
print("Lang click:", res)
if 'opened' in res:
    time.sleep(0.5)
    js_pick_lang = """
    (() => {
        const opt = Array.from(document.querySelectorAll('[role=option], [role=menuitem]'))
            .find(el => el.innerText.trim() === 'Spanish');
        if (opt) {
            opt.click();
            return 'picked_spanish';
        }
        return 'spanish_not_found';
    })()
    """
    print("Pick spanish:", run_js(js_pick_lang))

time.sleep(0.5)

print("7. Verifying all values before save...")
js_verify = """
(() => {
    return {
        leadTime: document.getElementById('leadTime')?.value,
        leadUnit: document.querySelector('[data-testid="dropdown_leadTime"]')?.innerText?.trim(),
        advanceBooking: document.getElementById('advanceBooking')?.value,
        cancellationTime: document.getElementById('cancellationTime')?.innerText?.trim(),
        timeFormat: document.getElementById('time_format')?.innerText?.trim(),
        lang: document.getElementById('preferred_language')?.innerText?.trim(),
        reviewLength: document.getElementById('review')?.value?.length,
        saveBtnDisabled: document.getElementById('saveButtonBp')?.disabled
    };
})()
"""
print("State before save:", run_js(js_verify))

