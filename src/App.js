import "./App.css";
import Login from "./pages/Login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import DeliveryPage from "./pages/DeliveryPage/DeliveryPage";
import IncomePage from "./pages/IncomePAge/IncomePage";
import ConsultaRegistro from "./pages/ConsultaRegistro/ConsultaRegistro";
import ConsultaStock from "./pages/ConsultaStock/ConsultaStock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="landing" element={<Landing />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="income" element={<IncomePage />} />
        <Route path="consultaRegistro" element={<ConsultaRegistro />} />
        <Route path="consultaStock" element={<ConsultaStock/>} / >
      </Routes>
    </BrowserRouter>
  );
}

export default App;
