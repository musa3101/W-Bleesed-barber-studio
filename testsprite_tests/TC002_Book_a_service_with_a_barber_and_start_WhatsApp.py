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
        
        # -> Scroll down to the services catalog and inspect the available services.
        await page.mouse.wheel(0, 300)
        
        # -> Select “Corte de pelo (fade al 0 moderno)” from the services catalog and inspect the booking dialog.
        # ⚡ Corte de pelo (fade al 0 moderno) Degradado...
        elem = page.get_by_text("⚡Corte de pelo (fade al 0")
        await elem.click(timeout=10000)
        
        # -> Select the barber “Gus” and check whether WhatsApp opens with the service and barber details prefilled.
        # 💈 Gus Maestro Barbero button
        elem = page.get_by_role("button", name="Gus Maestro Barbero")
        await elem.click(timeout=10000)
        
        # -> Select Gus and verify whether WhatsApp opens with the service and barber details prefilled.
        # 💈 Gus Maestro Barbero button
        elem = page.get_by_role("button", name="Gus Maestro Barbero")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The WhatsApp booking message should include the selected service, “Corte de pelo (fade al 0 moderno).”
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: Expected the WhatsApp booking link to include the selected service.
        await expect(page).to_have_url(re.compile("Corte\\ de\\ pelo\\ \\(fade\\ al\\ 0\\ moderno\\)"), timeout=15000), "Expected the WhatsApp booking link to include the selected service."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    