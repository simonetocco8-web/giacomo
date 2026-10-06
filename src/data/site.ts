export const site = {
  name: 'Villa Maria Elena',
  location: 'Capo Vaticano · Costa degli Dei',
  contactUrl: 'https://linktr.ee/villamariaelena',
};
export const locales = ['it', 'en', 'de'] as const;
export type Locale = typeof locales[number];
export const languageNames: Record<Locale, string> = { it: 'Italiano', en: 'English', de: 'Deutsch' };
export const content: Record<Locale, {
  title: string; description: string; skip: string; menu: string; book: string;
  intro: string; placeholder: string; image: string; footer: string;
  sections: readonly string[];
}> = {
  it: {
    title: 'Villa Maria Elena | Capo Vaticano',
    description: 'Villa Maria Elena a Capo Vaticano, sulla Costa degli Dei. Sito in preparazione: camere, servizi, immagini e contatti.',
    skip: 'Vai al contenuto', menu: 'Menu', book: 'PRENOTA',
    intro: 'Villa Maria Elena, a Capo Vaticano sulla Costa degli Dei.',
    placeholder: 'Contenuti verificati in preparazione.', image: 'Spazio riservato alle fotografie della struttura',
    footer: 'Sito in preparazione',
    sections: ['Presentazione Villa Maria Elena', 'Camere', 'Servizi', 'Gallery', 'Capo Vaticano', 'Recensioni', 'Dove siamo', 'Prenotazione'],
  },
  en: {
    title: 'Villa Maria Elena | Capo Vaticano accommodation',
    description: 'Villa Maria Elena in Capo Vaticano, on the Costa degli Dei. Website in preparation: rooms, services, photographs and contacts.',
    skip: 'Skip to content', menu: 'Menu', book: 'BOOK',
    intro: 'Villa Maria Elena, in Capo Vaticano on the Costa degli Dei.',
    placeholder: 'Verified content is being prepared.', image: 'Space reserved for photographs of the property',
    footer: 'Website in preparation',
    sections: ['About Villa Maria Elena', 'Rooms', 'Services', 'Gallery', 'Capo Vaticano', 'Reviews', 'Location', 'Booking'],
  },
  de: {
    title: 'Villa Maria Elena | Unterkunft in Capo Vaticano',
    description: 'Villa Maria Elena in Capo Vaticano an der Costa degli Dei. Website in Vorbereitung: Zimmer, Ausstattung, Fotos und Kontakt.',
    skip: 'Zum Inhalt', menu: 'Menü', book: 'BUCHEN',
    intro: 'Villa Maria Elena, in Capo Vaticano an der Costa degli Dei.',
    placeholder: 'Geprüfte Inhalte werden vorbereitet.', image: 'Platz für Fotos der Unterkunft',
    footer: 'Website in Vorbereitung',
    sections: ['Über Villa Maria Elena', 'Zimmer', 'Ausstattung', 'Galerie', 'Capo Vaticano', 'Bewertungen', 'Lage', 'Buchung'],
  },
};
export const sectionIds = ['presentation', 'rooms', 'services', 'gallery', 'destination', 'reviews', 'location', 'booking'] as const;

// Populate only with verified URLs. Missing actions are shown as unavailable.
export const contactActions: { whatsapp: string | null; quote: string | null; booking: string } = {
  whatsapp: null, quote: null, booking: site.contactUrl,
};
export const ui = {
  it: { home: 'Home', quote: 'Richiedi preventivo', unavailable: 'Contatto in preparazione', explore: 'Scopri Villa Maria Elena', photo: 'Immagine placeholder', room: 'Fotografia camera', service: 'Servizio da confermare', review: 'Recensioni verificate da inserire', map: 'Posizione e mappa da completare', gallery: 'Fotografia gallery' },
  en: { home: 'Home', quote: 'Request a quote', unavailable: 'Contact details pending', explore: 'Explore Villa Maria Elena', photo: 'Placeholder image', room: 'Room photograph', service: 'Service to be confirmed', review: 'Verified reviews to be added', map: 'Location and map to be completed', gallery: 'Gallery photograph' },
  de: { home: 'Home', quote: 'Angebot anfragen', unavailable: 'Kontaktdaten folgen', explore: 'Villa Maria Elena entdecken', photo: 'Platzhalterbild', room: 'Zimmerfoto', service: 'Ausstattung noch zu bestätigen', review: 'Geprüfte Bewertungen folgen', map: 'Lage und Karte werden ergänzt', gallery: 'Galeriefoto' },
};
export const navigation = ['hero', 'rooms', 'gallery', 'services', 'destination', 'location'] as const;
