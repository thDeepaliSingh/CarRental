import React from 'react'
import heroesbg from '../assets/hero/hero-bg.png'
import maincar from '../assets/hero/main-car.png'

const Hero = () => {
  return (
    <section id='home' className='hero-section__container'>
        <div className="container">
            <img src={heroesbg} alt="hero background" className='hero-bg'/>
            <div className="hero-contant">
                <div className="hero-contant__text">
                    <h4>Plan your trip now</h4>
                    <h1>Save <span className="orange-text">big</span> with our car rental</h1>
                    <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <div className="hero-contant__text__btn">
                        <a href='/' className="hero-contant__text__btn__book-ride">Book Ride</a>
                        <a href='/' className="hero-contant__text__btn__learn-more">Learn More</a>
                    </div>
                </div>
                <img src={maincar} alt="main car" className='hero-contant__main-car'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
