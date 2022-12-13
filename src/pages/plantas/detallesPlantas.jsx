import React, { useEffect, useState } from 'react';
import '../../components/styles/detallesPlantas.css'

import Albahaca from '../../images/albahaca2.png'
import maceta from '../../images/maceta.svg'
import regadera from '../../images/regadera.svg'
import sol from '../../images/sol.svg'
import abono from '../../images/abono.svg'
import  {useParams}  from 'react-router-dom'
import axios from 'axios';

const DetallesPlantas = () => {
    const [plants, setplants] = useState([]);
    const { id } = useParams()
    

useEffect(()=> {
axios.get('https://api.jsonbin.io/v3/b/63893d17003d6444ce6057d2')
.then((res) => setplants(res.data.record.data.getPlants));
window.scrollTo(0, 0)
}, [])


const resulPlants = () => {
   const plantsfind = plants.find(plant => plant.id == id)

   console.log(plantsfind);
    return(
        <div className='detalleContainer'>
                <div className='mx-4 imgContenedor'>
                    <img
                    className='imgDetalle'
                     src={plantsfind?.imagen} alt="" />
                </div>
                <div className='col-11 col-md-5 col-lg-6 mx-1 contenedorInfo'>
                    <h3 className='mb-2 h3detalle'>{plantsfind?.nombre}</h3>
                    <p className='infoPlanta'>{plantsfind?.descripcion1} {plantsfind?.descripcion2}
                    </p>
                </div>
                <div className='contIcons '>
                    <div className='icon'>
                        <img className='imgIcon' src={sol} alt="" />
                        <img className='imgIcon' src={maceta} alt="" />
                        <img className='imgIcon' src={abono} alt="" />
                        <img className='imgIcon' src={regadera} alt="" />
                    </div>
                    <div className='infoIconos'>
                        <span>{plantsfind?.cultivo}</span>
                        <span>{plantsfind?.siembra}</span>
                        <span>{plantsfind?.apto}</span>
                        <span>{plantsfind?.exigencia}</span>
                    </div>
                </div>
            </div>
    )
}
    

    return (
        <div className='containerPrincipal'>
            {resulPlants()}
           
        </div>
    );
}

export default DetallesPlantas;
