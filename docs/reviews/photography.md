# Integrazione fotografie reali della homepage

Sono state usate esclusivamente immagini caricate nel repository. Il layout, i testi commerciali, la palette e la tipografia sono rimasti invariati. I ritagli sono gestiti con `object-position` centralizzato nei dati; le foto non sono alterate nei contenuti.

## Selezione

| Sezione | Originale | Soggetto | Larghezza massima dei derivati |
| --- | --- | --- | --- |
| Hero | `public/images/hero/hero.jpg` | Scogliera, spiaggia e mare turchese | 1024 px |
| Camere | `public/images/rooms/room3.jpeg` | Letto matrimoniale, travi in legno e pietra | 1200 px |
| Camere | `public/images/rooms/room2.jpeg` | Letto matrimoniale e parete in mattoni | 1098 px |
| Gallery | `public/images/gallery/gallery2.jpeg` | Esterno, giardino e vialetto | 1024 px |
| Gallery, centro verticale | `public/images/gallery/gallery4.jpeg` | Dettaglio degli asciugamani sul letto | 960 px |
| Gallery | `public/images/gallery/gallery3.jpeg` | Terrazza coperta, tavoli e sedie | 1024 px |
| Capo Vaticano / destinazione | `public/images/destination/destination1.jpg` | Panorama della costa e delle scogliere | 1024 px |

## Asset e caricamento

- Originali conservati senza modifiche, comprese le fotografie non selezionate per questa homepage.
- 46 varianti WebP/JPEG complessive; larghezze 480, 768, 1024 e fino a 1200 px quando disponibili. Nessun ingrandimento degli originali.
- Derivati nelle rispettive cartelle `public/images/hero`, `rooms`, `gallery`, `destination`, con nomi descrittivi e larghezza nel filename.
- Orientamento EXIF applicato e metadati rimossi dai derivati. Compressione WebP con fallback JPEG.
- Pipeline ripetibile con `npm run images:optimize` (Sharp come dipendenza di sviluppo esplicita, già usata da Astro).
- Manifest generato in `src/data/images.generated.json`; scelta foto, alt italiani/inglesi/tedeschi, `sizes` e crop in `src/data/images.ts`.
- Hero eager con priorità alta e `sizes` adeguato alla copertura del viewport mobile. Le altre sei fotografie sono lazy. `width`, `height` e rapporti CSS riservano lo spazio.
- Nessuna dipendenza da immagini remote e nessun JavaScript client aggiunto.

La fotografia hero originale è larga solo 1024 px. Una futura sorgente da almeno 1920 px sarebbe utile per maggiore nitidezza sui grandi schermi; non è stata creata risoluzione artificiale.

## Validazione del build finale

- Astro/TypeScript: 0 errori, 0 avvisi, 0 hints.
- `npm run build`: tre homepage statiche, robots e sitemap.
- Browser a 375, 768 e 1440 px, nelle tre lingue e con DPR 2 (9 casi): sette fotografie caricate, WebP selezionato, alt descrittivi, nessun errore HTTP delle immagini, nessun overflow e CLS osservato 0.
- Fallback JPEG verificato rimuovendo le sorgenti WebP nel browser di test: tutte le fotografie sono decodificate correttamente.
- Nessuna violazione nei controlli automatizzati axe-core WCAG A/AA eseguiti; non sostituisce un audit completo.
- Lighthouse mobile locale sul build finale: performance 97, accessibilità 100, LCP simulato circa 2,6 s, CLS 0, TBT 0 ms. Sono dati di laboratorio sul loopback, non misure degli utenti in produzione.
- Controllo visivo di hero, camere e gallery nelle anteprime desktop/mobile. Nessun deploy eseguito.

[Desktop](../previews/photos-home-1440.png) · [Smartphone](../previews/photos-home-375.png)
