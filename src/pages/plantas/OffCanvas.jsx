import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import filtrar from '../../images/filtrar.png';

export default function OffCanvas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button className='d-flex btnFiltro' variant="primary" onClick={handleShow}>
            <img className="imageFiltrar" src={filtrar} alt="aromaticas" />
        </Button>

        <Offcanvas className="containerOffcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="containerOffcanvas">
          
        {/* /* --------cambios empece dos pasos mas atras  ctrl z y ctrl z + ----- */ }
            <section className="filtro">
              <h5 className="textFiltro">Filtrar por:</h5>
              <div className="containerLinea">
                <div className="lineaFiltro"></div>
              </div>
              <h5 className="textFiltro">Época de cultivo</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Primavera / verano</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Otoño / Invierno</p>
              </div>
              <div className="containerLinea">
                <div className="lineaFiltro linea2"></div>
              </div>
              <h5 className="textFiltro">Resistencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Interior</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Exterior</p>
              </div>
              <div className="containerLinea">
                <div className="lineaFiltro linea2"></div>
              </div>
              <h5 className="textFiltro">Exigencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Principiante</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p className="parrafoFiltro">Intermedio</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde finConMargin"></div>
                <p className="parrafoFiltro finConMargin">Experimentado</p>
              </div>
            </section>
          

        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
