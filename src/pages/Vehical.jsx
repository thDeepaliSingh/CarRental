import React from 'react'
import HeroPage from '../component/HeroPage'
import Bookbanner from '../component/Bookbanner'
import Car1 from "../assets/cars-big/audi-box.png";
import Car2 from "../assets/cars-big/golf6-box.png";
import Car3 from "../assets/cars-big/toyota-box.png";
import Car4 from "../assets/cars-big/bmw-box.png";
import Car5 from "../assets/cars-big/benz-box.png";
import Car6 from "../assets/cars-big/passat-box.png";
import { Link } from 'react-router-dom';
// import { TbCar , TbPhoneCall, IconStar} from "react-icons/tb";

import Navbar from '../component/Navbar'

import Footer from '../component/Footer'

const Vehical = () => {
  const item = [
    {img: Car1, company: 'Audi', Model: 'Audi A1', rating: '5', price: '$45', pt:'Gasoline', transportation: 'Manual'},
    {img: Car2, company: 'VW', Model: 'Golf 6', rating: '4', price: '$37', pt:'Diesel', transportation: 'Manual'},
    {img: Car3, company: 'Camry', Model: 'Toyota', rating: '5', price: '$30', pt:'Hybrid', transportation: 'Automatic'},
    {img: Car4, company: 'Modern Line', Model: 'BMW 320', rating: '4', price: '$20', pt:'Diesel', transportation: 'Manual'},
    {img: Car5, company: 'Benz GLK', Model: 'Mercedes', rating: '4', price: '$55', pt:'Diesel', transportation: 'Manual'},
    {img: Car6, company: 'CC', Model: 'VW Passat', rating: '4.5', price: '$30', pt:'Gasoline', transportation: 'Automatic'}
  ]
  return (
    <>
          <Navbar />
      <section className="model-page">
        <HeroPage name = "Vehical Model"/>
          <div className="container">
            <div className="model-container">
              {
                item.map((item, id) => (
                  <div key={id} className="model-container__box">
                    <div className="model-container__box__image">
                      <img src={item.img} alt={`Model ${id}`} />
                    </div>
                      <div className="model-container__box__desc">
                        <div className="model-container__box__desc__name-price">
                          <div className="model-container__box__desc__name-price__name">
                            <p>{item.Model}</p>
                            <span>
                              PPPPP
                              {/* <IconStar />
                              <IconStar />
                              <IconStar />
                              <IconStar />
                              <IconStar /> */}
                            </span>
                          </div>
                          <div className="model-container__box__desc__name-price__price">
                            <h4>{item.price}</h4>
                            <p>per day</p>
                          </div>
                        </div>
                          <div className="model-container__box__desc__name-price__detail">
                            <span>
                              p &nbsp; {item.company}
                            </span>
                            <span style={{ textAlign: "right" }}>
                              {item.rating}/5 &nbsp; p
                            </span>
                            <span>
                              p &nbsp; {item.transportation}
                            </span>
                            <span style={{ textAlign: "right" }}>
                            {item.pt} &nbsp; p
                            </span>
                          </div>
                          <div className="model-container__box__desc__name-price__btn">
                            <Link onClick={window.scrollTo(0 , 0)} to="/">Book Ride</Link>
                          </div>
                        
                      </div>
                    
                  </div>
                ))
              }

            </div>
          </div>
        <Bookbanner />
                      <Footer/>
      </section>
    </>
    
  )
}

export default Vehical
