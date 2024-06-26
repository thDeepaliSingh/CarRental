import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="footer-content">
                    <ul className="footer-content__1">
                        <li><span>CAR</span> Rental</li>
                        <li>We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.</li>
                        <li><a href="tel:+123456789">(123) -456-789</a></li>
                        <li><a href="mailto:carrental@gmail.com">carrental@gmail.com</a></li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>Company</li>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>New York</Link></li>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Career</Link></li>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Mobile</Link></li>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Blog</Link></li>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>How we work</Link></li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>WORKING HOURS</li>
                        <li>Mon - Fri: 9:00AM - 9:00PM</li>
                        <li>Sat: 9:00AM - 7:00PM</li>
                        <li>Sun: Closed</li>
                    </ul>
                    <ul className="footer-content__2">
                        <li>SUBSCRIPTION</li>
                        <li>Subscribe your Email address for latest news & updates.</li>
                        <li>
                            <input type="email" placeholder='Enter Email Address' />
                        </li>
                        <li>
                            <button className='submit-button'>Submit</button>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer
