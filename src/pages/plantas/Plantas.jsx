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
  const [checkedPrim, setCheckedPrim] = useState(false);
  const [checkedOto, setCheckedOto] = useState(false);
  const [checkedInt, setCheckedInt] = useState(false);
  const [checkedExt, setCheckedExt] = useState(false);
  const [checkedPrinc, setCheckedPrinc] = useState(false);
  const [checkedInterm, setCheckedInterm] = useState(false);
  const [checkedAvan, setCheckedAvan] = useState(false);


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

  const checkPrimavera = () =>{
    if (checkedPrim==false && checkedOto==false){
      setCheckedPrim(true)
      return
    }
    if (checkedPrim==false && checkedOto==true){
      setCheckedPrim(true)
      setCheckedOto(false)
     
      return
    }
    if (checkedPrim==true && checkedOto==false){
      setCheckedPrim(false)
      setdata(plants)
      return
    }

  }
  const checkOtoño = () =>{
    if (checkedPrim==false && checkedOto==false){
      setCheckedOto(true)
      return
    }
    if(checkedOto==false && checkedPrim==true){
      setCheckedPrim(false)
      setCheckedOto(true)
      return
    }
    if(checkedOto==true && checkedPrim==false){
      setCheckedOto(false)
      setdata(plants)
      return
    }

  }
  const checkInterior = () =>{
    if (checkedInt==false && checkedExt==false){
      setCheckedInt(true)
      return
    }
    if (checkedInt==false && checkedExt==true){
      setCheckedInt(true)
      setCheckedExt(false)
     
      return
    }
    if (checkedInt==true && checkedExt==false){
      setCheckedInt(false)
      setdata(plants)
      return
    }

  }
  const checkExterior = () =>{
    if (checkedInt==false && checkedExt==false){
      setCheckedExt(true)
      return
    }
    if(checkedExt==false && checkedInt==true){
      setCheckedInt(false)
      setCheckedExt(true)
      return
    }
    if(checkedExt==true && checkedInt==false){
      setCheckedExt(false)
      setdata(plants)
      return
    }

  }
  const checkPrincipiante = () =>{
    if (checkedPrinc==false && checkedInterm==false && checkedAvan==false){
      setCheckedPrinc(true)
      return
    }
    if(checkedPrinc==false && (checkedInterm==true || checkedAvan == true)){
      setCheckedInterm(false)
      setCheckedAvan(false)
      setCheckedPrinc(true)
      return
    }
    if(checkedPrinc==true && (checkedInterm==false && checkedAvan == false)){
      setCheckedPrinc(false)
      setdata(plants)
      return
    }
  }

  const checkIntermedio = () =>{
    if (checkedPrinc==false && checkedInterm==false && checkedAvan==false){
      setCheckedInterm(true)
      return
    }
    if(checkedInterm==false && (checkedPrinc==true || checkedAvan == true)){
      setCheckedPrinc(false)
      setCheckedAvan(false)
      setCheckedInterm(true)
      return
    }
    if(checkedInterm==true && (checkedPrinc==false && checkedAvan == false)){
      setCheckedInterm(false)
      setdata(plants)
      return
    }
  }

  const checkAvanzado = () =>{
    if (checkedPrinc==false && checkedInterm==false && checkedAvan==false){
      setCheckedAvan(true)
      return
    }
    if(checkedAvan==false && (checkedInterm==true || checkedPrinc == true)){
      setCheckedInterm(false)
      setCheckedAvan(true)
      setCheckedPrinc(false)
      return
    }
    if(checkedAvan==true && (checkedInterm==false && checkedPrinc == false)){
      setCheckedAvan(false)
      setdata(plants)
      return
    }
  }
  




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
                  type="checkbox"
                  className="w-100 h-100 d-none res"
                  name="cultivo"
                 checked = {checkedPrim}
                 onChange = {checkPrimavera}
                  
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
                  type="checkbox"
                  className="w-100 h-100 d-none res"
                  name="cultivo"
                  checked = {checkedOto}
                  onChange = {checkOtoño}
      
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
                  type="checkbox"
                  className="w-100 h-100 d-none res"
                  checked = {checkedInt}
                  onChange = {checkInterior}
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
                  type="checkbox"
                  className="w-100 h-100 d-none res"
                  checked = {checkedExt}
                  onChange = {checkExterior}
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
                  type="checkbox"
                  name="nivel"
                  className="w-100 h-100 d-none res"
                  checked = {checkedPrinc}
                  onChange = {checkPrincipiante}
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
                  type="checkbox"
                  className="w-100 h-100 d-none res"
                  checked = {checkedInterm}
                  onChange = {checkIntermedio}
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
                  type="checkbox"
                  name="nivel"
                  className="w-100 h-100 d-none res"
                  checked = {checkedAvan}
                  onChange = {checkAvanzado}
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
