import type { Metadata } from "next";

// Colegios, Profesores, el quiz de clase y Universidad siguen funcionando en su dirección,
// pero mientras se terminan no aparecen en el menú, la portada ni Google.
// Para enseñarlos al público basta con poner esto en true.
export const schoolSectionsVisible = false;

export const hiddenSectionMetadata: Metadata = schoolSectionsVisible ? {} : { robots: { index: false, follow: false } };
