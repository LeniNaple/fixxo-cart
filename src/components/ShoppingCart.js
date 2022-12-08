import React from 'react'
import ShoppingCartItem from './ShoppingCartItem'
import { useShoppingCart } from '../contexts/ShoppingCartContext'

const ShoppingCart = () => {
  const { cartItems } = useShoppingCart()

  return (
    <>
        <div className="offcanvas offcanvas-end shopping-cart" tabindex="-1" id="shoppingCart" aria-labelledby="shoppingCartLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="shoppingCartLabel">Shopping Cart</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              {

                cartItems.map(item => (<ShoppingCartItem key={item.articleNumber} item={item} />))

              }
            </div>
        </div>
    </>
  )
}

export default ShoppingCart