import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {

    const addToWishList = (e) => {
        console.log(`${e.target} added to wishlist`)
    }
    const addToCompare = (e) => {
        console.log("Added to wishlist")
    }
    const addToShoppingCart = (e) => {
        console.log("Added to wishlist")
    }



  return (


        <div className="card">
            <div className="card-box">
                <img src={product.imageName} alt="Nothing here..." />
                <div className="card-interaction">
                    <button onClick={addToWishList} className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button onClick={addToCompare} className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={addToShoppingCart} className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>

                <div className="card-quick-view">
                    <NavLink to={`/products/${product.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme-red">
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
                <h2><span>{product.oldPrice}</span> {product.price}</h2>
            </div>
        </div> 

  )
}

export default ProductCard