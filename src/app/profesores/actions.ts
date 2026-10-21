"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { isCorrectPassword, TEACHER_COOKIE, teacherCookieValue } from "@/lib/teacher-access";

/** Solo se vuelve a rutas de la propia Zona Profesores. */
const safeNext = (value: FormDataEntryValue | null): string =>
  typeof value === "string" && value.startsWith("/profesores") && !value.startsWith("//") ? value : "/profesores";

export const enterTeacherZone = async (formData: FormData) => {
  const password = formData.get("password");
  const next = safeNext(formData.get("next"));

  if (typeof password !== "string" || !isCorrectPassword(password)) {
    redirect(`/profesores?error=1&next=${encodeURIComponent(next)}`);
  }

  (await cookies()).set(TEACHER_COOKIE, teacherCookieValue(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 180,
  });
  redirect(next);
};

export const leaveTeacherZone = async () => {
  (await cookies()).delete(TEACHER_COOKIE);
  redirect("/profesores");
};
