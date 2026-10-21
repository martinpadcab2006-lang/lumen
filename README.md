# Lumen

Web para conocer a fondo el cristianismo: su historia, su fe y su cultura.

Tiene tres puertas, cada una con su forma de contar:

| Sección | Para quién | Enfoque |
| --- | --- | --- |
| **Curiosos** (`/curiosos`) | Gente que llega desde redes sociales | Histórico y cultural. Historias de un minuto con imagen para Instagram/TikTok y quiz rápido para compartir |
| **Colegios** (`/colegios`) | Primaria, ESO y Bachillerato | Desde la fe cristiana, con lo que comparten las iglesias |
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

## Dónde está cada cosa

| Archivo | Qué contiene |
| --- | --- |
| `src/content/pills.ts` | Las historias de un minuto de Curiosos |
| `src/content/quiz.ts` | Las preguntas del quiz |
| `src/content/churches.ts` | Las fichas de cada iglesia (y el comparador) |
| `src/content/milestones.ts` | Los puntos del mapa |
| `src/content/levels.ts` | Las unidades de Primaria, ESO, Bachillerato y Universidad |
| `supabase/migrations/` | Cambios de la base de datos |

Para añadir o corregir contenido, basta con editar los archivos de `src/content/`.

## Criterios del contenido

- En Curiosos y Universidad, lo que viene de la tradición o de la fe se marca como tal («según la tradición», «según los evangelios»).
- Las fechas antiguas llevan «c.» cuando son aproximadas.
- Las cifras de fieles son estimaciones.
