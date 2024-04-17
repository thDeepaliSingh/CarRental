import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

const navbar = () => {

  const hamHandler = () =>{
    document.getElementsByClassName('nav__ham__sticks').classList.toggle('close');
  }
  return (
    <>
      <header className="nav-section">
        <div className="nav">
          <div className="nav__logo">
            <img src={Logo} alt="Car Rental" />
          </div>

          <nav className="nav__link">
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                Home
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                About
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                Vehical Models
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                Testimonials
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                Our Team
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={window.scrollTo(0,0)}>
                Contact
              </a>
            </div>
          </nav>

          <div className="nav__button">
              <a href="#" className='nav__button__sign-in' onClick={window.scrollTo(0,0)}>
                Sign In
              </a>
              <a href="#" className='nav__button__register' onClick={window.scrollTo(0,0)}>
                Register
              </a>
          </div>
        
        {/* Hamburgur */}

        <div className="nav__ham" onClick={hamHandler}>
          <div className="nav__ham__sticks"></div>
          <div className="nav__ham__sticks"></div>
          <div className="nav__ham__sticks"></div>
        </div>
        
        </div>
      </header>
    </>
  )
}

export default navbar
