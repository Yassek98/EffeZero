# EffeZero - Collettivo Fotografico

Piattaforma digitale per il collettivo fotografico "EffeZero" (FO).

## Descrizione

Il sito è stato sviluppato con:
- **Next.js 16 (App Router)**
- **TypeScript**
- **Tailwind CSS v4**

Il design segue un'estetica **Brutalista** (Bianco e Nero, bordi spessi, font Anton/Inter).

## Struttura del Progetto

- `/web`: Contiene il codice sorgente dell'applicazione Next.js.
  - `/web/src/app`: Pagine (Home, Chi Siamo, Membri, Progetti, Archivio).
  - `/web/src/components`: Componenti riutilizzabili (Header, Footer, Cards, Lightbox).
  - `/web/src/data`: Dati mock per lo sviluppo.
- `/verification`: Script di verifica automatizzata.

## Installazione e Avvio

### Prerequisiti
- Node.js (v18 o superiore)
- npm (o yarn/pnpm)

### Setup

1. Entra nella cartella `web`:
   ```bash
   cd web
   ```
2. Installa le dipendenze:
   ```bash
   npm install
   ```
3. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```

Il sito sarà accessibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Test e Verifica

Il progetto include uno script di verifica automatizzato basato su **Playwright** per controllare che tutte le pagine vengano caricate correttamente e che le interazioni (come il Lightbox dell'Archivio) funzionino.

### Eseguire i test

1. Assicurati di avere Python 3 installato.
2. Installa Playwright per Python:
   ```bash
   pip install playwright
   playwright install
   ```
3. Assicurati che il server di sviluppo sia attivo (vedi sezione precedente).
4. Esegui lo script di verifica dalla root del progetto:
   ```bash
   python3 verification/verify_site.py
   ```

Lo script genererà degli screenshot di ogni pagina nella cartella `verification/` per un controllo visivo.
