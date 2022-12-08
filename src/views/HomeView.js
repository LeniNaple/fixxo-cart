import React, { useContext } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import { GridProductsContext, FeaturedProductsContext } from '../contexts/contexts'
import ContactSection from '../sections/ContactSection'
import BannerSection from '../sections/BannerSection'
import FlashSaleSectionLeft from '../sections/FlashSaleSectionLeft'
import FlashSaleSectionRight from '../sections/FlashSaleSectionRight'
import ShowcaseSection from '../sections/ShowcaseSection'

const HomeView = () => {
  const gridProducts = useContext(GridProductsContext)
  const featuredProducts = useContext(FeaturedProductsContext)

  window.top.document.title = 'Home / Fixxo'

  return (
    <>
      <div className='homeView'>
        <MainMenuSection /> 
        <ShowcaseSection />
      </div> 
      <ProductGridSection title="Featured Products" items={featuredProducts} />
      <BannerSection />
      <FlashSaleSectionLeft btnTitle="FLASH SALE" items={gridProducts} />
      <FlashSaleSectionRight btnTitle="FLASH SALE" items={gridProducts} />
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default HomeView