import React from 'react'

const ProductDetails = ({product}) => {
  return (
    <div>
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>{product.imageName}</div>
    </div>
  )
}

export default ProductDetails