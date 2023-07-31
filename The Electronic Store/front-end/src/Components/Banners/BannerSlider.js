import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import { Link } from 'react-router-dom'

const BannerSlider = () => {

    const data = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Headphones',
            description: 'Headphones & More',
            link: 'http://localhost:3000/headphones'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
            title: 'Mobiles',
            description: 'Mobiles n More',
            link: 'http://localhost:3000/mobiles'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=868&q=80',
            title: 'Laptops',
            description: 'Laptops & More',
            link: 'http://localhost:3000/laptops'
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='bannerslider'>
            <Slider {...settings} className='bannerslider'>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg'/>
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <Link to={item.link}><button>Shop Now</button></Link>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </Slider>
        </div>
    )
}

export default BannerSlider