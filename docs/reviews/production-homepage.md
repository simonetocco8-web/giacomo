# Homepage: struttura di produzione

## Modifiche

- Italiano sulla radice `/`; inglese su `/en/`; tedesco su `/de/`. Rimosso il selettore iniziale e il build duplicato `/it/`. Header, canonical, hreflang, x-default e sitemap usano gli stessi percorsi centralizzati.
- Template unico `src/components/HomePage.astro`, condiviso dalle tre route. Nessuna nuova pagina di contenuto.
- Nome, destinazione, dominio, booking, preventivo, WhatsApp, Facebook, Google Maps, email, telefono e indirizzo modificabili in `src/data/site.ts`.
- PRENOTA nell'header, hero, CTA finale, footer e barra mobile porta a `https://bbpl.it/Yt3XJ9z`.
- Preventivo nelle camere, CTA finale, footer e barra mobile porta a `https://forms.gle/LK8PGSwM8tkUZr339`.
- Google Maps e Facebook collegati agli URL forniti. WhatsApp resta disabilitato; nessun numero o contatto inventato.
- Rimossi messaggi tecnici e didascalie di prototipo. Servizi e recensioni restano predisposti ma sono nascosti se le raccolte sono vuote; il menu non contiene ancore verso sezioni assenti.
- Title e description italiani esattamente come forniti, con equivalenti inglese/tedesco. Pagine index/follow, sitemap con tre URL, robots, Open Graph e alternate aggiornati.
- Grafica, palette, tipografia e illustrazioni locali conservate. Le fotografie reali restano da inserire.

## Verifiche

- `npm run check`: 0 errori, 0 avvisi, 0 hints.
- `npm run build`: tre homepage statiche, robots e sitemap.
- Browser Chromium: tre lingue a 320, 375, 768, 1024 e 1440 px (15 casi). Nessun overflow, un solo H1, link e ancore coerenti, menu/skip link da tastiera, immagini caricate, barra mobile e WhatsApp disabilitato.
- Nessuna violazione nei controlli automatici axe-core WCAG A/AA eseguiti. Non equivale a una certificazione completa.
- Controllati href esatti di tutte le CTA, Maps e Facebook; nessun Linktree o `/it/` nell'HTML delle homepage.
- Prenotazione e Facebook rispondono HTTP 200 dal runner; preventivo e Google Maps restituiscono HTTP 302 verso rispettivamente Google Forms e Google Maps. Non sono stati inviati moduli o effettuate prenotazioni.

## Rilascio

Questa PR non esegue deploy. Pubblicare il contenuto del nuovo `dist/`, evitando residui `/it/`; se supportato dall'hosting, configurare un redirect permanente dalla vecchia `/it/` a `/`. Contatti mancanti restano null; nessun dato è stato ricavato arbitrariamente dai servizi esterni.

[Anteprima desktop](../previews/production-home-1440.png) · [Anteprima mobile](../previews/production-home-375.png)
