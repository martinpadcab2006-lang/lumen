export const TIMELINE_START = -2000;
export const TIMELINE_END = 2025;

/** Formato de año en español: «528 a. C.», «610 d. C.», «1492». */
export const formatYear = (year: number): string => {
  if (year < 0) return `${Math.abs(year).toLocaleString("es-ES")} a. C.`;
  if (year < 1000) return `${year} d. C.`;
  return String(year);
};

export const formatMilestoneYear = (year: number, approximate: boolean): string =>
  `${approximate ? "c. " : ""}${formatYear(year)}`;

export const yearToRatio = (year: number): number =>
  (year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START);

export const ratioToYear = (ratio: number): number =>
  Math.round(TIMELINE_START + ratio * (TIMELINE_END - TIMELINE_START));
