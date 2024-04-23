import React from 'react'
import HeroPage from '../component/HeroPage'
import Bookbanner from '../component/Bookbanner'
import PlanTrip from '../component/PlanTrip'
import Main from '../assets/about/about-main.jpg'
import Icon1 from '../assets/about/icon1.png'
import Icon2 from '../assets/about/icon2.png'
import Icon3 from '../assets/about/icon3.png'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'



const About = () => {

  const item = [
    {
      img: Icon1,
      head: '20',
      para: 'Car Types'
    },
    {
      img: Icon2,
      head: '85',
      para: 'Rental Outlets'
    },
    {
      img: Icon3,
      head: '75',
      para: 'Repair Shop'
    }
  ]
  return (
    <>
          <Navbar />
      <section className="about-page">

        <HeroPage name = "About"/>

          <div className="container">
            <div className="about-main">
              <img src={Main} alt="About banner" className="about-main__image" />

              <div className="about-main__text">
                <h3>About Company</h3>
                <h2>You start the engine and your adventure begins</h2>
                <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>

                <div className="about-main__text__icons">
                  {
                    item.map((item, id)=>(
                      <div key={id} className="about-main__text__icons__box">
                        <img src={item.img} alt="icon img" />
                        <span>
                          <h4>{item.head}</h4>
                          <p>{item.para}</p>
                        </span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>

        <PlanTrip />
        <Bookbanner />
                      <Footer/>
      </section>
    </>
  )
}

export default About
