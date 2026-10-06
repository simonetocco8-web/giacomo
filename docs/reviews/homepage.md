# Revisione homepage — 6 ottobre 2026

## Ambito e limiti

Revisione del build statico locale del codice presente su `main`, dopo la prima PR della homepage. Il dominio di produzione è `https://villamariaelena.it`. L'accesso HTTPS pubblico dal runner è bloccato dal proxy con `CONNECT 403 Forbidden`: questo errore non proviene dal sito e non dimostra un guasto della produzione. Non sono stati verificati contenuti live, redirect, header HTTP, caching CDN, compressione o prestazioni reali della rete pubblica. Le modifiche richiedono merge e pubblicazione dal normale flusso del progetto; questa attività non esegue deploy.

## Criticità corrette

- Senza `SITE_URL`, le homepage erano `noindex`, robots disabilitava la scansione e mancavano canonical e sitemap. Ora il dominio ufficiale è il valore predefinito. Anche il selettore lingua esistente su `/` è indicizzabile, con canonical e metadati.
- Il menu chiuso occupava circa 279 px a 320 px di larghezza e 219 px su smartphone/tablet. Il layout compatto conserva gli stessi elementi e scende a circa 134 px; il desktop mantiene l'aspetto precedente.
- I link lingua avevano larghezze di circa 14–22 px. Le aree tattili ora sono almeno 44 × 44 px.
- Lighthouse segnalava sigle IT/EN/DE non incluse come parole nei nomi accessibili. I nomi ora iniziano con la sigla visibile, seguita dal nome completo della lingua.
- Migliorata la leggibilità della barra mobile, mantenendo il carattere discreto. Riservato spazio aggiuntivo per la safe area dei dispositivi.
- Il contorno di focus ora è bianco sulle sezioni scure hero e prenotazione.
- Verificata e corretta la sitemap per evitare che il selettore `/` generi una seconda variante `it` insieme a `/it/`: ogni voce ha alternate univoci e x-default coerente con i metadati HTML.

## Verifiche

Build di produzione e controllo Astro/TypeScript completati: 0 errori, 0 avvisi. Test browser a 320, 375, 768, 1024, 1280 e 1440 px, per italiano, inglese e tedesco (18 casi):

- nessun overflow orizzontale; un solo H1; gerarchia H2 delle sezioni mantenuta;
- nessuna violazione rilevata da axe-core nei controlli automatizzati WCAG A/AA eseguiti; questo non sostituisce un audit completo;
- CLS osservato al caricamento pari a 0 in tutti i casi;
- hero a tutto viewport, testo leggibile sul gradiente; tipografia e spaziature delle sezioni mantenute;
- menu e skip link utilizzabili da tastiera; voci e ancore funzionanti;
- barra contatti visibile sotto 768 px e nascosta su tablet/desktop; PRENOTA rimane disponibile nell'header;
- immagini caricate correttamente dopo lo scorrimento, con width/height espliciti, hero eager e immagini successive lazy;
- URL canonical e Open Graph ufficiali, hreflang, robots e quattro URL sitemap verificati nel build.

Lighthouse mobile locale, una singola esecuzione con il profilo simulato predefinito: performance **100**, accessibilità **100**, SEO **100** (SEO iniziale: 66). LCP circa **0,9 s**, CLS **0**, total blocking time **0 ms**. Questi risultati misurano un build con piccoli placeholder SVG sul loopback; non sono dati Core Web Vitals di utenti reali e dovranno essere ripetuti con fotografie finali e sulla produzione. Non è stata aggiunta alcuna dipendenza al progetto per i test: gli strumenti di audit sono installati in `/tmp`.

## Elementi ancora da completare

- PRENOTA apre il Linktree documentato, non un sistema di prenotazione diretta verificato.
- WhatsApp e preventivo restano disabilitati e indicati in preparazione: servono URL reali, senza inventare numeri o email.
- Fotografie, descrizioni camere, servizi, recensioni e mappa sono ancora placeholder. La gerarchia è valutabile, ma l'efficacia commerciale e il ritaglio fotografico finale richiedono gli asset reali.
- Open Graph ha URL, titolo e descrizione corretti; manca una fotografia social reale. Non è stata usata un'immagine fittizia della struttura.
- `/` resta il selettore lingua già esistente: introduce un passaggio prima della homepage italiana. L'eventuale scelta di mostrare direttamente l'italiano sulla radice va valutata separatamente.
- Confermare in produzione l'assenza di X-Robots-Tag restrittivi, la disponibilità della sitemap, i redirect e il dominio canonical dopo il merge/deploy.

## Anteprime del build revisionato

[Desktop](../previews/review-home-1440.png) · [Smartphone](../previews/review-home-375.png)

Le catture a pagina intera mostrano la barra mobile alla posizione del viewport iniziale: nel browser essa rimane fissata al bordo inferiore dello schermo.
