import React from 'react'
import NavbarFooter from './NavbarFooter'
import NewsletterForm from './NewsletterForm'

function ContainerFooter() {
  return (
    <footer className='d-flex flex-column align-items-center containerBackground'>
        <NewsletterForm />
        <NavbarFooter />
    </footer>
  )
}

export default ContainerFooter