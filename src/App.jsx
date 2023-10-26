import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login  } from "./pages/Login/Login";
import { Gestiones } from "./pages/Gestiones/Gestiones";
import { Movimientos } from "./pages/Movimientos/Movimientos";
import { Profesionales } from "./pages/Profesionales/Profesionales";
import { Personal } from "./pages/Personal/Personal";
//import { Stock } from "./pages/Stock/Stock";
import { Materiales } from "./pages/Materiales/Materiales";

import { OrdenCompra } from "./pages/OrdenCompra/OrdenCompra";

import { ProtectedRoute } from "./components/ProtectedRoute";


function App() {

  const user = JSON.parse(localStorage.getItem('user'));
	console.log('user en App', user);
	console.log('!!user :',!!user );

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAllowed={ user } />} >
          <Route path="/gestiones" element={<Gestiones />} />
          <Route path="/movimientos" element={ <Movimientos/>} />
          <Route path="/profesionales" element={<Profesionales />} />
          <Route path="/materiales" element={<Materiales />} />
          
          <Route path="/personal" element={ <Personal/>} />
          <Route path="/ordencompra" element={ <OrdenCompra/>} />
        </Route>
        <Route element={<ProtectedRoute
          /*isAllowed={!!user && !!user.role && user.role == 'ADMIN'*/
          isAllowed={!!user && !!user.roles && user.roles.includes('ADMIN')}/>} >
          <Route path="/admin"  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
