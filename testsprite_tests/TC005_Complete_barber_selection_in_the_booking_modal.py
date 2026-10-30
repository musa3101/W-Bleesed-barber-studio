import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Scroll down the homepage to locate the services section and available service cards.
        await page.mouse.wheel(0, 300)
        
        # -> Select the “Corte de pelo (fade al 0 moderno)” service to open its booking flow.
        # ⚡ Corte de pelo (fade al 0 moderno) Degradado...
        elem = page.get_by_text("⚡Corte de pelo (fade al 0 moderno)Degradado super candela + corte a tijera.14€")
        await elem.click(timeout=10000)
        
        # -> Choose the barber “Gus” and verify the booking dialog reflects that choice before continuing.
        # 💈 Gus Maestro Barbero button
        elem = page.get_by_role("button", name="Gus Maestro Barbero")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> Gus is visibly highlighted as the selected barber in the booking dialog.
        await page.get_by_role("button", name="Gus Maestro Barbero").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: Gus’s barber option should be visible in the booking dialog.
        await expect(page.get_by_role("button", name="Gus Maestro Barbero").nth(0)).to_be_visible(timeout=15000), "Gus\u2019s barber option should be visible in the booking dialog."
        
        # --> The selected service remains displayed while the dialog is at the barber-selection stage.
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: The booking dialog should continue to show the selected service.
        await expect(page.get_by_label("Elige tu barbero").nth(0)).to_contain_text("Corte de pelo (fade al 0 moderno)", timeout=15000), "The booking dialog should continue to show the selected service."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    