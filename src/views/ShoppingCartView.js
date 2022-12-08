import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import { NavLink } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'


const ShoppingCartView = () => {

  window.top.document.title = 'Shopping-Cart / Fixxo'

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Shopping Cart" />
      <h1 className='d-flex justify-content-center'>There is nothing here yet!</h1>
      <NavLink className="menu-link d-flex justify-content-center align-items-center" to="/" end>Home</NavLink>
      <FooterSection />
    </>
  )
}

export default ShoppingCartView

