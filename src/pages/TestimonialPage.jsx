import React from 'react'
import HeroPage from '../component/HeroPage'
import Bookbanner from '../component/Bookbanner'
import Testimonial from '../component/Testimonial'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const TestimonialPage = () => {
  return (
    <>
          <Navbar />
      <HeroPage name = "Testimonial"/>
      <Testimonial />
      <Bookbanner />
                    <Footer/>
    </>
    
  )
}

export default TestimonialPage
