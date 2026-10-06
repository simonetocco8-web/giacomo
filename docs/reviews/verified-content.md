# Contenuti verificati della homepage

## Fonte e struttura

Dati e temi delle esperienze degli ospiti forniti direttamente dal proprietario. Nessun contatto, servizio, punteggio o citazione inventato. Nessuna nuova pagina; homepage italiana su `/`, inglese su `/en/`, tedesca su `/de/`.

- `src/data/site.ts`: nome commerciale completo, nome breve per conservare header e H1, indirizzo, telefono, link `tel:`, WhatsApp, booking, preventivo, Maps e Facebook. Email, CIN e CIR restano null e non sono mostrati.
- `src/data/hospitality.ts`: distanze, camere e dotazioni confermate, servizi, parcheggio, orari e condizioni. Numeri e prezzi sono riutilizzati nei testi senza duplicarli nei componenti.
- `src/data/homepage-copy.ts`: copy italiano e traduzioni naturali inglese/tedesco, con distanze, prezzo e orari derivati dai dati centrali.

## Informazioni pubblicate

- VILLA MARIA ELENA Charme Rooms sul mare, Località Tono, Capo Vaticano, 89866, Calabria, Italia.
- Telefono +39 388 118 3254, `tel:+393881183254`, WhatsApp `https://wa.me/393881183254`.
- Posizione fronte spiaggia e spiaggia privata; Tono Beach circa 36 metri, Faro/Belvedere circa 1,9 km, Tropea circa 12 km, aeroporto di Lamezia Terme circa 69 km.
- Camera Matrimoniale con Patio: circa 18 m², massimo 2 ospiti e dotazioni fornite dal proprietario.
- Camera Queen: circa 30 m², massimo 3 ospiti e dotazioni fornite dal proprietario.
- Camera Matrimoniale Budget: circa 24 m², massimo 2 ospiti e dotazioni fornite dal proprietario.
- I nomi Booking delle camere restano esattamente in italiano in tutte le lingue, con attributo `lang="it"`; dati e dotazioni sono tradotti.
- Servizi raggruppati per mare, comfort, cura quotidiana, mobilità, accessibilità e attività. Navetta indicata a pagamento; attività senza promesse di gratuità.
- Parcheggio privato 10 € al giorno su prenotazione; check-in dalle 16:00, check-out entro le 10:00; bambini ammessi, animali non ammessi; personale italiano e inglese.
- Esperienze degli ospiti descritte per temi (mare, pulizia, disponibilità, colazione, comfort), senza nomi, virgolette, punteggi o false testimonianze.

Le sette fotografie, varianti, crop e selezione precedenti sono invariati. Le due foto delle camere sono vedute generali separate dalle tre schede: il proprietario non ha ancora confermato la corrispondenza tra foto e tipologie Booking. Colori, font, hero e griglie immagini sono conservati; schede e testi usano la stessa tipografia e i medesimi separatori.

## Verifiche

- `npm run check`: 0 errori, 0 avvisi, 0 hints.
- `npm run build`: tre homepage statiche, robots e sitemap.
- Browser: italiano/inglese/tedesco a 320, 375, 768 e 1440 px (12 casi). Nove sezioni, un H1, sette foto caricate, nessun overflow, tastiera e controlli axe-core eseguiti senza violazioni rilevate.
- Dati camere, distanze, orari e indirizzo verificati nell'HTML; nessun testo “in preparazione”, placeholder, email inventata o CIN/CIR visibile.
- Link di tutte le CTA e ancore controllati. WhatsApp attivo nella barra mobile, CTA finale e footer; telefono presente nella CTA finale e footer con URI esatto. Non sono state effettuate chiamate né inviati messaggi.
- Booking/Facebook rispondono HTTP 200; Form/Maps restituiscono i redirect Google attesi. Il controllo HTTP di `wa.me` dal runner rimane bloccato dal proxy (`CONNECT 403`): il collegamento è quello verificato dal proprietario, ma l'apertura dell'app WhatsApp non è stata certificata dal runner.

[Anteprima desktop](../previews/content-home-1440.png) · [Anteprima smartphone](../previews/content-home-375.png)

Nessun deploy eseguito. CIN, CIR ed email potranno essere aggiunti solo con dati verificati.
