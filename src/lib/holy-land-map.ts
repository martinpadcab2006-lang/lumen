import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import type { Feature, LineString, Polygon } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import countriesTopology from "world-atlas/countries-10m.json";
import mediumTopology from "world-atlas/countries-50m.json";
import type { Place } from "@/content/chapter-types";

const WIDTH = 420;
const HEIGHT = 620;

/** Las escalas de mapa de la serie: de la tierra de Jesús al mundo entero. */
export type MapRegion = "tierra-santa" | "mediterraneo" | "europa" | "peninsula" | "mundo";

const MED_WIDTH = 640;
const MED_HEIGHT = 400;

const MED_BOUNDS: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [-10, 29],
        [-10, 48],
        [46, 48],
        [46, 29],
        [-10, 29],
      ],
    ],
  },
};

const box = (west: number, south: number, east: number, north: number): Feature<Polygon> => ({
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [west, south],
        [west, north],
        [east, north],
        [east, south],
        [west, south],
      ],
    ],
  },
});

const EUROPE_WIDTH = 640;
const EUROPE_HEIGHT = 470;
const EUROPE_BOUNDS = box(-11, 29, 46, 58);

const EUROPE_REGIONS: readonly Place[] = [
  { name: "Iberia", lat: 40.2, lon: -4 },
  { name: "Francia", lat: 47.5, lon: 2.6 },
  { name: "Italia", lat: 42.6, lon: 12.8 },
  { name: "Germania", lat: 51.3, lon: 10.5 },
  { name: "Britania", lat: 52.6, lon: -1.6 },
  { name: "Anatolia", lat: 39, lon: 32 },
  { name: "Egipto", lat: 29.8, lon: 29.5 },
  { name: "África", lat: 31.5, lon: 8 },
];

const PENINSULA_WIDTH = 640;
const PENINSULA_HEIGHT = 540;
const PENINSULA_BOUNDS = box(-10, 35.5, 4, 44.5);

const WORLD_WIDTH = 640;
const WORLD_HEIGHT = 330;
/** Más de 180° de ancho: un rectángulo esférico daría la vuelta por el otro lado, así que se encuadran sus esquinas. */
const WORLD_BOUNDS: GeoPermissibleObjects = {
  type: "MultiPoint",
  coordinates: [
    [-125, -45],
    [-125, 62],
    [150, 62],
    [150, -45],
  ],
};

const WORLD_REGIONS: readonly Place[] = [
  { name: "América", lat: 2, lon: -62 },
  { name: "Europa", lat: 52, lon: 18 },
  { name: "África", lat: 6, lon: 20 },
  { name: "Asia", lat: 47, lon: 90 },
];

const MED_REGIONS: readonly Place[] = [
  { name: "Hispania", lat: 40.2, lon: -4 },
  { name: "Galia", lat: 46.5, lon: 2.5 },
  { name: "Italia", lat: 42.6, lon: 12.8 },
  { name: "Grecia", lat: 39.6, lon: 21.8 },
  { name: "Asia Menor", lat: 39, lon: 32 },
  { name: "Egipto", lat: 29.8, lon: 29.5 },
  { name: "África", lat: 31.5, lon: 8 },
];

/** Recuadro de la tierra de Jesús: del sur del mar Muerto al norte de Galilea. */
const BOUNDS: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [34.25, 30.95],
        [34.25, 33.35],
        [36.15, 33.35],
        [36.15, 30.95],
        [34.25, 30.95],
      ],
    ],
  },
};

/** Contornos aproximados, suficientes para orientarse a esta escala. */
const SEA_OF_GALILEE: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [35.52, 32.88],
        [35.56, 32.9],
        [35.62, 32.86],
        [35.65, 32.8],
        [35.63, 32.72],
        [35.59, 32.7],
        [35.54, 32.74],
        [35.51, 32.81],
        [35.52, 32.88],
      ],
    ],
  },
};

const DEAD_SEA: Feature<Polygon> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "Polygon",
    coordinates: [
      [
        [35.5, 31.77],
        [35.56, 31.76],
        [35.59, 31.62],
        [35.6, 31.45],
        [35.57, 31.25],
        [35.5, 31.05],
        [35.43, 31.1],
        [35.39, 31.3],
        [35.41, 31.5],
        [35.46, 31.68],
        [35.5, 31.77],
      ],
    ],
  },
};

const JORDAN_RIVER: Feature<LineString> = {
  type: "Feature",
  properties: {},
  geometry: {
    type: "LineString",
    coordinates: [
      [35.59, 32.7],
      [35.58, 32.55],
      [35.56, 32.35],
      [35.55, 32.15],
      [35.55, 31.95],
      [35.53, 31.77],
    ],
  },
};

const REGIONS: readonly Place[] = [
  { name: "Galilea", lat: 32.93, lon: 35.22 },
  { name: "Samaria", lat: 32.25, lon: 35.13 },
  { name: "Judea", lat: 31.55, lon: 34.98 },
  { name: "Perea", lat: 31.95, lon: 35.78 },
  { name: "Decápolis", lat: 32.55, lon: 35.88 },
];

export type ProjectedPlace = { id: string; name: string; x: number; y: number };

export type HolyLandMap = {
  width: number;
  height: number;
  land: string;
  galilee: string;
  deadSea: string;
  jordan: string;
  regions: readonly { name: string; x: number; y: number }[];
  sea: { x: number; y: number };
  seaName: string;
  ariaLabel: string;
  /** En los mapas grandes los nombres se pisan: solo se escribe el del lugar activo. */
  labelOnlyActive: boolean;
  places: readonly ProjectedPlace[];
};

