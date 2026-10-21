export const TIMELINE_START = 1;
export const TIMELINE_END = 2025;

/** Formato de año en español: «30 d. C.», «1054». */
export const formatYear = (year: number): string => {
  if (year < 0) return `${Math.abs(year).toLocaleString("es-ES")} a. C.`;
  if (year < 1000) return `${year} d. C.`;
  return String(year);
};

export const formatMilestoneYear = (year: number, approximate: boolean): string =>
  `${approximate ? "c. " : ""}${formatYear(year)}`;

export const yearToRatio = (year: number): number =>
  (year - TIMELINE_START) / (TIMELINE_END - TIMELINE_START);
