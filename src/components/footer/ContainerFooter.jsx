import React from 'react'
import NavbarFooter from './NavbarFooter'
import NewsletterForm from './NewsletterForm'
import './styles/style.css'

function ContainerFooter() {
  return (
    <footer className='containerBackground'>
        <NewsletterForm />
        <NavbarFooter />
    </footer>
  )
}

export default ContainerFooter