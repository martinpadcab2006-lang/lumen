import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

/**
 * Zona Profesores: una sola contraseña compartida, guardada en Vercel como TEACHER_PASSWORD.
 * Tras entrar, se guarda en una cookie una huella de la contraseña (no la contraseña),
 * así que si se cambia la contraseña en Vercel, todos tienen que volver a entrar.
 */
export const TEACHER_COOKIE = "lumen-profesores";

const fingerprint = (password: string): string => createHash("sha256").update(`lumen-profesores:${password}`).digest("hex");

const sameText = (a: string, b: string): boolean => {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
};

export const teacherPasswordConfigured = (): boolean => Boolean(process.env.TEACHER_PASSWORD);

export const isCorrectPassword = (attempt: string): boolean => {
  const password = process.env.TEACHER_PASSWORD;
  return Boolean(password) && sameText(fingerprint(attempt), fingerprint(password ?? ""));
};

export const teacherCookieValue = (): string => fingerprint(process.env.TEACHER_PASSWORD ?? "");

/** Se lee la cookie antes que la contraseña para que todo esto ocurra al visitar la página, no al compilar. */
export const hasTeacherAccess = async (): Promise<boolean> => {
  const value = (await cookies()).get(TEACHER_COOKIE)?.value;
  const password = process.env.TEACHER_PASSWORD;
  return Boolean(password) && value !== undefined && sameText(value, fingerprint(password ?? ""));
};
