import { Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import NoEncontrado from "./pages/NoEncontrado";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}
