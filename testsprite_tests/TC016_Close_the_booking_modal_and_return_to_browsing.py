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
        
        # -> Select the 'Corte de pelo (fade al 0 moderno)' service card to open its booking modal.
        # ⚡ Corte de pelo (fade al 0 moderno) Degradado...
        elem = page.get_by_text("⚡Corte de pelo (fade al 0 moderno)Degradado super candela + corte a tijera.14€")
        await elem.click(timeout=10000)
        
        # -> Close the booking dialog and verify that the services page is visible and accessible again.
        # Close button
        elem = page.get_by_role("button", name="Close")
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> The services catalog remains visible and accessible after the booking modal is closed.
        await page.get_by_text("⚡Corte de pelo (fade al 0 moderno)Degradado super candela + corte a tijera.14€").nth(0).scroll_into_view_if_needed()
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: The services catalog should remain visible and accessible.
        await expect(page.get_by_text("⚡Corte de pelo (fade al 0 moderno)Degradado super candela + corte a tijera.14€").nth(0)).to_be_visible(timeout=15000), "The services catalog should remain visible and accessible."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    