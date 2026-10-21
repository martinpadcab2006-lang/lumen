import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature, mesh } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";
import worldTopology from "world-atlas/countries-110m.json";
import { milestones, type Milestone } from "@/content/milestones";

export const MAP_WIDTH = 960;
const MAP_PADDING = 12;
const ANTARCTICA_ID = "010";

export type ProjectedMilestone = Milestone & { id: string; x: number; y: number };

export type MapGeometry = {
  width: number;
  height: number;
  land: string;
  borders: string;
  milestones: readonly ProjectedMilestone[];
};

type WorldTopology = Topology<{ countries: GeometryCollection; land: GeometryCollection }>;

// El JSON de world-atlas no trae tipos: lo describimos una sola vez aquí.
const world = worldTopology as unknown as WorldTopology;

const roundPathNumbers = (path: string): string => path.replace(/\d+\.\d+/g, (n) => Number(n).toFixed(1));

/** Se ejecuta en el servidor: el cliente solo recibe las rutas SVG ya calculadas. */
export const buildMapGeometry = (): MapGeometry => {
  const allCountries = feature(world, world.objects.countries);
  const countries = {
    ...allCountries,
    features: allCountries.features.filter((country) => country.id !== ANTARCTICA_ID),
  };
  // Se ajusta al ancho y luego se recorta el alto a lo que ocupa la tierra.
  const projection = geoNaturalEarth1().fitWidth(MAP_WIDTH - MAP_PADDING * 2, countries);
  const [[, top], [, bottom]] = geoPath(projection).bounds(countries);
  const [translateX, translateY] = projection.translate();
  projection.translate([translateX + MAP_PADDING, translateY - top + MAP_PADDING]);
  const height = Math.ceil(bottom - top + MAP_PADDING * 2);
  const toPath = geoPath(projection);

  const borders = mesh(
    world,
    world.objects.countries,
    (a, b) => a !== b && a.id !== ANTARCTICA_ID && b.id !== ANTARCTICA_ID,
  );

  return {
    width: MAP_WIDTH,
    height,
    land: roundPathNumbers(toPath(countries) ?? ""),
    borders: roundPathNumbers(toPath(borders) ?? ""),
    milestones: milestones.map((milestone, index) => {
      const [x, y] = projection([milestone.lon, milestone.lat]) ?? [0, 0];
      return { ...milestone, id: `${milestone.branch}-${index}`, x, y };
    }),
  };
};
