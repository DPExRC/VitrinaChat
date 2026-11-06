import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2 font-bold text-marca-900">
          <span className="text-marca-400">M</span>
          Mercado
        </Link>
        <Link
          to="/login"
          className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
        >
          Ingresar
        </Link>
      </div>
    </header>
  );
}
