# Upload produzione: homepage e gallery separata

`villa-maria-elena-produzione-gallery.zip` contiene il contenuto del build statico: homepage e gallery italiane, inglesi e tedesche, asset esistenti, robots e sitemap. Estrarre direttamente nella document root.

**Conservare la cartella `galleria` nell’hosting.** Le 28 foto già caricate dal cliente non sono contenute nello ZIP: alla verifica tutte le richieste `/galleria/gallery_0900.jpg` … `/galleria/gallery_1035.jpg` hanno restituito HTTP 404. La gallery è predisposta con esattamente questi nomi (incremento 5); il caricamento delle nuove foto non è stato verificato. Controllare che `galleria` sia nella stessa document root di `index.html` e che nomi, maiuscole ed estensioni coincidano. Se il percorso pubblico è diverso, aggiornare `src/data/gallery.ts` e rigenerare il build.

Pagina gallery: `/gallery/`, `/en/gallery/`, `/de/gallery/`. Il menu e il selettore lingua collegano le pagine corrette. I link alle altre sezioni tornano alla homepage della stessa lingua. Ogni foto apre il file originale senza una libreria o widget esterno.

Presentazione italiana sostituita integralmente con il testo fornito dal cliente; traduzioni inglese e tedesca aggiornate. La dicitura del servizio è ora “Accesso Privato a Spiaggia”; eliminate le corrispondenti affermazioni di spiaggia privata dalle pagine nelle tre lingue.

Build e TypeScript completati senza errori/avvisi/hints. Browser: nove combinazioni di lingua/larghezza (320, 768, 1440 px), con controlli su home/gallery, menu, selettore lingua, canonical, alternate e sitemap a sei URL. Le immagini già esistenti della homepage caricano; le nuove foto gallery restano un prerequisito esterno. Nessun upload FTP o deploy è stato eseguito.
