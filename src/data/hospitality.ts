import type { Locale } from './site';

// Confirmed by the owner; do not infer further amenities from the photographs.
export const distances = { beachMetres: 36, viewpointKm: 1.9, tropeaKm: 12, airportKm: 69 };
export const stay = {
  checkInFrom: '16:00', checkOutBy: '10:00',
  parkingDailyEuros: 10, parkingReservationRequired: true,
  petsAllowed: false, childrenAllowed: true,
  staffLanguages: ['it', 'en'] as const,
};
const labels = {
  beachfront: ['Struttura fronte mare', 'Beachfront property', 'Unterkunft direkt am Meer'],
  privateBeach: ['Spiaggia privata', 'Private beach', 'Privatstrand'],
  freeWifi: ['Wi-Fi gratuito', 'Free Wi-Fi', 'Kostenloses WLAN'],
  wifi: ['Wi-Fi', 'Wi-Fi', 'WLAN'],
  airConditioning: ['Aria condizionata', 'Air conditioning', 'Klimaanlage'],
  garden: ['Giardino', 'Garden', 'Garten'],
  sunLoungersParasols: ['Lettini e ombrelloni', 'Sun loungers and parasols', 'Sonnenliegen und Sonnenschirme'],
  outdoorFurniture: ['Arredi da esterno', 'Outdoor furniture', 'Gartenmöbel'],
  italianBreakfast: ['Colazione italiana', 'Italian breakfast', 'Italienisches Frühstück'],
  dailyCleaning: ['Pulizia giornaliera', 'Daily housekeeping', 'Tägliche Reinigung'],
  luggageStorage: ['Deposito bagagli', 'Luggage storage', 'Gepäckaufbewahrung'],
  privateCheckinCheckout: ['Check-in e check-out privati', 'Private check-in and check-out', 'Privater Check-in und Check-out'],
  privateParking: ['Parcheggio privato in struttura', 'Private parking on site', 'Privatparkplatz an der Unterkunft'],
  airportShuttlePaid: ['Navetta aeroportuale a pagamento', 'Airport shuttle for an additional charge', 'Flughafentransfer gegen Aufpreis'],
  wheelchairAccessible: ['Accessibile in sedia a rotelle', 'Wheelchair accessible', 'Rollstuhlgerecht'],
  accessibleBathroom: ['Bagno accessibile', 'Accessible bathroom', 'Barrierefreies Badezimmer'],
  canoeing: ['Canoa', 'Canoeing', 'Kanufahren'],
  snorkeling: ['Snorkeling', 'Snorkelling', 'Schnorcheln'],
  diving: ['Immersioni', 'Diving', 'Tauchen'],
  hiking: ['Escursionismo', 'Hiking', 'Wandern'],
  cycling: ['Ciclismo', 'Cycling', 'Radfahren'],
  privateBathroom: ['Bagno privato', 'Private bathroom', 'Eigenes Badezimmer'],
  patio: ['Patio', 'Patio', 'Patio'],
  wardrobe: ['Armadio', 'Wardrobe', 'Kleiderschrank'],
  kingBed: ['Letto king size', 'King-size bed', 'Kingsize-Bett'],
  sofaBed: ['Divano letto', 'Sofa bed', 'Schlafsofa'],
  sittingArea: ['Zona salotto', 'Seating area', 'Sitzbereich'],
} as const;
export type Amenity = keyof typeof labels;
export const amenityLabel = (id: Amenity, locale: Locale) => labels[id][{ it: 0, en: 1, de: 2 }[locale]];

export interface Room { name: string; areaM2: number; maxGuests: number; amenities: Amenity[] }
// Booking names are deliberately kept unchanged in every language.
export const rooms: Room[] = [
  { name: 'Camera Matrimoniale con Patio', areaM2: 18, maxGuests: 2, amenities: ['privateBathroom', 'patio', 'airConditioning', 'wifi', 'wardrobe', 'wheelchairAccessible'] },
  { name: 'Camera Queen', areaM2: 30, maxGuests: 3, amenities: ['kingBed', 'sofaBed', 'sittingArea', 'privateBathroom', 'airConditioning', 'wifi', 'wardrobe'] },
  { name: 'Camera Matrimoniale Budget', areaM2: 24, maxGuests: 2, amenities: ['kingBed', 'privateBathroom', 'airConditioning', 'wifi', 'wardrobe'] },
];
export type ServiceGroupId = 'sea' | 'comfort' | 'care' | 'arrival' | 'accessibility' | 'activities';
export const serviceGroups: { id: ServiceGroupId; amenities: Amenity[] }[] = [
  { id: 'sea', amenities: ['beachfront', 'privateBeach', 'sunLoungersParasols'] },
  { id: 'comfort', amenities: ['freeWifi', 'airConditioning', 'garden', 'outdoorFurniture'] },
  { id: 'care', amenities: ['italianBreakfast', 'dailyCleaning', 'luggageStorage', 'privateCheckinCheckout'] },
  { id: 'arrival', amenities: ['privateParking', 'airportShuttlePaid'] },
  { id: 'accessibility', amenities: ['wheelchairAccessible', 'accessibleBathroom'] },
  { id: 'activities', amenities: ['canoeing', 'snorkeling', 'diving', 'hiking', 'cycling'] },
];
