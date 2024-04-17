import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo/logo.png'

const navbar = () => {
const [state, setState] = useState(false)
  const hamHandler = () =>{
    setState(!state);
  }
  return (
    <>
      <header className="nav-section">
        <div className="nav">
          <div className="nav__logo">
            <img src={Logo} alt="Car Rental" />
          </div>

          <nav className={`nav__link ${state ? 'close' : ''}`} >
            <div className="link">
              <a href="#"  onClick={() => { window.scrollTo(0, 0); hamHandler(); }}>
                Home
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                About
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Vehical Models
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Testimonials
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Our Team
              </a>
            </div>
            <div className="link">
              <a href="#" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
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
          <div className={`nav__ham__sticks ${state ? 'close' : ''}`}></div>
          <div className={`nav__ham__sticks ${state ? 'close' : ''}`}></div>
          <div className={`nav__ham__sticks ${state ? 'close' : ''}`}></div>
        </div>
        
        </div>
      </header>
    </>
  )
}

export default navbar
