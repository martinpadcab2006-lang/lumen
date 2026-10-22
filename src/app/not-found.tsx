import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-20 sm:px-6">
      <h1 className="text-5xl font-extrabold tracking-tight">Esta página no existe</h1>
      <p className="mt-4 text-lg text-piedra">
        Puede que el enlace esté mal escrito o que la página se haya movido. Desde el inicio puedes llegar a todo.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-sm bg-tinta px-5 py-2.5 font-bold text-niebla">
        Ir al inicio
      </Link>
    </div>
  );
}
