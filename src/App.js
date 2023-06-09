import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gestiones from "./pages/Gestiones/Gestiones";
import Movimientos from "./pages/Movimientos/Movimientos";
import Profesionales from "./pages/Profesionales/Profesionales";
import Personal from "./pages/Personal/Personal";
import Stock from "./pages/Stock/Stock";
import OrdenCompra from "./pages/OrdenCompra/OrdenCompra";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="gestiones" element={<Gestiones/>} />
        <Route path="movimientos" element={<Movimientos />} />
        <Route path="profesionales" element={<Profesionales />} />
        <Route path="personal" element={<Personal />} />
        <Route path="stock" element={<Stock />} />
        <Route path="ordenCompra" element={<OrdenCompra/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
