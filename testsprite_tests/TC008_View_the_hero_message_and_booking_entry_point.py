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
        
        # -> Click the visible “Reservar” call to action and check that the booking journey opens.
        # Reservar link
        elem = page.get_by_role("link", name="Reservar", exact=True)
        await elem.click(timeout=10000)
        
        # -> Activate the visible 'Reservar' call to action and verify whether the booking journey opens.
        # Reservar link
        elem = page.get_by_role("link", name="Reservar", exact=True)
        await elem.click(timeout=10000)
        
        # -> Check the newly opened Booksy page to confirm the booking journey is available.
        # Switch to tab 35E1
        page = context.pages[-1]  # switch to most recently active tab
        
        # --> Assertions to verify final state
        
        # --> The “Reservar” call to action opens the Blessed Barber Studio booking page.
        # Assert-outcome: not verified — the export-time check could not be evaluated
        # Assert: The booking page URL should identify Blessed Barber Studio on Booksy.
        await expect(page).to_have_url(re.compile("booksy\\.com/es\\-es/55499_blessed\\-barber\\-studio_barberia_69069_palma\\-de\\-mallorca"), timeout=15000), "The booking page URL should identify Blessed Barber Studio on Booksy."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    