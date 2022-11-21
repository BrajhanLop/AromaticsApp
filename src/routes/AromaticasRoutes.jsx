import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacto from "../pages/contacto/Contacto";
import Home from "../pages/home/Home";
import Plantas from "../pages/plantas/Plantas";


const AromaticasRoutes = () => {
  return (
    <>
      {/* Colocar aqui el navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Agregar mas rutas */}
      </Routes>
      {/* colocar aqui el footer */}
    </>
  );
};

export default AromaticasRoutes;
