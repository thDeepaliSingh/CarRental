import React from 'react'
import Bg from '../assets/chooseUs/main.png'
import Icon1 from '../assets/chooseUs/icon1.png'
import Icon2 from '../assets/chooseUs/icon2.png'
import Icon3 from '../assets/chooseUs/icon3.png'
import { Link } from 'react-router-dom'

const ChooseUs = () => {

    const item = [
        {
            img: Icon1,
            h: 'Cross Country Drive',
            p: 'Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.'
        },
        {
            img: Icon2,
            h: 'All Inclusive Pricing',
            p: 'Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.'
        },
        {
            img: Icon3,
            h: 'No Hidden Charges',
            p: 'Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.'
        }
    ]
  return (
    <>
        <section className="choose-section">
            <div className="container">
                <div className="choose-container">
                    <img src={Bg} alt="Car_image" className="choose-container__img" />

                    <div className="choose-container__text">
                        <div className="choose-container__text__left">
                            <h4>Why Choose Us</h4>
                            <h2>Best valued deals you will ever find</h2>
                            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>

                            <Link to="/" onClick={() => window.scrollTo(0, 0)}>Find Details</Link>
                        </div>

                        <div className="choose-container__text__right">
                            {
                                item.map((item, id) => (
                                    <div key={id} className="choose-container__text__right__box">
                                        <img src={item.img} alt={id===0 ? 'car-image' : 'coin-image'} />
                                        <div className="choose-container__text__right__box__text">
                                            <h4>{item.h}</h4>
                                            <p>{item.p}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default ChooseUs
