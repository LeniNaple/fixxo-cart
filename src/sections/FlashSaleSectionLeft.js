import React, { useEffect } from 'react'
import ProductGridSection from './ProductGridSection'
import { useProductContext } from '../contexts/ProductContext'
import { NavLink } from 'react-router-dom'

const FlashSaleSectionLeft = ({btnTitle}) => {
    const {flash, getFlash} = useProductContext()

    useEffect (() => {
        getFlash(4)
      }, [])

  return (
    <section className="flash-sale-left container">
        <div className="two-for-left"> 
            <h1>2 FOR USD $29</h1>
            <NavLink to="/products" className="btn-theme-white">
                <div className="line-button-l-1"></div>
                <div className="line-button-l-2"></div>
                <p>{btnTitle}</p>
                <div className="line-button-r-1"></div>
                <div className="line-button-r-2"></div>
            </NavLink>
        </div>
        <div className="two-for-right">
            <ProductGridSection items={flash} />
        </div>
    </section>
  )
}

export default FlashSaleSectionLeft