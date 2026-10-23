/** Un papa de la lista oficial, numerado como en el Anuario Pontificio y Wikipedia. */
export type Pope = {
  number: number;
  name: string;
  /** Año de inicio, para ordenar y filtrar por siglo. */
  start: number;
  /** Año de fin (o null si sigue en el cargo). */
  end: number | null;
  /** Fechas aproximadas (los primeros siglos). */
  approximate?: boolean;
  origin: string;
  summary: string;
  saint?: boolean;
  /** Español o latinoamericano. */
  hispanic?: boolean;
  /** Uno de los imprescindibles. */
  featured?: boolean;
};

type Flags = Pick<Pope, "approximate" | "saint" | "hispanic" | "featured">;

export const pope = (
  number: number,
  name: string,
  start: number,
  end: number | null,
  origin: string,
  summary: string,
  flags: Flags = {},
): Pope => ({ number, name, start, end, origin, summary, ...flags });

export const S: Flags = { saint: true };
export const SA: Flags = { saint: true, approximate: true };
export const SF: Flags = { saint: true, featured: true };
export const F: Flags = { featured: true };
