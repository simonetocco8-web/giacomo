export const site = {
  name: 'VILLA MARIA ELENA Charme Rooms sul mare',
  shortName: 'Villa Maria Elena',
  destination: 'Capo Vaticano',
  region: 'Calabria',
  coast: 'Costa degli Dei',
  location: 'Capo Vaticano · Costa degli Dei',
  url: 'https://villamariaelena.it',
  bookingUrl: 'https://bbpl.it/Yt3XJ9z',
  quoteUrl: 'https://forms.gle/LK8PGSwM8tkUZr339',
  whatsappUrl: 'https://wa.me/393881183254' as string | null,
  facebookUrl: 'https://www.facebook.com/villamariaelenacapovaticano',
  mapsUrl: 'https://goo.gl/maps/FsEhcgXhX9yKG87V9',
  email: null as string | null,
  phone: '+39 388 118 3254' as string | null,
  phoneUrl: 'tel:+393881183254',
  address: 'Località Tono, Capo Vaticano, 89866, Calabria, Italia' as string | null,
  cin: null as string | null,
  cir: null as string | null,
};
export const locales = ['it', 'en', 'de'] as const;
export type Locale = typeof locales[number];
export const localePath = (locale: Locale): string => locale === 'it' ? '/' : `/${locale}/`;
export const languageNames: Record<Locale, string> = { it: 'Italiano', en: 'English', de: 'Deutsch' };

export const content = {
  it: {
    title: 'Villa Maria Elena | Camere sul mare a Capo Vaticano',
    description: 'Villa Maria Elena a Capo Vaticano, nel cuore della Costa degli Dei. Scopri la struttura, le camere e il mare della Calabria e prenota direttamente il tuo soggiorno.',
    skip: 'Vai al contenuto', menu: 'Menu', book: 'PRENOTA',
    intro: 'Villa Maria Elena Charme Rooms sul mare si trova in Località Tono, a Capo Vaticano, in Calabria.',
    heroIntro: 'Charme Rooms sul mare · Località Tono, Capo Vaticano',
    sections: ['Presentazione Villa Maria Elena', 'Camere', 'Servizi', 'Gallery', 'Capo Vaticano', 'Recensioni', 'Dove siamo', 'Prenotazione'],
  },
  en: {
    title: 'Villa Maria Elena | Seaside rooms in Capo Vaticano',
    description: 'Villa Maria Elena in Capo Vaticano, in the heart of the Costa degli Dei. Discover the property, its rooms and the sea of Calabria, and book your stay directly.',
    skip: 'Skip to content', menu: 'Menu', book: 'BOOK',
    intro: 'Villa Maria Elena Charme Rooms sul mare is located in Località Tono, Capo Vaticano, Calabria, Italy.',
    heroIntro: 'Charme Rooms by the sea · Località Tono, Capo Vaticano',
    sections: ['About Villa Maria Elena', 'Rooms', 'Services', 'Gallery', 'Capo Vaticano', 'Reviews', 'Location', 'Booking'],
  },
  de: {
    title: 'Villa Maria Elena | Zimmer am Meer in Capo Vaticano',
    description: 'Villa Maria Elena in Capo Vaticano, im Herzen der Costa degli Dei. Entdecken Sie die Unterkunft, die Zimmer und das Meer Kalabriens und buchen Sie Ihren Aufenthalt direkt.',
    skip: 'Zum Inhalt', menu: 'Menü', book: 'BUCHEN',
    intro: 'Villa Maria Elena Charme Rooms sul mare liegt in Località Tono, Capo Vaticano, Kalabrien, Italien.',
    heroIntro: 'Charme Rooms am Meer · Località Tono, Capo Vaticano',
    sections: ['Über Villa Maria Elena', 'Zimmer', 'Ausstattung', 'Galerie', 'Capo Vaticano', 'Bewertungen', 'Lage', 'Buchung'],
  },
} satisfies Record<Locale, { title: string; description: string; skip: string; menu: string; book: string; intro: string; heroIntro: string; sections: readonly string[] }>;
export const ui = {
  it: { home: 'Home', quote: 'RICHIEDI PREVENTIVO', explore: 'Scopri Villa Maria Elena', maps: 'DOVE SIAMO' },
  en: { home: 'Home', quote: 'REQUEST A QUOTE', explore: 'Explore Villa Maria Elena', maps: 'LOCATION' },
  de: { home: 'Home', quote: 'ANGEBOT ANFRAGEN', explore: 'Villa Maria Elena entdecken', maps: 'LAGE' },
};
export const navigation = ['hero', 'rooms', 'gallery', 'services', 'destination', 'location'] as const;
