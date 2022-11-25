import React from 'react';
import '../../components/styles/detallesPlantas.css'

import Albahaca from '../../images/albahaca2.png'
import maceta from '../../images/maceta.svg'
import regadera from '../../images/regadera.svg'
import sol from '../../images/sol.svg'
import abono from '../../images/abono.svg'

const DetallesPlantas = () => {
    return (
        <div className='containerPrincipal'>
            <div className='detalleContainer'>
                <div className='mx-4 imgContenedor'>
                    <img src={Albahaca} alt="" />
                </div>
                <div className='col-11 col-md-5 col-lg-6 mx-1 contenedorInfo'>
                    <h3 className='mb-2 h3detalle'>Albahaca</h3>
                    <p className='infoPlanta'>Plantar albahaca en casa no es para nada difícil. Podes cultivarla desde sus semillas o desde un esqueje, es decir, una rama cortada de otra planta. Luego de ello, solo necesitaremos una ventana donde la planta recibe suficiente sol.
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
                        <span>Cultivo en Otoño/invierno</span>
                        <span>Siembra en primavera/verano</span>
                        <span>Apto interior y exterior</span>
                        <span>Nivel de exigencia intermedio</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetallesPlantas;
