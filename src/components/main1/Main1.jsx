import axios from "axios";
import React, { useEffect, useState } from "react";
import imgMain from "../../images/IMG_Hero.png";
import imgwid from "../../images/Vector.png";

const Main1 = () => {
const [time, settime] = useState(new Date().toLocaleTimeString().substring(0,5))

setInterval(()=>{
settime(new Date().toLocaleTimeString().substring(0,5))
},60000)

const [climatedata, setclimatedata] = useState({})

  useEffect(()=>{

    function success(pos) {
      var crd = pos.coords;
    
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
  
      axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=cfbabd5a23db066ab174c9347f775332`)
      .then(res => setclimatedata(res.data))
  
    }
    
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
      
    navigator.geolocation.getCurrentPosition(success, error);

    
  },[])
 
  console.log(climatedata.weather?.[0].icon);
  return (
    <div className="container pb-3">
      <div className="row">
        <div className="col-5">
          <div className="pe-5">
            <h2 className="text-title pb-1">
              Una guía completa para introducirte al mundo de hierbas aromáticas{" "}
            </h2>
            <p className="text pb-1 pe-3">
              Te damos la bienvenida al sitio que te ayudará a comenzar a
              plantar aromáticas en el balcón de tu hogar
            </p>
            <button className="button px-3 py-1 rounded border-0">
              COMENZAR
            </button>
          </div>
        </div>
        <div className="col-7">
          <img className="main-img img-fluid" src={imgMain} alt="" />

          <div className="d-flex justify-content-end">
            <div className="row flot">
              <div className="col-6 d-flex justify-content-center align-items-center">
                <div>
                <p className="city mb-0 mt-1 text-center">{climatedata.name}</p>
                <p className="time mb-0">{time}</p>
                </div>
              </div>
              <div className="col-6 text-center py-2">
                <img className="img-fluid mt-2" src={imgwid} alt="" />
                <p className="temp mb-0 mt-1">{(Number(climatedata.main?.temp) - 273.15).toFixed(0)} C°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main1;
