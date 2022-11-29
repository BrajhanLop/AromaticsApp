import React from 'react';
import '../styles/main2.css'

import cultivo from '../../images/cultivo.png'
import abono from '../../images/abono.svg'
import guante from '../../images/guante.svg'
import maceta from '../../images/maceta.svg'
import regadera from '../../images/regadera.svg'
import pala from '../../images/pala.svg'
import tijeras from '../../images/tijeras.svg'





const Main2 = () => {
    return (
        <>
        <div className='container main2Container'>
            <div className='col-11 col-lg-6 col-xl-5  imgContainer'>
                <img src={cultivo} alt="" />
            </div>
            <div className='col-11  col-lg-6 col-xl-5 mx-5 containerInfo'>
                <h3 className='my-4 h3Main2'>Cultivo</h3>
                <p className='info'>Como primera recomendación para comenzar a plantar aromáticas, será tener determinados utensilios que te harán el trabajo más facil. Sugerimos el uso de guantes, macetas grandes y medianas, tierra fértil, pala de mano y regadera. Será opcional, pero muy útil, tener tijeras de poda pequeñas y pulverizadores.</p>
            </div>
                <div className='containerIcons '>
                    <img className='imgIcon' src={maceta} alt="" />
                    <img className='imgIcon' src={pala} alt="" />
                    <img className='imgIcon' src={regadera} alt="" />
                    <img className='imgIcon' src={tijeras} alt="" />
                    <img className='imgIcon' src={guante} alt="" />
                    <img className='imgIcon' src={abono} alt="" />
                </div>
        </div>
       
        </>
    );
}

export default Main2;
