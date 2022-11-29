import React from "react";
import { Route, Routes } from "react-router-dom";
import ContainerFooter from "../components/footer/ContainerFooter";
import NavbarApp from "../components/Navbar/Navbar-App";
import Contacto from "../pages/contacto/Contacto";
import Home from "../pages/home/Home";
import Plantas from "../pages/plantas/Plantas";


const AromaticasRoutes = () => {
  return (
    <>
      {/* <NavbarApp/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plantas" element={<Plantas />} />
        <Route path="/contacto" element={<Contacto />} />
        {/* Agregar mas rutas */}
      </Routes>
      <ContainerFooter/>
    </>
  );
};

export default AromaticasRoutes;
