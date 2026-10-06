import generated from './images.generated.json';
import type { Locale } from './site';

const halfWidth = '(min-width: 75rem) 552px, (min-width: 48rem) calc((100vw - 5.5rem) / 2), calc(100vw - 2.5rem)';
const galleryWidth = '(min-width: 75rem) 368px, (min-width: 48rem) calc((100vw - 5.5rem) / 3), calc(100vw - 2.5rem)';
const captions = {
  hero: {
    it: 'Scogliera e piccola spiaggia affacciate sul mare turchese di Capo Vaticano',
    en: 'Cliffs and a small beach overlooking the turquoise sea of Capo Vaticano',
    de: 'Felsen und ein kleiner Strand am türkisfarbenen Meer von Capo Vaticano',
  },
  roomTimber: {
    it: 'Camera con letto matrimoniale, travi in legno e parete in pietra',
    en: 'Guest room with a double bed, wooden beams and a stone wall',
    de: 'Zimmer mit Doppelbett, Holzbalken und einer Steinwand',
  },
  roomBrick: {
    it: 'Camera con letto matrimoniale, parete in mattoni e finestra con tende chiare',
    en: 'Guest room with a double bed, a brick wall and a window with light curtains',
    de: 'Zimmer mit Doppelbett, Backsteinwand und Fenster mit hellen Vorhängen',
  },
  galleryGarden: {
    it: 'Esterno di Villa Maria Elena con giardino e vialetto',
    en: 'Villa Maria Elena exterior with its garden and pathway',
    de: 'Außenansicht der Villa Maria Elena mit Garten und Gehweg',
  },
  galleryLinen: {
    it: 'Asciugamani arrotolati sul letto davanti alla parete in pietra',
    en: 'Rolled towels on the bed in front of a stone wall',
    de: 'Gerollte Handtücher auf dem Bett vor einer Steinwand',
  },
  galleryTerrace: {
    it: 'Terrazza coperta con tavoli e sedie affacciata sul giardino',
    en: 'Covered terrace with tables and chairs overlooking the garden',
    de: 'Überdachte Terrasse mit Tischen und Stühlen mit Blick auf den Garten',
  },
  destination: {
    it: 'Panorama della costa di Capo Vaticano con scogliere e mare turchese',
    en: 'View of the Capo Vaticano coastline with cliffs and turquoise sea',
    de: 'Blick auf die Küste von Capo Vaticano mit Felsen und türkisfarbenem Meer',
  },
} satisfies Record<keyof typeof generated, Record<Locale, string>>;

export function homepageImages(locale: Locale) {
  const photo = (id: keyof typeof generated, sizes: string, position = '50% 50%') => ({
    ...generated[id], alt: captions[id][locale], sizes, position,
  });
  return {
    // Cover fills the viewport height on phones; choose resolution for the
    // covered width rather than underestimating it as just 100vw.
    hero: photo('hero', '(max-aspect-ratio: 16/9) 178svh, 100vw', '62% 50%'),
    rooms: [photo('roomTimber', halfWidth), photo('roomBrick', halfWidth, '50% 65%')],
    gallery: [photo('galleryGarden', galleryWidth), photo('galleryLinen', galleryWidth, '50% 60%'), photo('galleryTerrace', galleryWidth)],
    destination: photo('destination', halfWidth),
  };
}
