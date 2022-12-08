import React from 'react'
import bannerImg2 from "../assets/images/banner-right.svg"
import { NavLink } from 'react-router-dom'


const Banner = ({btnTitle}) => {
  return (
    <>
        <div className="banner-img-right">
            <img src={bannerImg2} alt="#" />
            <div className="banner-text">
                <h1>Let's Be</h1>
                <h1>Conscious</h1>
                <NavLink to="/products" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>{btnTitle}</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </NavLink>
            </div>
        </div>
    </>
  )
}

export default Banner