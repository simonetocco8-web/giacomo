import { distances, stay, type Room } from './hospitality';
import type { Locale } from './site';
const n = (value: number, locale: Locale) => new Intl.NumberFormat(locale).format(value);
const staffLanguages = (locale: Locale) => new Intl.ListFormat(locale, { style: 'long', type: 'conjunction' }).format(stay.staffLanguages.map(code => new Intl.DisplayNames(locale, { type: 'language' }).of(code) ?? code));
const parking = (locale: Locale) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(stay.parkingDailyEuros);

export const homepageCopy = {
  it: {
    presentationTitle: "Villa Maria Elena – Il fascino autentico di Capo Vaticano",
    presentation: [
      "Nel cuore di Capo Vaticano, a pochi passi dalle acque cristalline della Spiaggia del Tono, Villa Maria Elena è un piccolo angolo di tranquillità dove storia, natura e comfort si incontrano.",
      "Un'antica dimora ricca di storia, sapientemente valorizzata nel rispetto delle sue origini, accoglie oggi gli ospiti in sole cinque camere, dove il fascino della pietra, le travi a vista e i materiali naturali si fondono con un'eleganza semplice e contemporanea.",
      "Immersa nel verde di un giardino curato, la villa offre un'atmosfera intima e rilassante, ideale per chi desidera riscoprire il piacere di una vacanza senza fretta. Un accesso privato conduce direttamente alla spiaggia, raggiungibile in meno di un minuto a piedi, tra sabbia chiara, mare turchese e suggestivi tramonti sullo Stromboli.",
      "Villa Maria Elena è più di un soggiorno: è un'esperienza di autentica ospitalità mediterranea, dove ogni dettaglio racconta una storia e ogni momento invita a sentirsi a casa."
],
    roomsIntro: 'Tre tipologie di camera, con bagno privato, aria condizionata e Wi-Fi. Scegli gli spazi più adatti al tuo soggiorno, da una camera con patio a una soluzione con zona salotto.',
    roomMeta: (room: Room) => `Circa ${room.areaM2} m² · fino a ${room.maxGuests} ospiti`,
    servicesIntro: 'Dall’accesso privato alla spiaggia alla colazione italiana, piccoli punti di riferimento per vivere il soggiorno con semplicità.',
    serviceTitles: { sea: 'Il mare', comfort: 'Spazi e comfort', care: 'Ogni giorno', arrival: 'Arrivare e muoversi', accessibility: 'Accessibilità', activities: 'Tra mare e natura' },
    parking: `Il parcheggio privato in struttura è disponibile a ${parking('it')} al giorno${stay.parkingReservationRequired ? ', su prenotazione' : ''}.`,
    activityNote: 'Contattaci per conoscere disponibilità, condizioni ed eventuali costi delle attività.',
    galleryIntro: 'Le camere, il giardino e la terrazza: uno sguardo agli spazi di Villa Maria Elena.',
    destination: `La Costa degli Dei invita ad alternare il tempo sul mare alle passeggiate lungo la costa. Il Faro e il Belvedere di Capo Vaticano sono a circa ${n(distances.viewpointKm, 'it')} km, mentre Tropea, a circa ${n(distances.tropeaKm, 'it')} km, è una meta da tenere a portata di soggiorno.`,
    reviewsTitle: 'L’esperienza degli ospiti',
    reviews: 'Nei racconti degli ospiti ritornano la posizione sul mare, la pulizia, la disponibilità dello staff, la colazione e il comfort. Aspetti concreti che accompagnano il tempo trascorso a Villa Maria Elena.',
    location: `Ci troviamo in Località Tono, a Capo Vaticano. L’Aeroporto Internazionale di Lamezia Terme è a circa ${n(distances.airportKm, 'it')} km; è disponibile una navetta aeroportuale a pagamento.`,
    practicalTitle: 'Per organizzare il soggiorno',
    checkIn: `Check-in dalle ${stay.checkInFrom}`, checkOut: `Check-out entro le ${stay.checkOutBy}`,
    children: stay.childrenAllowed ? 'I bambini sono ammessi.' : '', pets: !stay.petsAllowed ? 'Gli animali non sono ammessi.' : '',
    languages: `Il personale parla ${staffLanguages('it')}.`,
    bookingTitle: 'Il tuo soggiorno sul mare',
    booking: 'Prenota direttamente il tuo soggiorno a Villa Maria Elena oppure richiedi un preventivo. Per una domanda, puoi scriverci su WhatsApp o chiamarci.',
    call: 'CHIAMA',
  },
  en: {
    presentationTitle: "Villa Maria Elena – The authentic charm of Capo Vaticano",
    presentation: [
      "In the heart of Capo Vaticano, just a few steps from the crystal-clear waters of Tono Beach, Villa Maria Elena is a peaceful retreat where history, nature and comfort come together.",
      "An old residence with a rich history, thoughtfully restored with respect for its origins, now welcomes guests in just five rooms. Stone walls, exposed beams and natural materials blend with a simple, contemporary elegance.",
      "Surrounded by a carefully tended garden, the villa offers an intimate, relaxing atmosphere for an unhurried holiday. Private access leads directly to the beach, less than a minute away on foot, with pale sand, turquoise water and memorable sunsets over Stromboli.",
      "Villa Maria Elena offers more than a stay: it is an experience of authentic Mediterranean hospitality, where every detail tells a story and every moment invites you to feel at home."
],
    roomsIntro: 'Three room types, each with a private bathroom, air conditioning and Wi-Fi. Choose the space that suits your stay, from a room with a patio to one with a seating area.',
    roomMeta: (room: Room) => `Approx. ${room.areaM2} m² · up to ${room.maxGuests} guests`,
    servicesIntro: 'From private access to the beach to an Italian breakfast, thoughtful essentials for an easy stay.',
    serviceTitles: { sea: 'By the sea', comfort: 'Space and comfort', care: 'Everyday care', arrival: 'Getting here and around', accessibility: 'Accessibility', activities: 'Sea and nature' },
    parking: `Private on-site parking is available for ${parking('en')} per day${stay.parkingReservationRequired ? ' and must be reserved' : ''}.`,
    activityNote: 'Please contact us for activity availability, conditions and any additional charges.',
    galleryIntro: 'Rooms, garden and terrace: a closer look at the spaces of Villa Maria Elena.',
    destination: `Enjoy time by the water and walks along the Costa degli Dei. The Capo Vaticano lighthouse and viewpoint are around ${n(distances.viewpointKm, 'en')} km away, while Tropea is approximately ${n(distances.tropeaKm, 'en')} km from the property.`,
    reviewsTitle: 'The guest experience',
    reviews: 'Guests often mention the seaside location, cleanliness, helpful staff, breakfast and comfort when describing their stay at Villa Maria Elena.',
    location: `You will find us in Località Tono, Capo Vaticano. Lamezia Terme International Airport is around ${n(distances.airportKm, 'en')} km away; an airport shuttle is available for an additional charge.`,
    practicalTitle: 'Planning your stay',
    checkIn: `Check-in from ${stay.checkInFrom}`, checkOut: `Check-out by ${stay.checkOutBy}`,
    children: stay.childrenAllowed ? 'Children are welcome.' : '', pets: !stay.petsAllowed ? 'Pets are not permitted.' : '',
    languages: `Our staff speak ${staffLanguages('en')}.`,
    bookingTitle: 'Your stay by the sea',
    booking: 'Book your stay at Villa Maria Elena directly or request a quote. If you have a question, contact us on WhatsApp or give us a call.',
    call: 'CALL',
  },
  de: {
    presentationTitle: "Villa Maria Elena – Der authentische Charme von Capo Vaticano",
    presentation: [
      "Im Herzen von Capo Vaticano, nur wenige Schritte vom kristallklaren Wasser des Strandes Tono entfernt, liegt die Villa Maria Elena: ein kleiner Ort der Ruhe, an dem Geschichte, Natur und Komfort zusammenfinden.",
      "Das geschichtsträchtige Haus wurde behutsam und mit Respekt vor seinen Ursprüngen aufgewertet und empfängt seine Gäste heute in nur fünf Zimmern. Steinwände, sichtbare Holzbalken und natürliche Materialien verbinden sich mit schlichter, zeitgemäßer Eleganz.",
      "Inmitten eines gepflegten Gartens bietet die Villa eine persönliche, entspannte Atmosphäre für einen Urlaub ohne Eile. Ein privater Zugang führt direkt zum Strand, der in weniger als einer Minute zu Fuß erreichbar ist: heller Sand, türkisfarbenes Meer und eindrucksvolle Sonnenuntergänge über Stromboli.",
      "Die Villa Maria Elena ist mehr als ein Aufenthalt: Sie erleben authentische mediterrane Gastfreundschaft, bei der jedes Detail eine Geschichte erzählt und jeder Moment dazu einlädt, sich zu Hause zu fühlen."
],
    roomsIntro: 'Drei Zimmertypen, jeweils mit eigenem Bad, Klimaanlage und WLAN. Wählen Sie die passenden Räume für Ihren Aufenthalt, vom Zimmer mit Patio bis zur Unterkunft mit Sitzbereich.',
    roomMeta: (room: Room) => `Ca. ${room.areaM2} m² · bis zu ${room.maxGuests} Gäste`,
    servicesIntro: 'Vom privaten Strandzugang bis zum italienischen Frühstück: praktische Annehmlichkeiten für einen entspannten Aufenthalt.',
    serviceTitles: { sea: 'Am Meer', comfort: 'Raum und Komfort', care: 'Für jeden Tag', arrival: 'Anreise und Mobilität', accessibility: 'Barrierefreiheit', activities: 'Meer und Natur' },
    parking: `Private Parkplätze an der Unterkunft stehen für ${parking('de')} pro Tag zur Verfügung${stay.parkingReservationRequired ? ' und müssen reserviert werden' : ''}.`,
    activityNote: 'Bitte fragen Sie uns nach Verfügbarkeit, Bedingungen und möglichen Zusatzkosten der Aktivitäten.',
    galleryIntro: 'Zimmer, Garten und Terrasse: ein Einblick in die Räume der Villa Maria Elena.',
    destination: `Genießen Sie das Meer und Spaziergänge entlang der Costa degli Dei. Der Leuchtturm und der Aussichtspunkt von Capo Vaticano sind etwa ${n(distances.viewpointKm, 'de')} km entfernt. Tropea erreichen Sie nach rund ${n(distances.tropeaKm, 'de')} km.`,
    reviewsTitle: 'Was Gäste an ihrem Aufenthalt schätzen',
    reviews: 'In den Erfahrungen der Gäste werden die Lage am Meer, Sauberkeit, hilfsbereites Personal, Frühstück und Komfort immer wieder hervorgehoben.',
    location: `Sie finden uns in Località Tono, Capo Vaticano. Der internationale Flughafen Lamezia Terme liegt rund ${n(distances.airportKm, 'de')} km entfernt; ein Flughafentransfer ist gegen Aufpreis verfügbar.`,
    practicalTitle: 'Gut zu wissen',
    checkIn: `Check-in ab ${stay.checkInFrom} Uhr`, checkOut: `Check-out bis ${stay.checkOutBy} Uhr`,
    children: stay.childrenAllowed ? 'Kinder sind willkommen.' : '', pets: !stay.petsAllowed ? 'Haustiere sind nicht erlaubt.' : '',
    languages: `Unser Personal spricht ${staffLanguages('de')}.`,
    bookingTitle: 'Ihr Aufenthalt am Meer',
    booking: 'Buchen Sie Ihren Aufenthalt in der Villa Maria Elena direkt oder fragen Sie ein Angebot an. Bei Fragen erreichen Sie uns per WhatsApp oder telefonisch.',
    call: 'ANRUFEN',
  },
};
