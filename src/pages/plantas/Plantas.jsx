import React from "react";
import albahaca from "../../images/albahaca-1.svg";
import Card from "react-bootstrap/Card";
import "./plantas.css";
/* import { BiSearch } from 'react-icons/fa'; */
const Plantas = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row">
          <div className="containerFiltro">
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
          </div>

          <div className="containerPlants d-flex flex-column align-items-center justify-content-center">
            <h4 className="titPlantasFiltro">¿Con cuál te gustaría comenzar?</h4>
            <input type="text" placeholder="Albahaca..." className="inputFilter" />
            <section className="row row-cols-1 row-cols-md-3 containerCards">
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body className="cardBody">
                  <Card.Title className="text-center textCardFooter">Albahaca</Card.Title>
                </Card.Body>
              </Card>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plantas;
