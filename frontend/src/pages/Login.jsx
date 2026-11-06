import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { iniciarSesion } from "../services/auth";

const claseCampo =
  "mt-2 w-full rounded-xl border border-neutral-300 px-4 py-3 text-neutral-900 outline-none transition-colors focus:border-marca-600 focus:ring-2 focus:ring-marca-600/20";

export default function Login() {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  async function manejarEnvio(evento) {
    evento.preventDefault();
    setError("");

    if (!correo.trim() || !clave) {
      setError("Completa tu correo y tu contraseña.");
      return;
    }

    setCargando(true);
    try {
      await iniciarSesion(correo.trim(), clave);
      navigate("/"); // cambiar a la ruta del panel cuando exista
    } catch (err) {
      setError(err.message || "No se pudo iniciar sesión.");
    } finally {
      setCargando(false);
    }
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-sm px-6 py-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-marca-600">
          Acceso para vendedores
        </p>
        <h1 className="mt-6 text-4xl font-bold tracking-tighter text-neutral-950">
          Ingresa a tu{" "}
          <span className="font-serif font-normal italic tracking-tight text-marca-700">
            vitrina.
          </span>
        </h1>

        <form onSubmit={manejarEnvio} className="mt-10 space-y-5" noValidate>
          <div>
            <label
              htmlFor="correo"
              className="text-sm font-medium text-neutral-800"
            >
              Correo electrónico
            </label>
            <input
              id="correo"
              type="email"
              autoComplete="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              className={claseCampo}
            />
          </div>

          <div>
            <label
              htmlFor="clave"
              className="text-sm font-medium text-neutral-800"
            >
              Contraseña
            </label>
            <input
              id="clave"
              type="password"
              autoComplete="current-password"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              className={claseCampo}
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={cargando}
            className="w-full rounded-full bg-marca-900 py-3 font-semibold text-white transition-colors hover:bg-marca-700 disabled:opacity-60"
          >
            {cargando ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <Link
          to="/"
          className="mt-8 inline-block text-sm text-neutral-600 underline underline-offset-4 hover:text-neutral-900"
        >
          Volver al catálogo
        </Link>
      </main>
    </>
  );
}
