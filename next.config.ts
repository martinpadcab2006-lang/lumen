import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Las imágenes para redes se dibujan en el servidor y necesitan estas fuentes.
  outputFileTracingIncludes: {
    "/descubre/**": ["./src/assets/fonts/**/*"],
  },
  redirects: async () => [
    { source: "/aprende", destination: "/colegios", permanent: true },
    { source: "/aprende/mapa", destination: "/mapa", permanent: true },
    { source: "/aprende/comparador", destination: "/comparador", permanent: true },
    { source: "/aprende/quiz", destination: "/quiz", permanent: true },
    { source: "/curiosos", destination: "/descubre", permanent: true },
    { source: "/curiosos/quiz", destination: "/descubre/quiz", permanent: true },
    { source: "/curiosos/quiz/resultado/:puntos", destination: "/descubre/quiz/resultado/:puntos", permanent: true },
    { source: "/curiosos/:slug", destination: "/descubre/curiosidades/:slug", permanent: true },
    { source: "/religiones/:slug", destination: "/comparador", permanent: true },
    { source: "/colegios/primaria", destination: "/colegios", permanent: true },
    { source: "/colegios/primaria/historia/:capitulo", destination: "/colegios", permanent: false },
    { source: "/colegios/eso", destination: "/colegios/eso-1", permanent: false },
    { source: "/colegios/eso/:rest*", destination: "/colegios/eso-1", permanent: false },
    { source: "/colegios/:nivel/historia/:capitulo", destination: "/colegios/:nivel", permanent: false },
    // Los capítulos pasaron a ser episodios de la serie por temporadas.
    { source: "/descubre/historia/el-mundo-de-jesus", destination: "/descubre/historia/los-origenes/el-mundo-de-jesus", permanent: true },
  ],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
