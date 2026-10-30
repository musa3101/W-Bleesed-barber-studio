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
        
        # -> Select the “Corte de pelo (fade al 0 moderno)” service and check whether a barber-selection booking modal opens.
        # ⚡ Corte de pelo (fade al 0 moderno) Degradado...
        elem = page.get_by_text("⚡Corte de pelo (fade al 0 moderno)Degradado super candela + corte a tijera.14€")
        await elem.click(timeout=10000)
        
        # -> Choose the visible “Gus” barber option to continue the booking flow.
        # 💈 Gus Maestro Barbero button
        elem = page.get_by_role("button", name="Gus Maestro Barbero")
        await elem.click(timeout=10000)
        
        # -> Select “Gus” again and check whether the booking continues to WhatsApp with the selected service and barber.
        # 💈 Gus Maestro Barbero button
        elem = page.get_by_role("button", name="Gus Maestro Barbero")
        await elem.click(timeout=10000)
        
        # -> Inspect the newly opened blank-titled tab for a WhatsApp booking destination and prefilled message.
        # Switch to tab E957
        page = context.pages[-1]  # switch to most recently active tab
        
        # --> Assertions to verify final state
        
        # --> WhatsApp opened with a visible prefilled booking message.
        await page.locator("#main_block div").filter(has_text="Hola Blessed Studio, me").nth(1).nth(0).scroll_into_view_if_needed()
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: Expected the prefilled booking message to be visible on WhatsApp.
        await expect(page.locator("#main_block div").filter(has_text="Hola Blessed Studio, me").nth(1).nth(0)).to_be_visible(timeout=15000), "Expected the prefilled booking message to be visible on WhatsApp."
        
        # --> The WhatsApp message includes barber Gus but omits the selected service.
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: Expected the prefilled message to include the selected service name.
        await expect(page.locator("#main_block").nth(0)).to_contain_text("Corte de pelo (fade al 0 moderno)", timeout=15000), "Expected the prefilled message to include the selected service name."
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: Expected the prefilled message to include the selected barber Gus.
        await expect(page.locator("#main_block").nth(0)).to_contain_text("Gus", timeout=15000), "Expected the prefilled message to include the selected barber Gus."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    