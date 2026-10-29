import type { Media } from "../chapter-types";

/**
 * Vídeos, películas y series de cada episodio.
 * Los vídeos se eligieron por su título y su autor, sin poder verlos: hasta que Martín los revise
 * (y cambie «reviewed» a true) conviene tratarlos como sugerencias.
 */

const audiences = ["descubre", "universidad"] as const;

const video = (youtubeId: string, title: string, by: string, note: string): Media => ({
  kind: "video",
  title,
  by,
  url: `https://www.youtube.com/watch?v=${youtubeId}`,
  youtubeId,
  note,
  audiences,
  reviewed: false,
});

const talk = (youtubeId: string, title: string, by: string, note: string): Media => ({
  ...video(youtubeId, title, by, note),
  kind: "entrevista",
});

const whereToWatch = (title: string): string => `https://www.justwatch.com/es/buscar?q=${encodeURIComponent(title)}`;

const film = (title: string, by: string, note: string, trailerYoutubeId?: string): Media => ({
  kind: "pelicula",
  title,
  by,
  url: whereToWatch(title),
  whereToWatch: whereToWatch(title),
  trailerYoutubeId,
  note,
  audiences,
  reviewed: false,
});

const series = (title: string, by: string, note: string): Media => ({ ...film(title, by, note), kind: "serie" });

const theChosen = series(
  "The Chosen (Los elegidos)",
  "Dallas Jenkins, 2019 –",
  "Serie sobre Jesús contada desde la mirada de sus discípulos. Inventa mucho sobre sus vidas, pero recrea bien el ambiente de Galilea.",
);

const zeffirelli = series(
  "Jesús de Nazaret",
  "Franco Zeffirelli, 1977",
  "La miniserie clásica sobre la vida de Jesús, rodada con mucho cuidado por el ambiente de la época.",
);

