import React from 'react'
import { NavLink } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'

const NotFoundView = () => {

  window.top.document.title = 'Fixxo'

  return (

    <div>
      <MainMenuSection />
      <h1 style={ { margin: "20px" }} className='d-flex justify-content-center align-items-center'>404 - Page not found</h1>
      <NavLink style={ { margin: "20px" }} className="menu-link d-flex justify-content-center align-items-center" to="/" end>Home</NavLink>
    </div>
  )
}

export default NotFoundView