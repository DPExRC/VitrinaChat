import { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { categorias, productos } from "../data/productos";

export default function Inicio() {
  const [categoria, setCategoria] = useState("Todos");

  const visibles =
    categoria === "Todos"
      ? productos
      : productos.filter((p) => p.categoria === categoria);

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-neutral-200">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-marca-600">
              La vitrina de negocios con historia
            </p>
            <h1 className="mt-6 text-6xl font-bold tracking-tighter text-neutral-950">
              Productos únicos.
              <span className="block font-serif font-normal italic tracking-tight text-marca-700">
                Negocios reales.
              </span>
            </h1>
            <p className="mt-6 max-w-md text-neutral-600">
              Objetos hechos con intención, elegidos para acompañar la vida
              cotidiana.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-marca-600">
                Colección
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-neutral-950">
                Descubre algo especial
              </h2>
            </div>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filtrar por categoría"
            >
              {categorias.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-pressed={c === categoria}
                  onClick={() => setCategoria(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                    c === categoria
                      ? "border-neutral-900 text-neutral-900"
                      : "border-neutral-300 text-neutral-600 hover:border-neutral-500"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibles.map((producto) => (
              <ProductCard key={producto.id} producto={producto} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
