import React from 'react'
import BannerLeft from '../components/BannerLeft'
import BannerRight from '../components/BannerRight'

const BannerSection = () => {
  return (

    <section className="banners container">
{/* Maybe add if title === left show banner left... or something */}
        <BannerLeft btnTitle="SHOP NOW" />
        <BannerRight btnTitle="FLASH SALE" />
    </section>
  )
}

export default BannerSection