export const episodeMedia: Readonly<Record<string, readonly Media[]>> = {
  // Temporada 1
  "que-es-el-cristianismo": [
    video("nTiRlqBqxC4", "¿Qué es el cristianismo y cómo surgió? Creencias y símbolos", "YouTube", "Una introducción general a las creencias y símbolos cristianos."),
  ],
  "el-mundo-de-jesus": [
    video("A37HqEjTSu4", "Judea, Samaría y Galilea en tiempos de Jesús: geografía, historia y cultura", "Eva Tobalina", "Una biblista recorre las regiones de Palestina en el siglo I."),
    film("Ben-Hur", "William Wyler, 1959", "La gran superproducción sobre un noble judío bajo el dominio romano, con Jesús como figura de fondo."),
  ],
  "el-judaismo-en-tiempos-de-jesus": [
    talk("dsvvfycvCMA", "El pueblo judío en tiempos de Jesús: esenios, fariseos, saduceos, samaritanos", "Joseángel Domínguez", "Conferencia sobre los grupos del judaísmo del siglo I."),
  ],
  "el-imperio-romano": [
    video("x1Q_Zcns4Go", "El Imperio romano: toda su historia, desde su nacimiento hasta su caída", "YouTube", "Un repaso completo a la historia de Roma."),
  ],
  "la-esperanza-de-israel": [
    video("VmYEOEGfleE", "El mesías según el judaísmo (parte 1)", "YouTube", "Cómo entiende el judaísmo la figura del Mesías."),
  ],
  "las-fuentes-sobre-jesus": [
    talk("zS9Gcapz7hU", "Aproximación al Jesús histórico", "Entrevista a Antonio Piñero", "El catedrático de Filología Griega explica qué podemos saber de Jesús con métodos históricos."),
  ],
  "el-nacimiento-de-jesus": [
    video("pTWuVEy5Vdg", "En qué fecha nació Jesús según los evangelios y cómo se llegó al 25 de diciembre", "YouTube", "Las fechas del nacimiento de Jesús y el origen de la Navidad."),
  ],
  "la-infancia-de-jesus": [
    video("FNgYQXOWgX4", "La infancia de Jesús", "YouTube", "Un vídeo sencillo sobre los años de Nazaret, pensado también para los más pequeños."),
    film("El joven Mesías", "Cyrus Nowrasteh, 2016", "Imagina a Jesús con siete años, a partir de los evangelios y de algunos relatos apócrifos."),
  ],
  "juan-el-bautista": [
    video("_Ume6GrTJq0", "Juan el Bautista… ¿fue el maestro de Jesús de Nazaret?", "YouTube", "La relación entre Juan y Jesús, vista desde la historia."),
  ],
  "el-reino-de-dios": [
    talk("oNgmdC5uacA", "Lo que Jesús predicó: la venida del Reino de Dios y la moral de Jesús", "Antonio Piñero, conferencia en Zamora", "Qué entendía Jesús por «Reino de Dios», explicado por un historiador."),
  ],
  // Temporada 2
  "la-vida-publica": [
    video("nXTvHKWi1bA", "La región de Galilea en tiempos de Jesús de Nazaret", "YouTube", "Cómo era la tierra donde Jesús predicó."),
    theChosen,
  ],
  "los-apostoles": [
    video("Y6EmNfw8e2s", "¿Quiénes eran los apóstoles de Jesús?", "aulamedia Historia", "Un vídeo educativo sobre los Doce."),
    theChosen,
  ],
  "las-parabolas": [
    video("eFdHlZnWBSw", "¿Qué son las parábolas en la Biblia y cómo las utilizaba Jesús?", "YouTube", "Qué es una parábola y por qué Jesús enseñaba con historias."),
  ],
  "los-milagros": [
    video("Vi51s_Q-E9A", "¿Cuáles fueron los milagros de Jesús?", "YouTube", "Un repaso a los milagros que cuentan los evangelios."),
    zeffirelli,
  ],
  "el-sermon-de-la-montana": [
    video("W2jVZGRHS_E", "Para comprender ¡por fin! las bienaventuranzas del Evangelio", "YouTube", "Una explicación de las bienaventuranzas, una a una."),
    film("El evangelio según san Mateo", "Pier Paolo Pasolini, 1964", "Una película en blanco y negro, rodada con actores no profesionales, que sigue casi palabra por palabra el evangelio de Mateo."),
  ],
  "mujeres-pobres-y-marginados": [
    video("AOx5xvn4AxI", "María Magdalena. Su historia y su mito", "YouTube", "Qué dicen los evangelios de María Magdalena y cómo nació la leyenda de la pecadora."),
    film("María Magdalena", "Garth Davis, 2018", "La vida de Jesús contada desde la mirada de María Magdalena."),
  ],
  "conflictos-con-las-autoridades": [
    video("5p61dLw1FY8", "¿Qué era y en qué consistía el Sanedrín judío que condenó a Jesucristo?", "YouTube", "El tribunal supremo judío y su papel en la condena de Jesús."),
  ],
  "la-ultima-cena": [
    video("h6O2jVQlyXk", "Análisis de La última cena de Leonardo da Vinci", "YouTube", "Los detalles del cuadro más famoso de la Última Cena."),
  ],
  "la-pasion": [
    talk("D48O7BmbSPM", "La verdadera historia de la Pasión de Cristo", "Con Antonio Piñero", "Lo que la historia puede decir sobre el juicio y la muerte de Jesús."),
    video("JGzziCDWfsg", "La muerte por crucifixión en la Antigua Roma", "Óscar Hernández (Historiae)", "Cómo era la crucifixión romana."),
    film("La Pasión de Cristo", "Mel Gibson, 2004", "Recrea las últimas horas de Jesús en arameo y latín. Es extremadamente violenta: no es para menores."),
  ],
  "la-resurreccion": [
    video("ecgQbBBKgPk", "Debate sobre la resurrección de Jesús", "YouTube", "Argumentos a favor y en contra sobre la resurrección."),
    film("Resucitado", "Kevin Reynolds, 2016", "Un tribuno romano investiga la desaparición del cuerpo de Jesús."),
  ],
  "la-ascension": [
    video("3nteppZqCpw", "¿Qué es la Ascensión de Jesús?", "YouTube", "Qué significa la Ascensión y por qué se celebra."),
  ],
  "quien-es-jesucristo": [
    video("_RjBXXcIguw", "¿Quién fue realmente Jesús de Nazaret?", "Documental con Antonio Piñero", "Un documental sobre el Jesús histórico."),
    zeffirelli,
  ],
  // Temporada 3
  pentecostes: [
    video("mMYDMIbQ1Ik", "Pentecostés: ¿qué significa? ¿Por qué se celebra?", "YouTube", "El origen judío de la fiesta y su sentido cristiano."),
  ],
  "la-comunidad-de-jerusalen": [
    video("SwWLp47RbfQ", "Primeras comunidades cristianas", "YouTube", "Cómo vivían los primeros seguidores de Jesús en Jerusalén."),
  ],
  pedro: [
    video("OuFT1wbj2wg", "La tumba de san Pedro y la necrópolis vaticana", "YouTube", "Las excavaciones bajo la basílica de San Pedro."),
  ],
  pablo: [
    talk("nDO-aARu_dc", "Pablo de Tarso desde la mirada de Antonio Piñero", "Antonio Piñero", "Quién fue Pablo y por qué es tan importante para el cristianismo."),
    film("Pablo, el apóstol de Cristo", "Andrew Hyatt, 2018", "Los últimos días de Pablo, preso en Roma, contados por su compañero Lucas."),
  ],
  "los-viajes-de-pablo": [
    video("XeDEJ3m74OM", "La historia completa de Pablo, en un mapa", "YouTube", "Los viajes de Pablo, siguiendo el mapa del Mediterráneo."),
  ],
  "las-primeras-cartas": [
    video("o7tN_ynGuso", "Todas las cartas del apóstol Pablo explicadas en su orden cronológico", "YouTube", "Las cartas de Pablo, de la más antigua a la más reciente."),
  ],
  "las-primeras-comunidades": [
    video("SjVCheeqocA", "Conociendo las primeras comunidades cristianas", "YouTube", "Cómo se organizaban y reunían los primeros cristianos."),
  ],
  "cristianos-y-judios": [
    video("kCLoj5__slY", "Judaísmo y cristianismo, ¿por qué se separaron?", "YouTube", "Cómo dos comunidades que compartían Escrituras acabaron siendo religiones distintas."),
  ],
  "las-mujeres-en-las-comunidades": [
    talk("XIuVSNGqR4c", "Mujeres en el cristianismo primitivo", "Carmen Bernabé, Cátedra María Magdala", "Una profesora de Nuevo Testamento habla de Febe, Junia, Prisca y las demás."),
  ],
  // Temporada 4
  "neron-y-las-primeras-persecuciones": [
    video("rfzUR4KonF4", "El gran incendio de Roma: cómo se originó y por qué culparon a los cristianos", "YouTube", "El incendio del año 64 y la primera persecución."),
    film("Quo vadis", "Mervyn LeRoy, 1951", "La gran película sobre los cristianos de Roma en tiempos de Nerón, basada en la novela de Sienkiewicz."),
  ],
  "los-martires": [
    video("xATY-VNb7Qg", "Martirio en Cartago: el sacrificio de Perpetua y Felicidad", "YouTube", "La historia de las dos mártires africanas."),
  ],
  "las-catacumbas": [
    video("eBzvhAC8t88", "Un Vaticano en las catacumbas de San Calixto: la cripta donde enterraron a nueve papas", "YouTube", "Un recorrido por la cripta de los papas."),
  ],
  "persecuciones-siglos-ii-y-iii": [
    video("SvgOGFZctVE", "La gran persecución de Diocleciano", "YouTube", "La última y más dura persecución del Imperio."),
  ],
  "la-vida-cotidiana": [
    video("QkDHuVCFMCo", "Vida cotidiana de los primeros cristianos en Roma", "YouTube", "Trabajo, familia y fe de los cristianos en la capital del Imperio."),
  ],
  constantino: [
    video("IHgXJzs-ANQ", "El Imperio romano: Constantino el Grande", "Documental de historia", "La vida del emperador que legalizó el cristianismo."),
  ],
  "nicea-y-los-concilios": [
    video("L4xH6iVWOXE", "¿Qué pasó realmente en el Concilio de Nicea en 325?", "YouTube", "Lo que se decidió en Nicea, y lo que no."),
  ],
  teodosio: [
    video("wYJQPXA6Sh0", "Teodosio I el Grande y el Imperio romano del siglo IV", "YouTube", "El emperador hispano que hizo del cristianismo la religión oficial."),
  ],
  "la-caida-de-roma": [
    video("_N21JnanWTc", "Año 410: el visigodo Alarico saquea la ciudad de Roma", "YouTube", "El saqueo que conmocionó al mundo romano."),
    series("Agustín de Hipona", "Christian Duguay, 2010", "Miniserie sobre la vida de san Agustín, que termina con el asedio de Hipona por los vándalos."),
  ],
  // Temporada 5
  "la-biblia": [
    video("dvEYcXjxW2A", "Los manuscritos de Qumrán", "Sacro y Profano (RTVE)", "El hallazgo de los manuscritos del mar Muerto y lo que significan."),
  ],
  "antiguo-y-nuevo-testamento": [
    video("iZimcpW58T0", "La historia de la Biblia, del Antiguo al Nuevo Testamento", "Con David Villar", "Cómo se formaron las dos partes de la Biblia."),
    film("Los diez mandamientos", "Cecil B. DeMille, 1956", "La gran superproducción sobre Moisés y la salida de Egipto."),
  ],
  "el-canon": [
    talk("13ivoom0jZU", "La formación del canon bíblico", "Juan Carlos Ossandón", "Un especialista explica cómo se fijó la lista de libros de la Biblia."),
  ],
  "los-padres-de-la-iglesia": [
    talk("XiFou7sCnoA", "San Agustín, vida apasionante y figura clave del pensamiento occidental", "José Ramón Godino", "Una charla sobre el más influyente de los Padres de la Iglesia."),
  ],
  "la-trinidad": [
    video("ou4B8G1Q5pM", "La Trinidad: qué es y qué significa este icono ruso del siglo XV", "YouTube", "Los detalles del icono de Rubliov."),
  ],
  "dios-y-hombre": [
    video("Mhb1xJcnq-8", "Historia de los concilios: de Éfeso a Calcedonia", "YouTube", "Los grandes debates sobre quién es Jesús en el siglo V."),
  ],
  "debates-y-herejias": [
    talk("G5WBHFVz1nE", "Los evangelios apócrifos de Nag Hammadi. La historia de los gnósticos", "Antonio Piñero", "Qué creían los gnósticos y qué se encontró en Egipto en 1945."),
  ],
  "los-sacramentos": [
    video("SLS543zegjA", "El catecumenado: origen", "YouTube", "Cómo se preparaban los primeros cristianos para el bautismo."),
  ],
  "oracion-y-liturgia": [
    video("aTasCohYEwg", "¿Qué es la Didaché?", "YouTube", "El primer manual de vida cristiana, de hacia el año 100."),
  ],
  // Temporada 6
  "los-primeros-monjes": [
    video("Ra1rXgM4KIA", "Vida de san Antonio Abad, resumen", "YouTube", "El padre de los monjes y la vida en el desierto."),
  ],
  "san-benito": [
    video("IVS4n8MLCJA", "San Benito, un padre para Europa", "YouTube", "La vida de san Benito y la influencia de su regla."),
  ],
  bizancio: [
    video("qM9tLM5HGzM", "La historia tras la basílica de Santa Sofía", "YouTube", "De iglesia a mezquita, museo y otra vez mezquita."),
  ],
  "la-expansion-por-europa": [
    video("ZRPi96WQdgM", "El alfabeto cirílico", "YouTube", "El origen del alfabeto que crearon los discípulos de Cirilo y Metodio."),
  ],
  "los-pueblos-germanicos": [
    video("LXmHZKWQk2E", "Recaredo y la conversión de los visigodos", "YouTube", "El III Concilio de Toledo y la unidad religiosa de Hispania."),
  ],
  "al-andalus": [
    video("q4cB4eTVQI0", "Mozárabes, los cristianos de al-Ándalus", "YouTube", "Cómo vivían los cristianos bajo dominio musulmán."),
    film("El Cid", "Anthony Mann, 1961", "La gran película de Hollywood sobre Rodrigo Díaz de Vivar, rodada en España. Más leyenda que historia."),
  ],
  carlomagno: [
    video("M0GN-3J9AU0", "Los carolingios: Carlomagno, su dinastía y el Imperio carolingio", "YouTube", "La historia de la familia de Carlomagno."),
  ],
  "el-gran-cisma": [
    video("dhhuabW7YcA", "Cisma de Oriente: qué fue y por qué dividió a romanos y ortodoxos", "YouTube", "Las causas de la separación entre católicos y ortodoxos."),
  ],
  "las-cruzadas": [
    video("WrFrg1hRb6c", "¿Qué fueron las cruzadas? Resumen", "YouTube", "Un resumen de dos siglos de cruzadas."),
    film("El reino de los cielos", "Ridley Scott, 2005", "La caída de Jerusalén ante Saladino en 1187. Tiene muchas licencias, pero retrata bien la complejidad de la época."),
  ],
  "las-ordenes-medievales": [
    video("fShFbMkq0RY", "San Francisco de Asís: la historia real del santo que renunció a todo", "YouTube", "La vida de Francisco y el nacimiento de los franciscanos."),
    film("Hermano sol, hermana luna", "Franco Zeffirelli, 1972", "La juventud de Francisco de Asís y su renuncia a todo, con mucha poesía visual."),
  ],
  "el-camino-de-santiago": [
    video("94PWuzL7eKQ", "La historia del Camino de Santiago: el origen, las leyendas y la peregrinación que cambió Europa", "YouTube", "Del hallazgo del sepulcro a los peregrinos de hoy."),
    film("The Way (El camino)", "Emilio Estevez, 2010", "Un padre recorre el Camino de Santiago con las cenizas de su hijo. Con Martin Sheen."),
  ],
  "las-universidades": [
    video("nWK2u2y6dYc", "El origen medieval de las universidades: organización, estudios y vida de los estudiantes", "YouTube", "Cómo funcionaban las primeras universidades."),
  ],
  "la-inquisicion": [
    video("UH-R6cK3wh4", "¿Inquisición española o Inquisiciones? Los orígenes del Santo Oficio", "YouTube", "Las diferencias entre la Inquisición medieval y la española."),
    film("El nombre de la rosa", "Jean-Jacques Annaud, 1986", "Una novela de misterio en un monasterio del siglo XIV, con un inquisidor de por medio. Basada en la novela de Umberto Eco."),
  ],
  "el-cisma-de-occidente": [
    video("wQiidZMGGAA", "La historia del papa Luna: Benedicto XIII y el Cisma de Occidente", "YouTube", "El papa aragonés que nunca renunció."),
  ],
  // Temporada 7
  "el-renacimiento": [
    video("R6ppCQoj5ac", "La Capilla Sixtina: la historia de la bóveda pintada por Miguel Ángel", "YouTube", "Cómo se pintó la bóveda más famosa del mundo."),
    film("El tormento y el éxtasis", "Carol Reed, 1965", "La relación entre Miguel Ángel y el papa Julio II mientras se pintaba la Sixtina."),
  ],
  lutero: [
    video("9MuaYTdXGDQ", "¿Por qué Martín Lutero publica las 95 tesis y cuáles fueron las consecuencias?", "YouTube", "El origen de la Reforma protestante."),
    film("Lutero", "Eric Till, 2003", "La vida de Lutero desde que se hace monje hasta la Confesión de Augsburgo."),
  ],
  "calvino-y-otras-reformas": [
    video("fsnzEVqQEgE", "Historia 101: la Reforma protestante", "National Geographic", "Un resumen breve de la Reforma y sus distintas ramas."),
    film("Un hombre para la eternidad", "Fred Zinnemann, 1966", "Tomás Moro se enfrenta a Enrique VIII por la ruptura con Roma. Ganó seis Óscar."),
  ],
  "trento-y-la-contrarreforma": [
    video("zC7fPFFXo34", "Concilio de Trento (I): ¿Contrarreforma o reforma católica?", "YouTube", "Lo que decidió Trento y el debate sobre cómo llamarlo."),
  ],
  "ignacio-y-los-jesuitas": [
    video("wXDBWXMLCv4", "Ignacio de Loyola: del campo de batalla a la fe que cambió la historia", "YouTube", "La vida de Ignacio y el nacimiento de los jesuitas."),
    film("Ignacio de Loyola", "Paolo Dy, 2016", "La conversión de Ignacio, desde Pamplona hasta Manresa."),
  ],
  "la-mistica-espanola": [
    video("HazC8aHJbhc", "Ruta de Teresa, de la cuna al sepulcro", "YouTube", "Los lugares de santa Teresa, de Ávila a Alba de Tormes."),
    series("Teresa de Jesús", "Josefina Molina, TVE, 1984", "La serie de Televisión Española sobre santa Teresa, con Concha Velasco. Un clásico."),
  ],
  "las-misiones": [
    video("6Jq3xeqOfws", "La controversia de Valladolid: De las Casas contra Sepúlveda", "YouTube", "El gran debate sobre los derechos de los indígenas."),
    film("La misión", "Roland Joffé, 1986", "Las reducciones jesuitas del Paraguay y su final. Con Robert De Niro y Jeremy Irons, y la música de Ennio Morricone."),
    film("Silencio", "Martin Scorsese, 2016", "Dos jesuitas portugueses en el Japón de la persecución. Dura y muy reflexiva."),
  ],
  "las-guerras-de-religion": [
    video("PeVWiYSC3Ko", "Historia de la guerra de los Treinta Años, resumen", "YouTube", "La guerra que arrasó Alemania entre 1618 y 1648."),
  ],
  galileo: [
    video("R3I89msDtUQ", "Galileo ante la Inquisición: el juicio que cambió la historia", "YouTube", "El proceso de 1633, paso a paso."),
  ],
  "la-ilustracion": [
    video("UVmS_dWcWEk", "La Ilustración, resumen", "YouTube", "Las ideas del siglo de las luces."),
  ],
  // Temporada 8
  "la-revolucion-francesa": [
    video("NOKtplTtaRQ", "La constitución civil del clero", "YouTube", "La ley que dividió a la Iglesia de Francia."),
    film("Diálogos de carmelitas", "Philippe Agostini y R. L. Bruckberger, 1960", "La historia de las carmelitas de Compiègne, guillotinadas en 1794."),
  ],
  "el-siglo-xix": [
    video("3GbzKRR36Mc", "La historia de las apariciones de Lourdes", "YouTube", "Bernadette y el nacimiento del santuario."),
    film("La canción de Bernadette", "Henry King, 1943", "La historia de Bernadette Soubirous, que ganó cuatro Óscar.", "lFCulqdpwKU"),
    film("Amazing Grace", "Michael Apted, 2006", "La lucha de William Wilberforce contra la esclavitud en el Parlamento británico."),
  ],
  "rerum-novarum": [
    video("uFGKI0dwCcs", "¿Un papa inventó los sindicatos? Lo que enseña la Rerum novarum de León XIII", "YouTube", "Las ideas principales de la encíclica."),
  ],
  "guerras-y-totalitarismos": [
    video("GCVVLFzCkSs", "Maximiliano Kolbe: el santo que enfrentó a los nazis", "YouTube", "La vida y la muerte de Kolbe en Auschwitz."),
    film("Una vida oculta", "Terrence Malick, 2019", "Un campesino austriaco católico se niega a jurar lealtad a Hitler. Basada en la historia real de Franz Jägerstätter."),
  ],
  "el-vaticano-ii": [
    video("diUjogrlWEA", "¿Qué es el Concilio Vaticano II?", "YouTube", "Qué cambió en la Iglesia con el concilio."),
  ],
  "evangelicos-y-pentecostales": [
    video("EV2YXOncDX8", "Esta es la historia del avivamiento de la calle Azusa (los orígenes del pentecostalismo)", "YouTube", "Cómo nació el pentecostalismo en Los Ángeles en 1906."),
  ],
  "el-sur-global": [
    video("7K5Hh_QOreI", "Monseñor Romero, mártir que fue voz de los pobres en El Salvador", "YouTube", "La vida y la muerte de san Óscar Romero."),
    film("Romero", "John Duigan, 1989", "La transformación del arzobispo Óscar Romero, hasta su asesinato."),
    film("De dioses y hombres", "Xavier Beauvois, 2010", "Los monjes de Tibhirine (Argelia), que decidieron quedarse junto a sus vecinos musulmanes en plena guerra civil."),
  ],
  "el-siglo-xxi": [
    video("gB2onpt9kHQ", "Lo que sabemos de Robert Francis Prevost, el papa León XIV", "France 24 Español", "El perfil del primer papa estadounidense, y peruano de adopción."),
    film("Los dos papas", "Fernando Meirelles, 2019", "Conversaciones imaginadas entre Benedicto XVI y el futuro Francisco. Inventa los diálogos, pero retrata bien a los dos."),
    film("Cónclave", "Edward Berger, 2024", "Un thriller sobre la elección de un papa. Es ficción, pero muestra bien cómo funciona un cónclave."),
  ],
};
