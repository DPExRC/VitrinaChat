import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NoEncontrado() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-marca-600">
          Error 404
        </p>
        <h1 className="mt-6 text-5xl font-bold tracking-tighter text-neutral-950">
          Página no{" "}
          <span className="font-serif font-normal italic text-marca-700">
            encontrada.
          </span>
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block text-sm text-marca-700 underline underline-offset-4"
        >
          Volver al catálogo
        </Link>
      </main>
    </>
  );
}
