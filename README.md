# Lumen

Web interactiva para estudiar las religiones del mundo, en clase o por curiosidad. Explica cada tradición desde la historia y la cultura, sin defender ninguna.

Tiene dos partes:

- **Aprende** (`/aprende`), para colegios y universidades: mapa con línea del tiempo, comparador, quiz y fichas de cada religión.
- **Descubre** (`/descubre`), para quien quiere divulgar o simplemente leer: curiosidades, fiestas del año y mitos comparados.

## Tecnología

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Supabase para la base de datos (de momento, resultados anónimos del quiz)
- Desplegado en Vercel

## Arrancarlo en tu ordenador

Necesitas Node.js 20 o superior.

```bash
npm install
cp .env.example .env.local   # y pega la clave publicable de Supabase
npm run dev
```

Abre http://localhost:3000. Sin la clave de Supabase la web funciona igual; solo no guarda los resultados del quiz.

## Dónde está cada cosa

| Carpeta | Qué contiene |
| --- | --- |
| `src/content/` | Todo el contenido: religiones, hitos del mapa, preguntas del quiz, curiosidades y fiestas |
| `src/app/` | Las páginas |
| `src/components/` | Las piezas interactivas (línea del tiempo, mapa, comparador, quiz) |
| `supabase/migrations/` | Los cambios de la base de datos, en SQL |

Para añadir o corregir contenido basta con editar los archivos de `src/content/`.

## Criterios del contenido

- Si algo viene de la tradición de una fe y no de datos históricos, se dice («según la tradición»).
- Las fechas antiguas llevan «c.» cuando son aproximadas.
- Las cifras de seguidores son estimaciones de 2020 (Pew Research Center).
