# Villa Maria Elena — sito web ufficiale

Nuovo sito vetrina di **Villa Maria Elena**, struttura ricettiva a Capo Vaticano, sulla Costa degli Dei.

## Obiettivo

Realizzare un sito moderno, elegante, fotografico e veloce, orientato a:

- presentare Villa Maria Elena e le camere;
- valorizzare la posizione sul mare e Capo Vaticano;
- aumentare le prenotazioni dirette;
- facilitare richieste di preventivo e contatti WhatsApp;
- ottenere buone prestazioni SEO e Core Web Vitals;
- supportare più lingue.

## Stack previsto

- Astro
- Tailwind CSS
- TypeScript dove utile
- JavaScript minimo
- deploy statico

## Lingue

Il progetto deve essere predisposto almeno per:

- Italiano
- Inglese
- Tedesco

## Sezioni principali

- Home
- Camere
- Gallery
- Servizi
- Capo Vaticano
- Dove siamo / Contatti
- CTA Prenota
- CTA Richiedi preventivo

## Sorgenti iniziali

- Linktree: https://linktr.ee/villamariaelena
- Repository: https://github.com/simonetocco8-web/giacomo

Le immagini della struttura verranno integrate nel progetto come asset ottimizzati, evitando dipendenze dirette da Google Drive in produzione.

## Sviluppo

Le regole operative per gli agenti e per Codex sono definite in `AGENTS.md`.

## Avvio del progetto

Richiede Node.js >= 22.12.0 (ambiente verificato con Node 24.19.0) e npm.

```sh
export ASTRO_TELEMETRY_DISABLED=1
npm ci
npm run dev -- --host 0.0.0.0
```

La variabile `ASTRO_TELEMETRY_DISABLED=1` evita scritture di telemetria nella home del runner cloud; mantenerla esportata anche per i controlli seguenti.

Controlli e produzione:

```sh
npm run check
npm run build
npm run preview -- --host 0.0.0.0
```

Le homepage statiche sono disponibili su `/it/`, `/en/` e `/de/`; `/` contiene il selettore lingua. Testi e metadati sono centralizzati in `src/data/site.ts`, mentre il layout condiviso si trova in `src/layouts/MainLayout.astro`. La navigazione usa il controllo HTML nativo `details`, accessibile da tastiera e senza JavaScript. Tailwind CSS 4 è integrato tramite il plugin Vite; le basi grafiche sono in `src/styles/global.css`.

### Dominio e SEO

Impostare `SITE_URL` con l'origine HTTPS ufficiale verificata nell'ambiente di build o in `.env` (vedere `.env.example`). Non è stato ipotizzato un dominio. Con `SITE_URL` sono generati canonical, alternate hreflang, sitemap e il relativo riferimento in `robots.txt`. Senza dominio, il build rimane funzionante ma le pagine sono `noindex` e `robots.txt` impedisce la scansione. `robots.txt` è generato staticamente da `src/pages/robots.txt.ts`.

Prima della pubblicazione sostituire i contenuti placeholder con dati verificati, aggiungere fotografie locali ottimizzate e configurare il dominio. L'immagine Open Graph e i dati strutturati della struttura saranno aggiunti solo quando disponibili asset e dati verificati. Le CTA attuali aprono il Linktree documentato, senza ipotizzare telefono, email, indirizzo, tariffe o servizi. Le recensioni non sono inventate.

### Immagini

Le cartelle `public/images/{hero,rooms,gallery,destination}` sono predisposte. Per le immagini finali preferire AVIF/WebP, dimensioni esplicite e varianti responsive; usare gli strumenti Astro per l'ottimizzazione quando si aggiungono asset in `src/`. I blocchi attuali riservano spazio con `aspect-ratio` senza caricare immagini esterne o creare layout shift. Il font di sistema evita richieste remote.

### Prima homepage da valutare

La hero occupa almeno un viewport e usa un'illustrazione SVG locale esplicitamente etichettata come placeholder: non rappresenta una fotografia reale della struttura. La homepage ha composizioni dedicate per camere, servizi, gallery, destinazione, recensioni, posizione e prenotazione. Il menu include Home, Camere, Gallery, Servizi, Capo Vaticano e Dove siamo; il pulsante PRENOTA apre per ora il Linktree noto.

`src/components/ResponsiveImage.astro` riserva le dimensioni delle immagini, carica subito la hero e differisce le immagini successive. Supporta sorgenti AVIF/WebP, `srcset`, `sizes`, dimensioni e alt modificabili. Quando si aggiungono fotografie reali, fornire varianti responsive, testi alternativi descrittivi e verificare il ritaglio mobile.

`src/components/MobileActions.astro` presenta WhatsApp, preventivo e prenotazione in una barra mobile; i primi due sono disabilitati e segnalati in preparazione. Per attivarli, inserire solo URL verificati in `contactActions` dentro `src/data/site.ts`. Non sono stati ipotizzati recapiti o sistemi di prenotazione.

Per completare servono fotografie autorizzate di struttura, camere e destinazione; descrizioni e servizi confermati; indirizzo e posizione sulla mappa; contatti WhatsApp e preventivi; destinazione della prenotazione; recensioni autentiche con fonte e autorizzazioni; dominio ufficiale per `SITE_URL` e immagine Open Graph.
