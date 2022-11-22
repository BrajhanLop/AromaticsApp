import React from 'react';
import Main2 from './Main2';
import '../styles/main2.css'
import imgFooter from '../../images/IMG_Footer.jpg'

const ContainerMain2 = () => {
    return (
        <>
        <div className='container-fluid'>
            <Main2/>
        </div>
        <div>
            <img style={{width:'100%'}} src={imgFooter} alt="" />
        </div>
        </>
    );
}

export default ContainerMain2;
