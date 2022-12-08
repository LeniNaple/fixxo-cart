import React from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'



const ProductsDetailsView = () => {

  window.top.document.title = 'Product / Fixxo'

  const params = useParams()




  return (

    <>
        <MainMenuSection />
        <div className='container mt-5 d-flex justify-content-center'>
            <h1> {params.productName} </h1>
        </div>
        <FooterSection />
    </>

  )
}

export default ProductsDetailsView