type CountriesTopology = Topology<{ countries: GeometryCollection<{ name: string }> }>;
const world = countriesTopology as unknown as CountriesTopology;
const mediumWorld = mediumTopology as unknown as CountriesTopology;

/**
 * Países actuales que cubren la zona. Se dibujan juntos, sin fronteras, como una sola
 * tierra: las fronteras de hoy no existían en el siglo I. (El contorno «land» de
 * world-atlas a esta escala da la vuelta mal y rellena también el mar.)
 */
const REGION_COUNTRIES = new Set(["Israel", "Palestine", "Jordan", "Lebanon", "Syria", "Egypt"]);

const round = (path: string | null): string => (path ?? "").replace(/\d+\.\d+/g, (n) => Number(n).toFixed(1));

/** Se calcula en el servidor: al navegador solo llegan las rutas SVG. */
export const buildHolyLandMap = (places: Readonly<Record<string, Place>>, region: MapRegion = "tierra-santa"): HolyLandMap => {
  if (region === "mediterraneo")
    return buildWideMap(places, {
      width: MED_WIDTH,
      height: MED_HEIGHT,
      bounds: MED_BOUNDS,
      regions: MED_REGIONS,
      sea: { lon: 18, lat: 34.6 },
      seaName: "Mare Nostrum",
      ariaLabel: "Mapa del Mediterráneo en época romana",
    });
  if (region === "europa")
    return buildWideMap(places, {
      width: EUROPE_WIDTH,
      height: EUROPE_HEIGHT,
      bounds: EUROPE_BOUNDS,
      regions: EUROPE_REGIONS,
      sea: { lon: 18, lat: 34.6 },
      seaName: "Mar Mediterráneo",
      ariaLabel: "Mapa de Europa y el Mediterráneo en la Edad Media",
    });
  if (region === "peninsula")
    return buildWideMap(places, {
      width: PENINSULA_WIDTH,
      height: PENINSULA_HEIGHT,
      bounds: PENINSULA_BOUNDS,
      regions: [],
      sea: { lon: 1.6, lat: 37.6 },
      seaName: "Mar Mediterráneo",
      ariaLabel: "Mapa de la península ibérica",
    });
  if (region === "mundo")
    return buildWideMap(places, {
      width: WORLD_WIDTH,
      height: WORLD_HEIGHT,
      bounds: WORLD_BOUNDS,
      regions: WORLD_REGIONS,
      sea: { lon: -38, lat: 22 },
      seaName: "Océano Atlántico",
      ariaLabel: "Mapa del mundo",
    });
  return buildHolyLand(places);
};

type WideMapConfig = {
  width: number;
  height: number;
  bounds: GeoPermissibleObjects;
  regions: readonly Place[];
  sea: { lon: number; lat: number };
  seaName: string;
  ariaLabel: string;
};

/** Mapas de gran escala: muchos lugares, así que solo se rotula el activo. */
const buildWideMap = (places: Readonly<Record<string, Place>>, config: WideMapConfig): HolyLandMap => {
  const projection = geoMercator().fitSize([config.width, config.height], config.bounds);
  projection.clipExtent([
    [0, 0],
    [config.width, config.height],
  ]);
  const toPath = geoPath(projection);
  const project = (lon: number, lat: number) => {
    const [x, y] = projection([lon, lat]) ?? [0, 0];
    return { x, y };
  };
  return {
    width: config.width,
    height: config.height,
    land: round(toPath(feature(mediumWorld, mediumWorld.objects.countries))),
    galilee: "",
    deadSea: "",
    jordan: "",
    regions: config.regions.map((item) => ({ name: item.name, ...project(item.lon, item.lat) })),
    sea: project(config.sea.lon, config.sea.lat),
    seaName: config.seaName,
    ariaLabel: config.ariaLabel,
    labelOnlyActive: true,
    places: Object.entries(places).map(([id, place]) => ({ id, name: place.name, ...project(place.lon, place.lat) })),
  };
};

const buildHolyLand = (places: Readonly<Record<string, Place>>): HolyLandMap => {
  const projection = geoMercator().fitSize([WIDTH, HEIGHT], BOUNDS);
  projection.clipExtent([
    [0, 0],
    [WIDTH, HEIGHT],
  ]);
  const toPath = geoPath(projection);
  const project = (lon: number, lat: number) => {
    const [x, y] = projection([lon, lat]) ?? [0, 0];
    return { x, y };
  };

  return {
    width: WIDTH,
    height: HEIGHT,
    land: round(
      toPath({
        type: "FeatureCollection",
        features: feature(world, world.objects.countries).features.filter((country) =>
          REGION_COUNTRIES.has(country.properties?.name ?? ""),
        ),
      }),
    ),
    galilee: round(toPath(SEA_OF_GALILEE)),
    deadSea: round(toPath(DEAD_SEA)),
    jordan: round(toPath(JORDAN_RIVER)),
    regions: REGIONS.map((region) => ({ name: region.name, ...project(region.lon, region.lat) })),
    sea: project(34.48, 32.62),
    seaName: "Mar Mediterráneo",
    ariaLabel: "Mapa de Galilea, Samaria y Judea en tiempos de Jesús",
    labelOnlyActive: false,
    places: Object.entries(places).map(([id, place]) => ({ id, name: place.name, ...project(place.lon, place.lat) })),
  };
};
