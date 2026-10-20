export type QuizOption = { id: string; text: string };

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: readonly QuizOption[];
  correctId: string;
  explanation: string;
};

export const quizQuestions: readonly QuizQuestion[] = [
  {
    id: "q1",
    prompt: "¿Qué religión tiene más seguidores hoy en el mundo?",
    options: [
      { id: "a", text: "El islam" },
      { id: "b", text: "El cristianismo" },
      { id: "c", text: "El hinduismo" },
      { id: "d", text: "El budismo" },
    ],
    correctId: "b",
    explanation:
      "El cristianismo ronda los 2.300 millones de seguidores, seguido muy de cerca por el islam, con unos 2.000 millones.",
  },
  {
    id: "q2",
    prompt: "¿En qué ciudad empieza el calendario islámico?",
    options: [
      { id: "a", text: "La Meca" },
      { id: "b", text: "Jerusalén" },
      { id: "c", text: "Medina" },
      { id: "d", text: "Damasco" },
    ],
    correctId: "c",
    explanation:
      "El calendario cuenta los años desde la Hégira, la emigración de Mahoma de La Meca a Medina en el año 622.",
  },
  {
    id: "q3",
    prompt: "¿Qué significa «Buda»?",
    options: [
      { id: "a", text: "El sabio" },
      { id: "b", text: "El despierto" },
      { id: "c", text: "El maestro" },
      { id: "d", text: "El iluminado por Dios" },
    ],
    correctId: "b",
    explanation:
      "Buda es un título, no un nombre: significa «el que ha despertado». Su nombre era Siddhartha Gautama.",
  },
  {
    id: "q4",
    prompt: "En las gurdwaras sijes se ofrece comida gratis a cualquier persona. ¿Cómo se llama esa cocina comunitaria?",
    options: [
      { id: "a", text: "Langar" },
      { id: "b", text: "Seva" },
      { id: "c", text: "Khalsa" },
      { id: "d", text: "Mandir" },
    ],
    correctId: "a",
    explanation:
      "El langar sirve comida a todo el que llega, sin importar su religión ni su origen. Todos se sientan juntos, como iguales.",
  },
  {
    id: "q5",
    prompt: "¿Cuál de estas religiones no tiene un fundador conocido?",
    options: [
      { id: "a", text: "El sijismo" },
      { id: "b", text: "El budismo" },
      { id: "c", text: "El hinduismo" },
      { id: "d", text: "El confucianismo" },
    ],
    correctId: "c",
    explanation:
      "El hinduismo surge poco a poco de la tradición védica y de muchas corrientes locales. No hay una persona que lo fundara.",
  },
  {
    id: "q6",
    prompt: "¿Qué celebra la fiesta judía de Pésaj?",
    options: [
      { id: "a", text: "La creación del mundo" },
      { id: "b", text: "La salida de Egipto" },
      { id: "c", text: "La construcción del Templo" },
      { id: "d", text: "El año nuevo" },
    ],
    correctId: "b",
    explanation:
      "Pésaj recuerda la liberación de la esclavitud en Egipto narrada en el libro del Éxodo. El año nuevo judío es Rosh Hashaná.",
  },
  {
    id: "q7",
    prompt: "¿Qué idea del taoísmo invita a actuar sin forzar las cosas?",
    options: [
      { id: "a", text: "Karma" },
      { id: "b", text: "Wu wei" },
      { id: "c", text: "Nirvana" },
      { id: "d", text: "Tawhid" },
    ],
    correctId: "b",
    explanation:
      "Wu wei significa algo así como «no acción»: dejar que las cosas fluyan con el Tao en vez de imponerse a ellas.",
  },
  {
    id: "q8",
    prompt: "¿Qué reino fue el primero en adoptar el cristianismo como religión oficial?",
    options: [
      { id: "a", text: "El Imperio romano" },
      { id: "b", text: "Etiopía" },
      { id: "c", text: "Armenia" },
      { id: "d", text: "Irlanda" },
    ],
    correctId: "c",
    explanation:
      "Armenia lo hizo hacia el año 301, unas décadas antes que el reino etíope de Aksum y casi un siglo antes que Roma.",
  },
  {
    id: "q9",
    prompt: "¿Qué palabra hindú se ha vuelto común en español para hablar de «lo que va, vuelve»?",
    options: [
      { id: "a", text: "Mantra" },
      { id: "b", text: "Karma" },
      { id: "c", text: "Gurú" },
      { id: "d", text: "Avatar" },
    ],
    correctId: "b",
    explanation:
      "Karma significa «acción». En el hinduismo y el budismo, las acciones tienen consecuencias que marcan las vidas futuras.",
  },
  {
    id: "q10",
    prompt: "¿Qué tienen en común el judaísmo, el cristianismo y el islam?",
    options: [
      { id: "a", text: "El mismo libro sagrado" },
      { id: "b", text: "La figura de Abraham" },
      { id: "c", text: "La creencia en la reencarnación" },
      { id: "d", text: "El mismo día de descanso" },
    ],
    correctId: "b",
    explanation:
      "Por eso se las llama religiones abrahámicas. Las tres son monoteístas y reconocen a Abraham como un antepasado en la fe.",
  },
];
