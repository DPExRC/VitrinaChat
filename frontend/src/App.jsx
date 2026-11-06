import { useEffect, useState } from "react";

export default function App() {
  const [estado, setEstado] = useState("cargando...");

  useEffect(() => {
    fetch("/api/health/")
      .then((r) => r.json())
      .then((d) => setEstado(d.status))
      .catch(() => setEstado("error de conexión"));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <p className="text-xl font-semibold text-slate-800">API: {estado}</p>
    </div>
  );
}
