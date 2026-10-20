import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

let client: SupabaseClient | null = null;

/**
 * Devuelve el cliente de Supabase, o null si las variables de entorno no están
 * configuradas. Así la web funciona igual en local sin base de datos.
 */
export const getSupabase = (): SupabaseClient | null => {
  if (!url || !publishableKey) return null;
  client ??= createClient(url, publishableKey, { auth: { persistSession: false } });
  return client;
};

export type QuizAttempt = { quizId: string; score: number; total: number };

export const saveQuizAttempt = async ({ quizId, score, total }: QuizAttempt): Promise<void> => {
  const supabase = getSupabase();
  if (!supabase) return;
  const { error } = await supabase.from("quiz_attempts").insert({ quiz_id: quizId, score, total });
  if (error) console.warn("No se pudo guardar el resultado del quiz:", error.message);
};
