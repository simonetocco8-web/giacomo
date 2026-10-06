export const site = {
  name: 'Villa Maria Elena',
  destination: 'Capo Vaticano',
  region: 'Calabria',
  coast: 'Costa degli Dei',
  location: 'Capo Vaticano · Costa degli Dei',
  url: 'https://villamariaelena.it',
  bookingUrl: 'https://bbpl.it/Yt3XJ9z',
  quoteUrl: 'https://forms.gle/LK8PGSwM8tkUZr339',
  whatsappUrl: null as string | null,
  facebookUrl: 'https://www.facebook.com/villamariaelenacapovaticano',
  mapsUrl: 'https://goo.gl/maps/FsEhcgXhX9yKG87V9',
  email: null as string | null,
  phone: null as string | null,
  address: null as string | null,
};
export const locales = ['it', 'en', 'de'] as const;
export type Locale = typeof locales[number];
export const localePath = (locale: Locale): string => locale === 'it' ? '/' : `/${locale}/`;
export const languageNames: Record<Locale, string> = { it: 'Italiano', en: 'English', de: 'Deutsch' };

// Add only confirmed services and genuine reviews; empty collections are hidden.
export interface Service { label: Record<Locale, string> }
export interface Review { text: Record<Locale, string>; author: string; sourceUrl: string }
export const services: Service[] = [];
export const reviews: Review[] = [];

export const content = {
  it: {
    title: 'Villa Maria Elena | Camere sul mare a Capo Vaticano',
    description: 'Villa Maria Elena a Capo Vaticano, nel cuore della Costa degli Dei. Scopri la struttura, le camere e il mare della Calabria e prenota direttamente il tuo soggiorno.',
    skip: 'Vai al contenuto', menu: 'Menu', book: 'PRENOTA',
    intro: 'Villa Maria Elena, a Capo Vaticano sulla Costa degli Dei.',
    sections: ['Presentazione Villa Maria Elena', 'Camere', 'Servizi', 'Gallery', 'Capo Vaticano', 'Recensioni', 'Dove siamo', 'Prenotazione'],
  },
  en: {
    title: 'Villa Maria Elena | Seaside rooms in Capo Vaticano',
    description: 'Villa Maria Elena in Capo Vaticano, in the heart of the Costa degli Dei. Discover the property, its rooms and the sea of Calabria, and book your stay directly.',
    skip: 'Skip to content', menu: 'Menu', book: 'BOOK',
    intro: 'Villa Maria Elena, in Capo Vaticano on the Costa degli Dei.',
    sections: ['About Villa Maria Elena', 'Rooms', 'Services', 'Gallery', 'Capo Vaticano', 'Reviews', 'Location', 'Booking'],
  },
  de: {
    title: 'Villa Maria Elena | Zimmer am Meer in Capo Vaticano',
    description: 'Villa Maria Elena in Capo Vaticano, im Herzen der Costa degli Dei. Entdecken Sie die Unterkunft, die Zimmer und das Meer Kalabriens und buchen Sie Ihren Aufenthalt direkt.',
    skip: 'Zum Inhalt', menu: 'Menü', book: 'BUCHEN',
    intro: 'Villa Maria Elena, in Capo Vaticano an der Costa degli Dei.',
    sections: ['Über Villa Maria Elena', 'Zimmer', 'Ausstattung', 'Galerie', 'Capo Vaticano', 'Bewertungen', 'Lage', 'Buchung'],
  },
} satisfies Record<Locale, { title: string; description: string; skip: string; menu: string; book: string; intro: string; sections: readonly string[] }>;
export const ui = {
  it: { home: 'Home', quote: 'RICHIEDI PREVENTIVO', explore: 'Scopri Villa Maria Elena', maps: 'Apri su Google Maps' },
  en: { home: 'Home', quote: 'REQUEST A QUOTE', explore: 'Explore Villa Maria Elena', maps: 'Open in Google Maps' },
  de: { home: 'Home', quote: 'ANGEBOT ANFRAGEN', explore: 'Villa Maria Elena entdecken', maps: 'In Google Maps öffnen' },
};
export const navigation = ['hero', 'rooms', 'gallery', ...(services.length ? ['services' as const] : []), 'destination', 'location'] as const;
