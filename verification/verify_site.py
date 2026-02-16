import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # 1. Homepage
        await page.goto("http://localhost:3000")
        await page.screenshot(path="verification/home.png", full_page=True)
        print("Screenshot Home salvato")

        # 2. Chi Siamo
        await page.goto("http://localhost:3000/chi-siamo")
        await page.screenshot(path="verification/chi-siamo.png", full_page=True)
        print("Screenshot Chi Siamo salvato")

        # 3. Membri
        await page.goto("http://localhost:3000/membri")
        await page.screenshot(path="verification/membri.png", full_page=True)
        print("Screenshot Membri salvato")

        # 4. Dettaglio Membro
        await page.goto("http://localhost:3000/membri/1") # Marco Rossi
        await page.screenshot(path="verification/membro-detail.png", full_page=True)
        print("Screenshot Dettaglio Membro salvato")

        # 5. Progetti
        await page.goto("http://localhost:3000/progetti")
        await page.screenshot(path="verification/progetti.png", full_page=True)
        print("Screenshot Progetti salvato")

        # 6. Dettaglio Progetto
        await page.goto("http://localhost:3000/progetti/senza-pretese")
        await page.screenshot(path="verification/progetto-detail.png", full_page=True)
        print("Screenshot Dettaglio Progetto salvato")

        # 7. Archivio (con test interazione Lightbox)
        await page.goto("http://localhost:3000/archivio")
        await page.screenshot(path="verification/archivio.png", full_page=True)
        print("Screenshot Archivio salvato")

        # Test Lightbox: Clicca sulla prima foto
        # Seleziona il primo div che contiene "Ombre lunghe" (titolo prima foto)
        # Nota: usiamo force=True perché l'elemento di testo ha pointer-events: none
        await page.get_by_text("Ombre lunghe").first.click(force=True)

        # Aspetta che il lightbox si apra (cerca il contatore 1/5)
        # Il contatore potrebbe dipendere dai dati mock, verifichiamo che ci sia del testo che assomiglia a "1 / X"
        try:
            await page.wait_for_selector("text=/ 5", timeout=5000)
            print("Lightbox aperto correttamente")
            await page.screenshot(path="verification/lightbox.png")
            print("Screenshot Lightbox salvato")
        except Exception as e:
            print(f"Errore apertura lightbox: {e}")
            # Debug: screenshot dello stato attuale se fallisce
            await page.screenshot(path="verification/lightbox_error.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
