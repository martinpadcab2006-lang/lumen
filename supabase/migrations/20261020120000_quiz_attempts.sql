-- Resultados anónimos del quiz: sirven para saber qué preguntas cuestan más.
-- No guarda datos personales. Cualquiera puede añadir un resultado; nadie puede leerlos
-- desde la web (se consultan desde el panel de Supabase).

create table public.quiz_attempts (
  id bigint generated always as identity primary key,
  quiz_id text not null check (char_length(quiz_id) between 1 and 64),
  score integer not null check (score >= 0),
  total integer not null check (total between 1 and 100),
  created_at timestamptz not null default now(),
  constraint quiz_attempts_score_within_total check (score <= total)
);

comment on table public.quiz_attempts is 'Resultados anónimos del quiz de Lumen.';

alter table public.quiz_attempts enable row level security;

create policy "Cualquiera puede guardar un resultado"
  on public.quiz_attempts
  for insert
  to anon, authenticated
  with check (true);

grant insert on public.quiz_attempts to anon, authenticated;
