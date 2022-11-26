import React from "react";
import albahaca from "../../images/albahaca-1.svg";
import Card from 'react-bootstrap/Card';
import "./plantas.css";
/* import { BiSearch } from 'react-icons/fa'; */
const Plantas = () => {
  return (
    <>
      <section className="container my-5">
        <div className="row">

          <div className="col-4 containerFiltro">
     
              <h5>Filtrar por:</h5>
              <div className="lineaFiltro"></div>
              <h5>Época de cultivo</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p>Primavera / verano</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p>Otoño / Invierno</p>
              </div>
              <div className="lineaFiltro"></div>
              <h5>Resistencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p>Interior</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p>Exterior</p>
              </div>
              <div className="lineaFiltro"></div>
              <h5>Exigencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <div className="colorVerde"></div>
                <p>Principiante</p>
              </div>
              <div className="itemFiltro">
                <div className="colorVerde"></div>
                <p>Intermedio</p>
              </div>
              <div className="itemFiltro">
                <div className="colorVerde"></div>
                <p>Experimentado</p>
              </div>
      
          </div>

          <div className="col-8 d-flex flex-column align-items-center justify-content-center">
            <h4>¿Con cuál te gustaría comenzar?</h4>
            <input type="text" className="inputFilter" />
            <section className="row row-cols-1 row-cols-md-3 containerCards">

              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
                </Card.Body>
              </Card>
              <Card className="cardPlanta">
                <Card.Img className="planta" variant="top" src={albahaca} />
                <Card.Body>
                  <Card.Title className="text-center">Albahaca</Card.Title>
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
