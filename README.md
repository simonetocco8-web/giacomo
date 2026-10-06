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

La homepage usa fotografie reali caricate dal proprietario, ottimizzate in WebP con fallback JPEG. I contenuti mancanti restano nascosti finché non sono confermati. L'immagine Open Graph e i dati strutturati della struttura saranno aggiunti solo quando disponibili asset e dati verificati. Le CTA usano il booking engine e il modulo preventivo forniti dal proprietario. Tutti i collegamenti e i recapiti modificabili sono centralizzati in `src/data/site.ts`; telefono, indirizzo e WhatsApp sono impostati con i dati forniti dal proprietario; email, CIN e CIR restano `null` e non sono mostrati. Le recensioni non sono inventate.

### Immagini

Le cartelle `public/images/{hero,rooms,gallery,destination}` sono predisposte. Per le immagini finali preferire AVIF/WebP, dimensioni esplicite e varianti responsive; usare gli strumenti Astro per l'ottimizzazione quando si aggiungono asset in `src/`. I blocchi attuali riservano spazio con `aspect-ratio` senza caricare immagini esterne o creare layout shift. Il font di sistema evita richieste remote.

### Prima homepage da valutare

La hero occupa almeno un viewport e usa la fotografia costiera fornita in `public/images/hero/hero.jpg`. Camere, gallery e destinazione utilizzano le foto selezionate dalla raccolta caricata nel repository. Il layout, i colori e la tipografia sono mantenuti. La homepage ha composizioni dedicate per camere, servizi, gallery, destinazione, recensioni, posizione e prenotazione. Il menu include Home, Camere, Gallery, Capo Vaticano e Dove siamo. I servizi confermati sono presentati nella homepage; la sezione sulle esperienze degli ospiti riassume i temi forniti dal proprietario, senza punteggi o citazioni inventate. PRENOTA apre direttamente il booking engine.

`src/components/ResponsiveImage.astro` riserva le dimensioni delle immagini, carica subito la hero e differisce le immagini successive. Supporta sorgenti AVIF/WebP, `srcset`, `sizes`, dimensioni e alt modificabili. Quando si aggiungono fotografie reali, fornire varianti responsive, testi alternativi descrittivi e verificare il ritaglio mobile.

`src/components/MobileActions.astro` presenta WhatsApp, preventivo e prenotazione in una barra mobile. WhatsApp è attivo e apre `https://wa.me/393881183254`. Preventivo apre il Google Form e prenotazione il booking engine. Per attivare WhatsApp, impostare `site.whatsappUrl` con un URL verificato.

Per eventuali integrazioni future servono email, CIN e CIR verificati, eventuali recensioni citabili con fonte e autorizzazioni, e la corrispondenza confermata tra fotografie e tipologie di camera.


### Dati e homepage condivisa

`src/components/HomePage.astro` è il template unico delle tre homepage. `localePath()` in `src/data/site.ts` restituisce gli URL locali e viene riutilizzato per header, hreflang e sitemap. Italiano e x-default puntano alla radice. Title e description italiani corrispondono ai testi forniti dal proprietario, con equivalenti inglese e tedesco.

In `site` sono centralizzati nome, destinazione, regione, costa, dominio, booking, preventivo, WhatsApp, Facebook, Google Maps, email, telefono e indirizzo. Le traduzioni sono nello stesso modulo. Camere, servizi, distanze e informazioni pratiche sono centralizzati in `src/data/hospitality.ts`; i testi completi italiani, inglesi e tedeschi sono in `src/data/homepage-copy.ts`. Non si mostrano descrizioni o recapiti inventati.

Nel prossimo rilascio pubblicare solo il contenuto del nuovo `dist/`, evitando file `/it/` residui del vecchio build. Se l’hosting lo consente, impostare un redirect permanente dalla vecchia `/it/` alla radice per i collegamenti già condivisi; nessun redirect dipendente dal provider è stato aggiunto al progetto statico.


### Fotografie della homepage

Selezione, alt italiani/inglesi/tedeschi, `sizes` e punti di ritaglio sono centralizzati in `src/data/images.ts`. Il manifest `src/data/images.generated.json` contiene percorsi, srcset e dimensioni. Il componente `ResponsiveImage.astro` richiede immagine, dimensioni e alt espliciti e non usa più un placeholder di default.

```sh
npm run images:optimize
npm run check
npm run build
```

Lo script `scripts/optimize-images.mjs` usa Sharp per generare varianti locali WebP e JPEG da 480 px fino alla larghezza disponibile (massimo 1200 px; dettaglio biancheria 960 px). Non ingrandisce gli originali, applica l'orientamento EXIF e rimuove i metadati dai derivati. Gli originali caricati sono conservati senza modifiche. Le varianti generate sono versionate: il build ordinario non richiede di rigenerarle.

La hero viene caricata subito con priorità alta; le altre fotografie usano lazy loading. Width/height e i rapporti CSS riservano lo spazio. Per la hero a copertura piena, `sizes` considera anche l'altezza del viewport mobile. Il file hero originale è largo 1024 px: una futura versione originale da almeno 1920 px migliorerebbe la nitidezza sui grandi schermi, senza interpolazioni artificiali.

Selezione completa e nuove anteprime: `docs/reviews/photography.md`.


### Dati verificati della struttura

Il nome commerciale è `VILLA MARIA ELENA Charme Rooms sul mare`. Header e titolo hero mantengono la forma breve `Villa Maria Elena` per conservare la grafica; il nome completo è disponibile nel footer e nei metadati Open Graph. Telefono `+39 388 118 3254` (`tel:+393881183254`), WhatsApp e indirizzo `Località Tono, Capo Vaticano, 89866, Calabria, Italia` sono centralizzati in `src/data/site.ts`. Email, CIN e CIR non sono stati forniti e non vengono mostrati.

Il proprietario ha confermato posizione fronte mare, spiaggia privata, distanze, camere, servizi e condizioni di soggiorno. I testi nelle tre lingue usano esclusivamente questi dati. I nomi delle tre camere sono mantenuti come su Booking in tutte le lingue. Le due fotografie delle camere sono presentate come vedute generali, senza attribuirle a categorie non confermate.
