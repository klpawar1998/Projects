import React from 'react'
import './HomeCategories.css'
import img1 from '../../Assests/iphone14pro.avif'

const HomeCategories = () => {

  const smallcontainer = [
    {
      id: 1,
      title: 'APPLE',
      image: "https://images.unsplash.com/photo-1621768216002-5ac171876625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=874&q=80",
      description: "Shop the latest Apple products."
    },
    {
      id: 2,
      title: 'bOAT',
      image: "https://www.boat-lifestyle.com/cdn/shop/files/profile-1_2e1d2124-ba4c-43f0-bb83-0e6ee038ff30.png?v=1681111976",
      description: "Shop the latest bOAT products."
    },
    {
      id: 3,
      title: 'SAMSUNG',
      image: "https://images.unsplash.com/photo-1662947995643-0007c2b5ebb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1856&q=80",
      description: "Shop the latest Samsung products."
    },
    {
      id: 4,
      title: 'ASUS',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZ8nMM4eapwE670BibV7DeC1cJUkbrKHljETVwZZNoTsNFMZcM1V3lJDvSTyqdpwRkI8&usqp=CAU",
      description: "Shop the latest Asus products."
    }
  ]

  return (
    <div class="container my-5">
      {
        smallcontainer.map(item => {
          return (
            <div className="box" key={item.id}>
              <div className="imgBx">
                <img src={item.image} />
              </div>
              <div className="content">
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default HomeCategories