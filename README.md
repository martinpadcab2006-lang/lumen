# Lumen

Web para conocer a fondo el cristianismo: su historia, su fe y su cultura.

Tiene tres puertas, cada una con su forma de contar:

| Sección | Para quién | Enfoque |
| --- | --- | --- |
| **Descubre** (`/descubre`) | Público general, sobre todo desde redes sociales | Histórico y cultural. La historia como una serie, curiosidades con imagen para Instagram/TikTok y quiz rápido |
| **Colegios** (`/colegios`) | Primaria, ESO y Bachillerato | Desde la fe católica |
| **Universidad** (`/universidad`) | Estudiantes universitarios | Histórico y cultural, con más profundidad |

Herramientas comunes: línea del tiempo de las iglesias (inicio), mapa de la expansión (`/mapa`), comparador de iglesias (`/comparador`), fichas de cada iglesia (`/iglesias/...`) y quiz (`/quiz`).

## Tecnología

Next.js 16 + TypeScript + Tailwind CSS 4, Supabase (resultados anónimos del quiz) y Vercel.

## Arrancarlo en tu ordenador

```bash
npm install
cp .env.example .env.local   # y pega la clave publicable de Supabase
npm run dev
```

Abre http://localhost:3000.

## Zona Profesores

Las guías del profesor (`/profesores`) se abren con una sola contraseña compartida. Se guarda en Vercel como variable de entorno `TEACHER_PASSWORD` (en tu ordenador, en `.env.local`). Si se cambia, todos los profesores tienen que volver a entrar.

## Dónde está cada cosa

| Archivo | Qué contiene |
| --- | --- |
| `src/content/history.ts` | La serie de 12 capítulos de historia |
| `src/content/chapters/` | Cada capítulo en su carpeta: `shared.ts` (lugares, imágenes, ilustraciones, personajes, vídeos), un archivo por versión (Descubre, Primaria 1.º–3.º y 4.º–6.º, ESO, Bachillerato, Universidad) y `teacher-guides.ts` (guías del profesor) |
| `src/content/pills.ts` | Las curiosidades de un minuto |
| `src/content/quiz.ts` | Las preguntas del quiz |
| `src/content/churches.ts` | Las fichas de cada iglesia (y el comparador) |
| `src/content/milestones.ts` | Los puntos del mapa |
| `src/content/levels.ts` | Las unidades de Primaria, ESO, Bachillerato y Universidad |
| `supabase/migrations/` | Cambios de la base de datos |

Para añadir o corregir contenido, basta con editar los archivos de `src/content/`.

## Criterios del contenido

- En Descubre y Universidad, lo que viene de la tradición o de la fe se marca como tal («según la tradición», «según los evangelios»).
- Las fechas antiguas llevan «c.» cuando son aproximadas.
- Las cifras de fieles son estimaciones.
- Las ilustraciones de Primaria (`illustrations` en `shared.ts`) muestran un hueco con su descripción hasta que se añade el dibujo en `public/` y se rellena `src`.
- Las obras de arte de dominio público se muestran «como en un museo», con título, autor, fecha y museo.
- Cada vídeo, podcast o película tiene `reviewed: false` hasta que alguien lo comprueba. Para que un vídeo empiece en un minuto concreto, se pone `startAt` en segundos.
