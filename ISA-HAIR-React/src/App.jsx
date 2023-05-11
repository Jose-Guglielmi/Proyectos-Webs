import "./App.css";
import Nav from "./Componentes/nav";
import ErrorPagina from "./Componentes/ErrorPagina";
import { Route, Routes, Navigate, HashRouter } from "react-router-dom";
import Productos from "./Componentes/Productos";
import Carrito from "./Componentes/Carrito";

import { useContext, useEffect, useState } from "react";

import { contextProductos } from "./Context/Context";

function App() {
  const context = useContext(contextProductos);
  const [cargaCarrito, setCargaCarrito] = useState(true);

  useEffect(() => {
    setStorage();
    setCargaCarrito(false);
  }, [context.lista.lista_Carrito]);

  const setStorage = () => {
    if (cargaCarrito == false)
      localStorage.setItem(
        "Carrito",
        JSON.stringify(context.lista.lista_Carrito)
      );
  };

  return (
    <div className="App">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<h1>Home</h1>} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="*" element={<ErrorPagina />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
