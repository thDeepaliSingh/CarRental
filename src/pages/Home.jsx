import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import Testimonial from '../component/Testimonial'
import PlanTrip from '../component/PlanTrip'
import Download from '../component/Download'
import ChooseUs from '../component/ChooseUs'
import Faq from '../component/faq'
import BookCar from '../component/BookCar'
import CarModel from '../component/CarModel'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />         
      <BookCar />
      <PlanTrip />
      <CarModel />
      <Banner />
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
                    <Footer/>
    </>
  )
}

export default Home
