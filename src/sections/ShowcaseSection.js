import React from 'react'
import tempImg1 from "../assets/images/showcase-img-1.svg" 
import tempImg2 from "../assets/images/showcase-img-2.svg"
import { NavLink } from 'react-router-dom'

const ShowcaseSection = () => {
  return (
    <section className="showcase container">
        <div className="img-left"> 
          <img src={tempImg1} alt="showcase-img-1" />
        </div>
        <div className="showcase-body">
            <h1> SALE UP</h1>
            <h1> To 50% Off</h1>
            <h2>Online shopping free home delivery over $100</h2>
            <NavLink to="/products" className="btn-theme-red">
                <div className="line-button-l-1"></div>
                <div className="line-button-l-2"></div>
                <p>SHOP NOW</p>
                <div className="line-button-r-1"></div>
                <div className="line-button-r-2"></div>
            </NavLink>
        </div>
        <div className="img-right"> 
          <img src={tempImg2} alt="showcase-img-2" />
        </div>
    </section>
  )
}

export default ShowcaseSection