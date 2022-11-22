import React from 'react'

function NavbarFooter() {
  return (
    <div>
        <nav>
            <ul className='d-flex containerNavbarFooter'>
              <li className='mx-5 liFooter'>HOME</li>
              <li className='mx-5 liFooter'>CULTIVO</li>
              <li className='mx-5 liFooter'>PLANTAS</li>
              <li className='mx-5 liFooter'>CONTACTO</li>
            </ul>
        </nav>
        <p className='text-center copyrightFooter'>© Copyright 2021. Todos los derechos reservados | Aromática</p>
    </div>
  )
}

export default NavbarFooter