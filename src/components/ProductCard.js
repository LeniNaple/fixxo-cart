import React from 'react'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/CurrencyFormatter'

const ProductCard = ({product, item}) => {

    const { incrementQuantity } = useShoppingCart()



  return (


        <div className="card">
            <div className="card-box">
                <img src={product.imageName} alt="Nothing here..." />
                <div className="card-interaction">
                    <button className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity ({articleNumber: product.articleNumber, product: product})} className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <div className="card-quick-view">
                    <NavLink to={`/products/${product.articleNumber}`} className="btn-theme-red">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                    </NavLink>
                </div>
            </div>

            <div className="card-text">
                <p>{product.category}</p>
                <h1>{product.name}</h1>
                <div className="card-stars" >  
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </div>
                <h2><span>{product.oldPrice}</span>{currencyFormatter(product.price)}</h2>
            </div>
        </div> 

  )
}

export default ProductCard