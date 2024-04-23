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
              <Link to="/"  onClick={() => { window.scrollTo(0, 0); hamHandler(); }}>
                Home
              </Link>
            </div>
            <div className="link">
              <Link to="/about" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                About
              </Link>
            </div>
            <div className="link">
              <Link to="/models" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Vehical Models
              </Link>
            </div>
            <div className="link">
              <Link to="/testimonials" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Testimonials
              </Link>
            </div>
            <div className="link">
              <Link to="/team" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Our Team
              </Link>
            </div>
            <div className="link">
              <Link to="/contact" onClick={ () =>{window.scrollTo(0,0); hamHandler(); }}>
                Contact
              </Link>
            </div>
          </nav>

          <div className="nav__button">
              <Link to="/" className='nav__button__sign-in' onClick={window.scrollTo(0,0)}>
                Sign In
              </Link>
              <Link to="/" className='nav__button__register' onClick={window.scrollTo(0,0)}>
                Register
              </Link>
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
