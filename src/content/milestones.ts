import type { ReligionSlug } from "./religions";

export type Milestone = {
  religion: ReligionSlug;
  year: number;
  approximate: boolean;
  place: string;
  lat: number;
  lon: number;
  text: string;
};

/**
 * Hitos de llegada o expansión de cada tradición. Las fechas antiguas son
 * aproximadas y algunas siguen la cronología tradicional.
 */
export const milestones: readonly Milestone[] = [
  // Hinduismo
  { religion: "hinduismo", year: -1500, approximate: true, place: "Panyab", lat: 31.5, lon: 74.3, text: "Se componen los primeros himnos del Rigveda." },
  { religion: "hinduismo", year: -800, approximate: true, place: "Valle del Ganges", lat: 25.3, lon: 83.0, text: "Aparecen las primeras Upanishads, textos filosóficos sobre el alma y Brahman." },
  { religion: "hinduismo", year: 850, approximate: true, place: "Prambanan (Java)", lat: -7.75, lon: 110.49, text: "Se levanta el gran templo de Prambanan, dedicado a Shiva, Vishnu y Brahma." },
  { religion: "hinduismo", year: 1120, approximate: true, place: "Angkor (Camboya)", lat: 13.41, lon: 103.87, text: "Comienza la construcción de Angkor Wat, dedicado a Vishnu." },
  { religion: "hinduismo", year: 1845, approximate: false, place: "Trinidad", lat: 10.65, lon: -61.5, text: "Llegan los primeros trabajadores indios al Caribe y con ellos sus templos y fiestas." },

  // Judaísmo
  { religion: "judaismo", year: -1800, approximate: true, place: "Hebrón (Canaán)", lat: 31.53, lon: 35.1, text: "Época de Abraham, según la tradición judía." },
  { religion: "judaismo", year: -960, approximate: true, place: "Jerusalén", lat: 31.78, lon: 35.23, text: "Se construye el Primer Templo, según el relato bíblico." },
  { religion: "judaismo", year: -586, approximate: false, place: "Babilonia", lat: 32.54, lon: 44.42, text: "Tras la destrucción del Templo, parte del pueblo vive en el exilio de Babilonia." },
  { religion: "judaismo", year: -250, approximate: true, place: "Alejandría", lat: 31.2, lon: 29.92, text: "La Torá se traduce al griego (la Septuaginta)." },
  { religion: "judaismo", year: 306, approximate: true, place: "Elvira (Granada)", lat: 37.18, lon: -3.6, text: "Primeras menciones escritas de comunidades judías en Hispania." },
  { religion: "judaismo", year: 1654, approximate: false, place: "Nueva Ámsterdam", lat: 40.71, lon: -74.0, text: "Se instala la primera comunidad judía en lo que hoy es Nueva York." },

  // Budismo
  { religion: "budismo", year: -528, approximate: true, place: "Bodh Gaya (India)", lat: 24.7, lon: 84.99, text: "Siddhartha Gautama alcanza el despertar bajo un árbol, según la tradición." },
  { religion: "budismo", year: -250, approximate: true, place: "Anuradhapura (Sri Lanka)", lat: 8.35, lon: 80.39, text: "Mahinda, hijo del emperador Ashoka, lleva el budismo a Sri Lanka." },
  { religion: "budismo", year: 68, approximate: true, place: "Luoyang (China)", lat: 34.72, lon: 112.6, text: "Se funda el Templo del Caballo Blanco, el primero budista de China según la tradición." },
  { religion: "budismo", year: 372, approximate: false, place: "Corea", lat: 39.0, lon: 125.75, text: "El budismo llega al reino coreano de Goguryeo." },
  { religion: "budismo", year: 538, approximate: true, place: "Nara (Japón)", lat: 34.4, lon: 135.8, text: "Llegan a Japón las primeras imágenes y textos budistas." },
  { religion: "budismo", year: 640, approximate: true, place: "Lhasa (Tíbet)", lat: 29.65, lon: 91.1, text: "El budismo entra en el Tíbet durante el reinado de Songtsen Gampo." },
  { religion: "budismo", year: 800, approximate: true, place: "Borobudur (Java)", lat: -7.61, lon: 110.2, text: "Se construye Borobudur, el mayor monumento budista del mundo." },

  // Confucianismo
  { religion: "confucianismo", year: -500, approximate: true, place: "Qufu (China)", lat: 35.6, lon: 116.99, text: "Confucio enseña a sus discípulos sobre la virtud y el buen gobierno." },
  { religion: "confucianismo", year: -136, approximate: false, place: "Chang'an (China)", lat: 34.27, lon: 108.9, text: "El emperador Wu de Han convierte el confucianismo en doctrina oficial del Estado." },
  { religion: "confucianismo", year: 1070, approximate: false, place: "Hanói (Vietnam)", lat: 21.03, lon: 105.84, text: "Se funda el Templo de la Literatura, dedicado a Confucio." },
  { religion: "confucianismo", year: 1392, approximate: false, place: "Corea", lat: 37.57, lon: 126.98, text: "La dinastía Joseon adopta el neoconfucianismo como base del Estado." },

  // Taoísmo
  { religion: "taoismo", year: -400, approximate: true, place: "China central", lat: 33.86, lon: 115.48, text: "Circula el Daodejing, atribuido a Laozi." },
  { religion: "taoismo", year: 142, approximate: true, place: "Sichuan (China)", lat: 30.6, lon: 103.6, text: "Zhang Daoling funda la escuela de los Maestros Celestiales, inicio del taoísmo religioso." },
  { religion: "taoismo", year: 1412, approximate: true, place: "Montes Wudang (China)", lat: 32.4, lon: 111.0, text: "La dinastía Ming levanta el gran complejo de templos de Wudang." },

  // Cristianismo
  { religion: "cristianismo", year: 30, approximate: true, place: "Jerusalén", lat: 31.78, lon: 35.23, text: "Muerte de Jesús y primeras comunidades de sus seguidores." },
  { religion: "cristianismo", year: 40, approximate: true, place: "Antioquía", lat: 36.2, lon: 36.16, text: "Según los Hechos de los Apóstoles, aquí se les llama «cristianos» por primera vez." },
  { religion: "cristianismo", year: 64, approximate: false, place: "Roma", lat: 41.9, lon: 12.5, text: "Persecución de los cristianos bajo el emperador Nerón." },
  { religion: "cristianismo", year: 301, approximate: true, place: "Armenia", lat: 40.16, lon: 44.29, text: "Armenia es el primer reino que adopta el cristianismo como religión oficial." },
  { religion: "cristianismo", year: 330, approximate: true, place: "Aksum (Etiopía)", lat: 14.13, lon: 38.72, text: "El rey Ezana de Aksum se convierte al cristianismo." },
  { religion: "cristianismo", year: 432, approximate: true, place: "Irlanda", lat: 54.35, lon: -6.65, text: "Comienza la misión de san Patricio en Irlanda." },
  { religion: "cristianismo", year: 988, approximate: false, place: "Kiev", lat: 50.45, lon: 30.52, text: "El príncipe Vladimiro se bautiza y lleva el cristianismo ortodoxo a la Rus de Kiev." },
  { religion: "cristianismo", year: 1524, approximate: false, place: "Ciudad de México", lat: 19.43, lon: -99.13, text: "Llegan los primeros doce misioneros franciscanos a México." },
  { religion: "cristianismo", year: 1565, approximate: false, place: "Cebú (Filipinas)", lat: 10.3, lon: 123.9, text: "Comienza la evangelización de Filipinas." },

  // Islam
  { religion: "islam", year: 610, approximate: false, place: "La Meca", lat: 21.42, lon: 39.83, text: "Mahoma recibe la primera revelación, según la tradición islámica." },
  { religion: "islam", year: 622, approximate: false, place: "Medina", lat: 24.47, lon: 39.61, text: "La Hégira: Mahoma emigra a Medina. Aquí empieza el calendario islámico." },
  { religion: "islam", year: 661, approximate: false, place: "Damasco", lat: 33.51, lon: 36.29, text: "Damasco se convierte en capital del califato omeya." },
  { religion: "islam", year: 711, approximate: false, place: "Gibraltar", lat: 36.14, lon: -5.35, text: "Tropas musulmanas cruzan el estrecho: comienza al-Ándalus." },
  { religion: "islam", year: 762, approximate: false, place: "Bagdad", lat: 33.31, lon: 44.36, text: "Se funda Bagdad, capital del califato abasí y gran centro de saber." },
  { religion: "islam", year: 1206, approximate: false, place: "Delhi", lat: 28.61, lon: 77.2, text: "Nace el sultanato de Delhi." },
  { religion: "islam", year: 1297, approximate: true, place: "Samudera Pasai (Sumatra)", lat: 5.2, lon: 97.1, text: "Primer sultanato musulmán documentado en el sudeste asiático." },
  { religion: "islam", year: 1327, approximate: true, place: "Tombuctú (Malí)", lat: 16.77, lon: -3.0, text: "Se construye la mezquita de Djinguereber tras la peregrinación de Mansa Musa." },
  { religion: "islam", year: 1453, approximate: false, place: "Estambul", lat: 41.0, lon: 28.97, text: "Los otomanos toman Constantinopla." },

  // Sijismo
  { religion: "sijismo", year: 1499, approximate: false, place: "Sultanpur Lodhi (Panyab)", lat: 31.21, lon: 75.2, text: "Gurú Nanak vive su experiencia espiritual y empieza a predicar." },
  { religion: "sijismo", year: 1604, approximate: false, place: "Amritsar", lat: 31.62, lon: 74.88, text: "Se instala el libro sagrado en el Harmandir Sahib (el Templo Dorado)." },
  { religion: "sijismo", year: 1699, approximate: false, place: "Anandpur Sahib", lat: 31.24, lon: 76.5, text: "Gurú Gobind Singh funda la Khalsa, la comunidad de iniciados." },
  { religion: "sijismo", year: 1908, approximate: false, place: "Vancouver", lat: 49.28, lon: -123.12, text: "Se abre la primera gurdwara de Norteamérica." },
  { religion: "sijismo", year: 1911, approximate: false, place: "Londres", lat: 51.46, lon: -0.22, text: "Se abre la primera gurdwara del Reino Unido, en Putney." },
];
