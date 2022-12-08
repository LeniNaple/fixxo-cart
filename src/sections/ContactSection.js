import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section className="destination-buttons">
        <div className="container">
            <div className="support-buttons">
                <NavLink className="white-ball" to="/support"><i className="fa-regular fa-phone"></i></NavLink>
                <h1>Customer Support</h1>
                <p>Village did removed enjoyed</p>
                <p>explain talking.</p>
            </div>
            <div className="support-buttons">
                <NavLink className="white-ball" to="/shoppingcart"><i className="fa-regular fa-credit-card"></i></NavLink>
                <h1>Secured Payment</h1>
                <p>Village did removed enjoyed</p>
                <p>explain talking.</p>
            </div>
            <div className="support-buttons">
                <NavLink className="white-ball" to="/support"><i className="fa-regular fa-truck"></i></NavLink>
                <h1>Free Home Delivery</h1>
                <p>Village did removed enjoyed</p>
                <p>explain talking.</p>
            </div>
            <div className="support-buttons">
                <NavLink className="white-ball" to="/support"><i className="fa-regular fa-truck"></i></NavLink>
                <h1>30 Day Reuters</h1>
                <p>Village did removed enjoyed</p>
                <p>explain talking.</p>
            </div>

        </div>
    </section>
  )
}

export default ContactSection