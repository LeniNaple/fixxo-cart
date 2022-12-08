import React from 'react'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'

const ContactsView = () => {

  window.top.document.title = 'Contacts / Fixxo'


  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView