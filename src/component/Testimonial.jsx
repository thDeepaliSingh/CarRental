import React from 'react'
import Img1 from '../assets/testimonials/pfp1.jpg'
import Img2 from '../assets/testimonials/pfp2.jpg'

const Testimonial = () => {
  return (
    <>
        <section className="testimonial-section">
            <div className="container">
                <div className="testimonial-container">
                    <div className="testimonial-container__title">
                        <h4>Reviewed by People</h4>
                        <h2>Client's Testimonials</h2>
                        <p>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
                    </div>

                    <div className="all-testimonials">
                        <div className="all-testimonials__box">
                            <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable."</p>

                            <div className="all-testimonials__box__name">
                                <div className="all-testimonials__box__name__profile">
                                    <img src={Img1} alt="user profile" />
                                    <span>
                                        <h4>Parry Hotter</h4>
                                        <p>Belgrade</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="all-testimonials__box">
                            <p>"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"</p>

                            <div className="all-testimonials__box__name">
                                <div className="all-testimonials__box__name__profile">
                                    <img src={Img2} alt="user profile" />
                                    <span>
                                        <h4>Ron Rizzly</h4>
                                        <p>Novi Sad</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Testimonial
