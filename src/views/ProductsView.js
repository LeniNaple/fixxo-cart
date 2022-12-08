import React, { useEffect } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import { useProductContext } from '../contexts/ProductContext'

const ProductsView = () => {
  const {products, getProducts} = useProductContext()

  window.top.document.title = 'Products / Fixxo'

  useEffect (() => {
    getProducts()
  }, [])

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Products" />
      <ProductGridSection title="Products" items={products} />
      <FooterSection />
    </>
  )
}


export default ProductsView