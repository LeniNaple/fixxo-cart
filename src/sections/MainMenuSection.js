import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const MainMenuSection = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { cartQuantity } = useShoppingCart()
  
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
            <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{cartQuantity}</span>
                <i className="fa-regular fa-bag-shopping" ></i>
            </button>
        </div>
        <button onClick={toggleMenu} className='btn-menu-icon'><i className='fa-regular fa-bars'><span> Menu</span></i></button>
    </nav>

  )
}

export default MainMenuSection