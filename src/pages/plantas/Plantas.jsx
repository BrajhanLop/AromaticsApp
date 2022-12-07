import React, { useEffect, useState } from "react";
import albahaca from "../../images/albahaca-1.svg";
import Card from "react-bootstrap/Card";
import "./plantas.css";
import OffCanvas from "./OffCanvas";
import axios from "axios";
/* import { BiSearch } from 'react-icons/fa'; */
import { Link } from "react-router-dom";

const Plantas = () => {
  const [plants, setplants] = useState([]);
  const [capture, setcapture] = useState();

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63893d17003d6444ce6057d2")
      .then((res) => setplants(res.data.record.data.getPlants));
  }, []);

  const Capturaeldato = () => {
    const result = plants.filter((pla) =>
      pla.nombre.toLowerCase().includes(capture.toLowerCase())
    );
    return (
      <div>
        {result.map((r) => (
          <Link className="dec" to={`./detalle/${r.id}`} key={r.id}>
            <Card className="cardPlanta">
              <Card.Img className="planta" variant="top" src={r.imagen} />
              <Card.Body className="cardBody">
                <Card.Title className="text-center">{r.nombre}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    );
  };

  // const filtro = () => {
  //   const result = plants.filter((pla) => pla.cultivo.includes("primavera"));
  //   console.log(result);
  // };

  const [data, setdata] = useState([]);

  const habilitacheck = (opcion) => {
    const result = plants.filter(
      (pla) =>
        pla.cultivo.toLowerCase().includes(opcion) ||
        pla.apto.includes(opcion) ||
        pla.exigencia.toLowerCase().includes(opcion)
    );

    setdata([...result]);
   

    render()
 
  };


  const render = () => {
    return (
      <>
      {data.map((r) => (
          <Link className="dec" to={`./detalle/${r.id}`} key={r.id}>
            <Card className="cardPlanta">
              <Card.Img className="planta" variant="top" src={r.imagen} />
              <Card.Body className="cardBody">
                <Card.Title className="text-center">{r.nombre}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </>
    )
  }

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
                <input
                  id="primavera"
                  type="radio"
                  className="w-100 h-100 d-none res"
                  name="cultivo"
                />
                <label
                  htmlFor="primavera"
                  className="colorVerde"
                  onClick={() => habilitacheck("primavera")}
                >
                  <div></div>
                </label>

                <p className="parrafoFiltro">Primavera / verano</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="otono"
                  type="radio"
                  className="w-100 h-100 d-none res"
                  name="cultivo"
                />
                <label
                  htmlFor="otono"
                  className="colorVerde"
                  onClick={() => habilitacheck("otoño")}
                >
                  <div></div>
                </label>

                <p className="parrafoFiltro">Otoño / Invierno</p>
              </div>
              <div className="containerLinea">
                <div className="lineaFiltro linea2"></div>
              </div>
              <h5 className="textFiltro">Resistencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="int"
                  name="resistencia"
                  type="radio"
                  className="w-100 h-100 d-none res"
                />
                <label
                  htmlFor="int"
                  className="colorVerde"
                  onClick={() => habilitacheck("interior")}
                ></label>

                <p className="parrafoFiltro">Interior</p>
              </div>

              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="ext"
                  name="resistencia"
                  type="radio"
                  className="w-100 h-100 d-none res"
                />
                <label
                  htmlFor="ext"
                  className="colorVerde"
                  onClick={() => habilitacheck("exterior")}
                ></label>

                <p className="parrafoFiltro">Exterior</p>
              </div>
              <div className="containerLinea">
                <div className="lineaFiltro linea2"></div>
              </div>
              <h5 className="textFiltro">Exigencia</h5>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="basico"
                  type="radio"
                  name="nivel"
                  className="w-100 h-100 d-none res"
                />
                <label
                  htmlFor="basico"
                  className="colorVerde "
                  onClick={() => habilitacheck("principiante")}
                ></label>

                <p className="parrafoFiltro">Principiante</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="intermedio"
                  name="nivel"
                  type="radio"
                  className="w-100 h-100 d-none res"
                />
                <label
                  htmlFor="intermedio"
                  className="colorVerde"
                  onClick={() => habilitacheck("intermedio")}
                ></label>

                <p className="parrafoFiltro">Intermedio</p>
              </div>
              <div className="d-flex justify-content-start align-items-center">
                <input
                  id="avanzado"
                  type="radio"
                  name="nivel"
                  className="w-100 h-100 d-none res"
                />
                <label
                  htmlFor="avanzado"
                  className="colorVerde finConMargin"
                  onClick={() => habilitacheck("experimentado")}
                ></label>

                <p className="parrafoFiltro finConMargin">Experimentado</p>
              </div>
            </section>
          </div>

          <div className="containerPlants">
            <h4 className="titPlantasFiltro">
              ¿Con cuál te gustaría comenzar?
            </h4>
            <form
              className="w-100"
              onSubmit={(e) => {
                e.preventDefault();
                Capturaeldato;
              }}
            >
              <input
                type="text"
                placeholder="Albahaca..."
                className="inputFilter"
                name="planta"
                onChange={(e) => setcapture(e.target.value)}
              />
            </form>
            <section className="filtroMobile">
              <OffCanvas />
              <p className="textoBtnFiltrar">Filtrar</p>
            </section>

            <section className="row row-cols-1 row-cols-md-3 containerCards">
              {capture? Capturaeldato()
                
                : data.length > 0?
                render()
                :
                plants.map((plant) => (
                    <Link
                      className="dec"
                      to={`./detalle/${plant.id}`}
                      key={plant.id}
                    >
                      <Card className="cardPlanta">
                        <Card.Img
                          className="planta"
                          variant="top"
                          src={plant.imagen}
                        />
                        <Card.Body className="cardBody">
                          <Card.Title className="text-center">
                            {plant.nombre}
                          </Card.Title>
                        </Card.Body>
                      </Card>
                    </Link>
                  ))}
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plantas;
