import React from 'react'
import './styles/style.css'
import msj from '../../images/emailFooter.svg'
import twitter from '../../images/twitterFooter.svg'
import facebookFooter from '../../images/faceboojFooter.svg'

function NewsletterForm() {
  return (
    <>
        <h3 className='text-center my-4 titFooter'>Suscribíte a nuestro Newsletter</h3>
        <form className='d-flex flex-column'>
            <input type="text" className='inputFooter' placeholder='NOMBRE' />
            <input type="email" className='inputFooter' placeholder='EMAIL' />
            <button className='btnFooter'>SUSCRIBITE</button>
        </form>
        <section>
            <img src={msj} alt="" className='mx-2 mt-3' />
            <img src={twitter} alt="" className='mx-2 mt-3' />
            <img src={facebookFooter} alt="" className='mx-2 mt-3' />
        </section>
    </>
  )
}

export default NewsletterForm