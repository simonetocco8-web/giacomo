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

Le homepage statiche sono disponibili su `/` (italiano principale), `/en/` e `/de/`. Non esiste più una pagina iniziale di selezione lingua né una homepage duplicata su `/it/`. Il selettore resta nell’header. Testi e metadati sono centralizzati in `src/data/site.ts`, mentre il layout condiviso si trova in `src/layouts/MainLayout.astro`. La navigazione usa il controllo HTML nativo `details`, accessibile da tastiera e senza JavaScript. Tailwind CSS 4 è integrato tramite il plugin Vite; le basi grafiche sono in `src/styles/global.css`.

### Dominio e SEO

Il dominio ufficiale predefinito è `https://villamariaelena.it`, configurato in `astro.config.mjs`. Non serve impostare variabili per il build di produzione: canonical, alternate hreflang, Open Graph, sitemap e riferimento in `robots.txt` usano già il dominio ufficiale. Le pagine sono indicizzabili. `SITE_URL` può sovrascrivere l’origine HTTPS per un altro ambiente (vedere `.env.example`); un override non disabilita l’indicizzazione. `robots.txt` è generato staticamente da `src/pages/robots.txt.ts`.

Prima della pubblicazione sostituire i contenuti placeholder con dati verificati, aggiungere fotografie locali ottimizzate. L'immagine Open Graph e i dati strutturati della struttura saranno aggiunti solo quando disponibili asset e dati verificati. Le CTA usano il booking engine e il modulo preventivo forniti dal proprietario. Tutti i collegamenti e i recapiti modificabili sono centralizzati in `src/data/site.ts`; email, telefono, indirizzo e WhatsApp restano `null` finché non sono verificati. Le recensioni non sono inventate.

### Immagini

Le cartelle `public/images/{hero,rooms,gallery,destination}` sono predisposte. Per le immagini finali preferire AVIF/WebP, dimensioni esplicite e varianti responsive; usare gli strumenti Astro per l'ottimizzazione quando si aggiungono asset in `src/`. I blocchi attuali riservano spazio con `aspect-ratio` senza caricare immagini esterne o creare layout shift. Il font di sistema evita richieste remote.

### Prima homepage da valutare

La hero occupa almeno un viewport e usa ancora un’illustrazione SVG locale: non rappresenta una fotografia reale della struttura. Le didascalie tecniche sono state rimosse dall’interfaccia; le fotografie reali saranno aggiunte successivamente. La homepage ha composizioni dedicate per camere, servizi, gallery, destinazione, recensioni, posizione e prenotazione. Il menu include Home, Camere, Gallery, Capo Vaticano e Dove siamo. Servizi e recensioni vengono mostrati solo quando le rispettive raccolte in `src/data/site.ts` contengono dati confermati; il link Servizi compare insieme alla sezione. PRENOTA apre direttamente il booking engine.

`src/components/ResponsiveImage.astro` riserva le dimensioni delle immagini, carica subito la hero e differisce le immagini successive. Supporta sorgenti AVIF/WebP, `srcset`, `sizes`, dimensioni e alt modificabili. Quando si aggiungono fotografie reali, fornire varianti responsive, testi alternativi descrittivi e verificare il ritaglio mobile.

`src/components/MobileActions.astro` presenta WhatsApp, preventivo e prenotazione in una barra mobile. WhatsApp resta disabilitato senza messaggi tecnici. Preventivo apre il Google Form e prenotazione il booking engine. Per attivare WhatsApp, impostare `site.whatsappUrl` con un URL verificato.

Per completare servono fotografie autorizzate di struttura, camere e destinazione; descrizioni e servizi confermati; indirizzo, email e telefono; URL WhatsApp verificato; recensioni autentiche con fonte e autorizzazioni; immagine Open Graph.


### Dati e homepage condivisa

`src/components/HomePage.astro` è il template unico delle tre homepage. `localePath()` in `src/data/site.ts` restituisce gli URL locali e viene riutilizzato per header, hreflang e sitemap. Italiano e x-default puntano alla radice. Title e description italiani corrispondono ai testi forniti dal proprietario, con equivalenti inglese e tedesco.

In `site` sono centralizzati nome, destinazione, regione, costa, dominio, booking, preventivo, WhatsApp, Facebook, Google Maps, email, telefono e indirizzo. Le traduzioni sono nello stesso modulo. Le sezioni servizi e recensioni restano predisposte ma nascoste se le raccolte sono vuote. Non si mostrano descrizioni o recapiti inventati.

Nel prossimo rilascio pubblicare solo il contenuto del nuovo `dist/`, evitando file `/it/` residui del vecchio build. Se l’hosting lo consente, impostare un redirect permanente dalla vecchia `/it/` alla radice per i collegamenti già condivisi; nessun redirect dipendente dal provider è stato aggiunto al progetto statico.
