import axios from "axios";
import React, { useEffect, useState } from "react";
import imgMain from "../../images/IMG_Hero.png";
import imgwid from "../../images/Vector.png";
import nublado from '../../images/nublado.png'
import mediosoleado from '../../images/mediosoleado.png'
import granizo from '../../images/granizo.png'
import lluvioso from '../../images/lluvioso.png'
import trueno from '../../images/conrayos.png'
import viento from '../../images/viento.png'

const Main1 = () => {
  const [time, settime] = useState(
    new Date().toLocaleTimeString().substring(0, 5)
  );

  setInterval(() => {
    settime(new Date().toLocaleTimeString().substring(0, 5));
  }, 60000);

  const [climatedata, setclimatedata] = useState({});

  useEffect(() => {
    function success(pos) {
      var crd = pos.coords;

      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);

      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=cfbabd5a23db066ab174c9347f775332`
        )
        .then((res) => setclimatedata(res.data));
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

//  console.log(climatedata.weather?.[0].icon);

const selectorIcon = () => {

if (climatedata.weather?.[0].icon=='04n' || climatedata.weather?.[0].icon=='03n') {
  return (
    <img className="img-fluid mt-2 ico" src={nublado} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='01n') {
  return (
    <img className="img-fluid mt-2 ico" src={imgwid} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='02n') {
  return (
    <img className="img-fluid mt-2 ico" src={mediosoleado} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='13n') {
  return (
    <img className="img-fluid mt-2 ico" src={granizo} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='09n' || climatedata.weather?.[0].icon=='10n' ) {
  return (
    <img className="img-fluid mt-2 ico" src={lluvioso} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='11n') {
  return (
    <img className="img-fluid mt-2 ico" src={trueno} alt="" />
  )
}
else if(climatedata.weather?.[0].icon=='50n') {
  return (
    <img className="img-fluid mt-2 ico" src={viento} alt="" />
  )
}


  
}

  return (
    <div className="container pb-3">
      <div className="row">
        <div className="col-12 col-md-6 "> 
          <div className="">
            <h2 className="text-title pb-1 lh-6 mx-3 fs-1">
              Una guía completa para introducirte al mundo de hierbas aromáticas{" "}
            </h2>
            <p className="text pb-1 fs-6 mx-3">
              Te damos la bienvenida al sitio que te ayudará a comenzar a
              plantar aromáticas en el balcón de tu hogar.
            </p>
            <button className="button px-3 py-1 rounded border-0 d-block mx-auto mb-3 d-md-inline-block ms-md-3">
              COMENZAR
            </button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img className="img-fluid" src={imgMain} alt="" />

          <div className="d-flex justify-content-end">
            <div className="row flot">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div>
                  <p className="city mb-0 mt-1 text-center">
                    {climatedata.name}
                  </p>
                  <p className="time mb-0">{time}</p>
                </div>
              </div>
              <div className="col-6 text-center py-2">
                
                {/* <img className="img-fluid mt-2 ico" src={imgwid} alt="" /> */}
                {
                  selectorIcon()
                }
                <p className="temp mb-0 mt-1">
                  {(Number(climatedata.main?.temp) - 273.15).toFixed(0)} C°
                </p>
                {/* {
                  selectorIcon()
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
