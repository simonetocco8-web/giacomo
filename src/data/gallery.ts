import { site } from './site';
// Exact filenames supplied by the owner; /galleria/ is the existing hosting folder.
export const galleryPhotos = Array.from({ length: 28 }, (_, i) => ({
  src: `/galleria/gallery_${String(900 + i * 5).padStart(4, '0')}.jpg`,
  number: i + 1,
}));
export const galleryContent = {
  it: { title: `Gallery | ${site.shortName} a Capo Vaticano`, description: `La galleria fotografica di ${site.shortName} a Capo Vaticano.`, heading: 'Gallery', intro: 'Una raccolta di fotografie di Villa Maria Elena.', viewAll: 'Scopri tutte le fotografie', photo: (n: number) => `Fotografia ${n} di Villa Maria Elena`, open: (n: number) => `Apri la fotografia ${n} a dimensione intera` },
  en: { title: `Photo gallery | ${site.shortName} in Capo Vaticano`, description: `The photo gallery of ${site.shortName} in Capo Vaticano.`, heading: 'Photo gallery', intro: 'A collection of photographs of Villa Maria Elena.', viewAll: 'Explore all photographs', photo: (n: number) => `Photograph ${n} of Villa Maria Elena`, open: (n: number) => `Open photograph ${n} at full size` },
  de: { title: `Fotogalerie | ${site.shortName} in Capo Vaticano`, description: `Die Fotogalerie der ${site.shortName} in Capo Vaticano.`, heading: 'Fotogalerie', intro: 'Eine Sammlung von Fotografien der Villa Maria Elena.', viewAll: 'Alle Fotografien ansehen', photo: (n: number) => `Fotografie ${n} der Villa Maria Elena`, open: (n: number) => `Fotografie ${n} in voller Größe öffnen` },
};
