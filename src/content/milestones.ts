import type { BranchSlug } from "./churches";

export type Milestone = {
  branch: BranchSlug;
  year: number;
  approximate: boolean;
  place: string;
  lat: number;
  lon: number;
  text: string;
};

/**
 * Hitos de la expansión del cristianismo. Antes de cada separación se usa el
 * color del tronco común («primer-milenio»). Las fechas marcadas como
 * aproximadas siguen a veces la tradición.
 */
export const milestones: readonly Milestone[] = [
  { branch: "primer-milenio", year: 30, approximate: true, place: "Jerusalén", lat: 31.78, lon: 35.23, text: "Muerte de Jesús. Sus discípulos anuncian que ha resucitado y forman la primera comunidad." },
  { branch: "primer-milenio", year: 40, approximate: true, place: "Antioquía", lat: 36.2, lon: 36.16, text: "Según los Hechos de los Apóstoles, aquí se llama «cristianos» a los seguidores de Jesús por primera vez." },
  { branch: "primer-milenio", year: 50, approximate: true, place: "Corinto", lat: 37.91, lon: 22.88, text: "Pablo de Tarso funda una comunidad a la que después escribirá dos cartas." },
  { branch: "primer-milenio", year: 54, approximate: true, place: "Éfeso", lat: 37.94, lon: 27.34, text: "Pablo pasa casi tres años en Éfeso, una de las grandes ciudades del Mediterráneo." },
  { branch: "primer-milenio", year: 64, approximate: true, place: "Roma", lat: 41.9, lon: 12.5, text: "Persecución de Nerón. Según la tradición, Pedro y Pablo mueren mártires en Roma por esos años." },
  { branch: "primer-milenio", year: 301, approximate: true, place: "Armenia", lat: 40.16, lon: 44.29, text: "Armenia es el primer reino que adopta el cristianismo como religión oficial." },
  { branch: "primer-milenio", year: 313, approximate: false, place: "Milán", lat: 45.46, lon: 9.19, text: "Con el Edicto de Milán, el Imperio romano deja de perseguir a los cristianos." },
  { branch: "primer-milenio", year: 325, approximate: false, place: "Nicea", lat: 40.43, lon: 29.72, text: "Primer concilio ecuménico. De él sale el Credo que todavía rezan muchas iglesias." },
  { branch: "primer-milenio", year: 330, approximate: true, place: "Aksum (Etiopía)", lat: 14.13, lon: 38.72, text: "El rey Ezana de Aksum se convierte al cristianismo." },
  { branch: "primer-milenio", year: 380, approximate: false, place: "Tesalónica", lat: 40.64, lon: 22.94, text: "El emperador Teodosio convierte el cristianismo en la religión oficial del Imperio." },
  { branch: "primer-milenio", year: 432, approximate: true, place: "Irlanda", lat: 54.35, lon: -6.65, text: "Comienza la misión de san Patricio en Irlanda." },
  { branch: "orientales", year: 451, approximate: false, place: "Calcedonia", lat: 40.99, lon: 29.03, text: "Concilio de Calcedonia. Las iglesias de Egipto, Armenia y parte de Siria no aceptan sus decisiones y siguen su propio camino." },
  { branch: "primer-milenio", year: 589, approximate: false, place: "Toledo", lat: 39.86, lon: -4.02, text: "III Concilio de Toledo: el rey visigodo Recaredo abandona el arrianismo y se une a la Iglesia de Roma." },
  { branch: "primer-milenio", year: 597, approximate: false, place: "Canterbury", lat: 51.28, lon: 1.08, text: "El monje Agustín llega a Inglaterra enviado por el papa Gregorio Magno." },
  { branch: "primer-milenio", year: 825, approximate: true, place: "Santiago de Compostela", lat: 42.88, lon: -8.54, text: "Según la tradición, se descubre el sepulcro del apóstol Santiago. Empieza el Camino de Santiago." },
  { branch: "primer-milenio", year: 988, approximate: false, place: "Kiev", lat: 50.45, lon: 30.52, text: "El príncipe Vladimiro se bautiza y lleva el cristianismo a la Rus de Kiev." },
  { branch: "ortodoxa", year: 1054, approximate: false, place: "Constantinopla", lat: 41.01, lon: 28.98, text: "Gran Cisma: Roma y Constantinopla se excomulgan. Se separan la Iglesia católica y la ortodoxa." },
  { branch: "orientales", year: 1200, approximate: true, place: "Lalibela (Etiopía)", lat: 12.03, lon: 39.04, text: "Se excavan en la roca once iglesias de una sola pieza, que todavía se usan." },
  { branch: "protestante", year: 1517, approximate: false, place: "Wittenberg", lat: 51.87, lon: 12.65, text: "Martín Lutero publica sus 95 tesis. Empieza la Reforma protestante." },
  { branch: "catolica", year: 1524, approximate: false, place: "Ciudad de México", lat: 19.43, lon: -99.13, text: "Llegan los primeros doce misioneros franciscanos a México." },
  { branch: "anglicana", year: 1534, approximate: false, place: "Londres", lat: 51.51, lon: -0.13, text: "Enrique VIII se proclama cabeza de la Iglesia de Inglaterra y rompe con Roma." },
  { branch: "protestante", year: 1541, approximate: false, place: "Ginebra", lat: 46.2, lon: 6.15, text: "Juan Calvino organiza la Iglesia de Ginebra, modelo para las iglesias reformadas." },
  { branch: "catolica", year: 1545, approximate: false, place: "Trento", lat: 46.07, lon: 11.12, text: "Empieza el Concilio de Trento, la gran respuesta católica a la Reforma." },
  { branch: "catolica", year: 1549, approximate: false, place: "Kagoshima (Japón)", lat: 31.6, lon: 130.56, text: "Francisco Javier, jesuita navarro, llega a Japón." },
  { branch: "catolica", year: 1565, approximate: false, place: "Cebú (Filipinas)", lat: 10.3, lon: 123.9, text: "Comienza la evangelización de Filipinas, hoy el país más católico de Asia." },
  { branch: "catolica", year: 1601, approximate: false, place: "Pekín", lat: 39.9, lon: 116.4, text: "El jesuita Matteo Ricci se instala en la corte del emperador de China." },
  { branch: "protestante", year: 1620, approximate: false, place: "Plymouth (Massachusetts)", lat: 41.96, lon: -70.67, text: "Llegan los Peregrinos del Mayflower, puritanos ingleses que buscaban libertad religiosa." },
  { branch: "catolica", year: 1784, approximate: false, place: "Corea", lat: 37.57, lon: 126.98, text: "Nace la Iglesia católica en Corea, fundada por laicos antes de que llegara ningún sacerdote." },
  { branch: "ortodoxa", year: 1794, approximate: false, place: "Kodiak (Alaska)", lat: 57.79, lon: -152.41, text: "Llegan misioneros ortodoxos rusos a Alaska." },
  { branch: "catolica", year: 1886, approximate: false, place: "Namugongo (Uganda)", lat: 0.38, lon: 32.65, text: "Martirio de jóvenes católicos y anglicanos en Uganda. Hoy es un gran lugar de peregrinación africano." },
  { branch: "protestante", year: 1906, approximate: false, place: "Los Ángeles", lat: 34.05, lon: -118.24, text: "El avivamiento de la calle Azusa da origen al movimiento pentecostal." },
  { branch: "catolica", year: 1962, approximate: false, place: "Ciudad del Vaticano", lat: 41.9, lon: 12.45, text: "Se abre el Concilio Vaticano II, que renueva la liturgia y el diálogo con otras iglesias." },
];
