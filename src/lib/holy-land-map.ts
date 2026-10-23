import { geoMercator, geoPath } from "d3-geo";
import type { Feature, LineString, Polygon } from "geojson";
import { feature } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import countriesTopology from "world-atlas/countries-10m.json";
import mediumTopology from "world-atlas/countries-50m.json";
import type { Place } from "@/content/chapter-types";

const WIDTH = 420;
const HEIGHT = 620;

/** Las dos escalas de mapa de la serie: la tierra de Jesús o todo el Mediterráneo romano. */
export type MapRegion = "tierra-santa" | "mediterraneo";

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
export const buildHolyLandMap = (places: Readonly<Record<string, Place>>, region: MapRegion = "tierra-santa"): HolyLandMap =>
  region === "mediterraneo" ? buildMediterraneanMap(places) : buildHolyLand(places);

const buildMediterraneanMap = (places: Readonly<Record<string, Place>>): HolyLandMap => {
  const projection = geoMercator().fitSize([MED_WIDTH, MED_HEIGHT], MED_BOUNDS);
  projection.clipExtent([
    [0, 0],
    [MED_WIDTH, MED_HEIGHT],
  ]);
  const toPath = geoPath(projection);
  const project = (lon: number, lat: number) => {
    const [x, y] = projection([lon, lat]) ?? [0, 0];
    return { x, y };
  };
  return {
    width: MED_WIDTH,
    height: MED_HEIGHT,
    land: round(toPath(feature(mediumWorld, mediumWorld.objects.countries))),
    galilee: "",
    deadSea: "",
    jordan: "",
    regions: MED_REGIONS.map((item) => ({ name: item.name, ...project(item.lon, item.lat) })),
    sea: project(18, 34.6),
    seaName: "Mare Nostrum",
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
    places: Object.entries(places).map(([id, place]) => ({ id, name: place.name, ...project(place.lon, place.lat) })),
  };
};
