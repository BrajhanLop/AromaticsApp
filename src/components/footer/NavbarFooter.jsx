import React from 'react'
import { Link } from 'react-router-dom'

function NavbarFooter() {
  return (
    <section className='d-flex flex-column align-items-center'>
        <nav className='containerNavbarFooter'>
            
           <Link to={'/'}><button type="button" className="liFooter" href="https://getbootstrap.com/docs/5.1/components/buttons/">HOME</button></Link>
           <Link to={'/plantas'}> <button type="button" className="liFooter" href="#">PLANTAS</button></Link>
           <Link to= {'/contacto'}> <button type="button" className="liFooter" href="#">CONTACTO</button></Link>
              {/* <a href="#"><li className='mx-5 liFooter'>HOME</li></a>
              <a href="#"><li className='mx-5 liFooter'>CULTIVO</li></a>
              <a href="#"><li className='mx-5 liFooter'>PLANTAS</li></a>
              <a href="#"><li className='mx-5 liFooter'>CONTACTO</li></a> */}
            
        </nav>
        <p className='text-center copyrightFooter mb-5'>© Copyright 2021. Todos los derechos reservados | Aromática</p>
    </section>
  )
}

export default NavbarFooter