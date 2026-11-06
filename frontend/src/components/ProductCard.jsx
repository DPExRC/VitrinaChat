import { Canasto, Taza } from "./Ilustraciones";

const ilustraciones = { canasto: Canasto, taza: Taza };

function formatearPrecio(valor) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(valor);
}

export default function ProductCard({ producto }) {
  const Ilustracion = ilustraciones[producto.ilustracion];

  return (
    <article>
      <div
        className={`aspect-[3/2] overflow-hidden rounded-2xl ${producto.fondo}`}
      >
        {producto.imagen ? (
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="h-full w-full object-cover"
          />
        ) : (
          Ilustracion && <Ilustracion />
        )}
      </div>
      <div className="mt-3">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-marca-600">
          {producto.categoria}
        </p>
        <h3 className="mt-1 font-semibold text-neutral-900">
          {producto.nombre}
        </h3>
        <p className="text-neutral-600">{formatearPrecio(producto.precio)}</p>
      </div>
    </article>
  );
}
