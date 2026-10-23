import type { HolyLandMap } from "@/lib/holy-land-map";

type HolyLandMapViewProps = {
  map: HolyLandMap;
  activePlace: string | null;
  className?: string;
};

/** Mapa de la tierra de Jesús. El lugar activo se ilumina; los demás quedan de fondo. */
export const HolyLandMapView = ({ map, activePlace, className = "" }: HolyLandMapViewProps) => (
  <svg
    viewBox={`0 0 ${map.width} ${map.height}`}
    className={`block h-auto w-full ${className}`}
    role="img"
    aria-label={map.seaName === "Mare Nostrum" ? "Mapa del Mediterráneo en época romana" : "Mapa de Galilea, Samaria y Judea en tiempos de Jesús"}
  >
    <rect width={map.width} height={map.height} className="fill-lapis-suave" />
    <path d={map.land} className="fill-superficie stroke-superficie" strokeWidth={1.2} />
    {map.jordan && <path d={map.jordan} fill="none" className="stroke-lapis" strokeWidth={1.6} strokeLinecap="round" opacity={0.55} />}
    {map.galilee && <path d={map.galilee} className="fill-lapis-suave stroke-lapis" strokeWidth={0.8} />}
    {map.deadSea && <path d={map.deadSea} className="fill-lapis-suave stroke-lapis" strokeWidth={0.8} />}
    <text x={map.sea.x} y={map.sea.y} textAnchor="middle" className="fill-lapis text-[13px] italic" opacity={0.7}>
      {map.seaName}
    </text>
    {map.regions.map((region) => (
      <text
        key={region.name}
        x={region.x}
        y={region.y}
        textAnchor="middle"
        className="fill-piedra font-display text-[15px] font-semibold"
        letterSpacing={2}
        opacity={0.75}
      >
        {region.name}
      </text>
    ))}
    {map.places.map((place) => {
      const active = place.id === activePlace;
      // En el mapa grande los nombres se pisan: solo se escribe el del lugar activo.
      const showLabel = active || map.seaName !== "Mare Nostrum";
      return (
        <g key={place.id} transform={`translate(${place.x} ${place.y})`}>
          {active && <circle r={18} className="fill-alba motion-safe:animate-ping" opacity={0.35} />}
          <circle r={active ? 7 : 4} className={active ? "fill-alba stroke-tinta" : "fill-tinta"} strokeWidth={active ? 2 : 0} />
          {showLabel && (
          <text
            x={9}
            y={4}
            className={`fill-tinta ${active ? "text-[15px] font-bold" : "text-[12px]"}`}
            paintOrder="stroke"
            stroke="var(--superficie)"
            strokeWidth={3}
          >
            {place.name}
          </text>
          )}
        </g>
      );
    })}
  </svg>
);
