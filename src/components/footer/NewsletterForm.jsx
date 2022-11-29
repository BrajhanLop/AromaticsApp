import React from 'react'

import msj from '../../images/emailFooter.svg'
import twitter from '../../images/twitterFooter.svg'
import facebookFooter from '../../images/faceboojFooter.svg'

function NewsletterForm() {
  return (
    <section className='d-flex flex-column align-items-center'>
        <h3 className='text-center mt-5 mb-3 titFooter'>Suscribíte a nuestro Newsletter</h3>
        <form className='d-flex flex-column align-items-center w-100'>
            <input type="text" className='inputFooter' placeholder='NOMBRE' />
            <input type="email" className='inputFooter' placeholder='EMAIL' />
            <button className='btnFooter'>SUSCRIBITE</button>
        </form>
        <section className='my-3'>
            <img src={msj} alt="" className='mx-2 mt-3' />
            <img src={twitter} alt="" className='mx-2 mt-3' />
            <img src={facebookFooter} alt="" className='mx-2 mt-3' />
        </section>
    </section>
  )
}

export default NewsletterForm