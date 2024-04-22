import React from 'react'
import Hero from '../component/Hero'
import Banner from '../component/Banner'
import Testimonial from '../component/Testimonial'
import PlanTrip from '../component/PlanTrip'
import Download from '../component/Download'
import ChooseUs from '../component/ChooseUs'
import Faq from '../component/faq'


const Home = () => {
  return (
    <>
      <Hero />
      <PlanTrip />
      <Banner/>
      <ChooseUs />
      <Testimonial />
      <Faq />
      <Download />
    </>
  )
}

export default Home
