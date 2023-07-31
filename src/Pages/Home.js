import React from 'react'
import BannerSlider from '../Components/Banners/BannerSlider'
import HomeCategories from '../Components/Category/HomeCategories'
import FeatuedProducts from '../Components/Product/FeaturedProducts/FeatuedProducts'
import ShopServices from '../Components/ShopServices/ShopServices'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <BannerSlider />
      <HomeCategories/>
      <FeatuedProducts/>
      <ShopServices/>
      <Footer/>
    </div>
  )
}

export default Home