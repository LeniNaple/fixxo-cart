import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)
  
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }


  return (

    <nav className="mainmenu container">
        <div className='logo'>
          <NavLink to="/" end>Fixxo.</NavLink>
        </div>
        <div className={`menu-links ${ !showMenu ? "active-button": "" }`}>
            <NavLink className="menu-link" to="/" end>Home</NavLink>
            <NavLink className="menu-link" to="/Categories" end>Categories</NavLink>
            <NavLink className="menu-link" to="/Products">Products</NavLink>
            <NavLink className="menu-link" to="/Contacts" end>Contacts</NavLink>
        </div>
        <div className="menu-icons">
            <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass" />
            <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare" />
            <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart" />
            <MenuIcon quantity="4" link="/shoppingcart" icon="fa-regular fa-bag-shopping" />
        </div>
        <button onClick={toggleMenu} className='btn-menu-icon'><i className='fa-regular fa-bars'><span> Menu</span></i></button>
    </nav>

  )
}

export default MainMenuSection