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
        
        # -> Scroll down the homepage to find the location section and check its address and hours.
        await page.mouse.wheel(0, 300)
        
        # --> Assertions to verify final state
        
        # --> The location section shows the studio address, Carrer Miquel Marquès, 12, 07005 Palma de Mallorca.
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: The studio address is visible.
        await expect(page.locator("#root").nth(0)).to_contain_text("Carrer Miquel Marqu\u00e8s, 12 \u00b7 07005 Palma de Mallorca", timeout=15000), "The studio address is visible."
        
        # --> The location section shows Monday–Saturday hours of 10:00–20:00 and is closed on Sunday.
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: The operating hours are visible.
        await expect(page.locator("#root").nth(0)).to_contain_text("Lun 10:00 - 20:00 Mar 10:00 - 20:00 Mi\u00e9 10:00 - 20:00 Jue 10:00 - 20:00 Vie 10:00 - 20:00 S\u00e1b 10:00 - 20:00 Dom Cerrado", timeout=15000), "The operating hours are visible."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    