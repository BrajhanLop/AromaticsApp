import React from 'react';

import '../styles/navbar.css'



const NavbarApp = () => {
    return (
        <div>
            <nav className='containerNav'>
                <div>
                    <span className='logoNav'>Aromática</span>
                </div>
                    <div className='item'>
                            <span>HOME</span>
                            <span>CULTIVO</span>
                            <span>PLANTAS</span>
                            <span>CONTACTO</span>    
                    </div>
            </nav>
        </div>
    );
}

export default NavbarApp;
