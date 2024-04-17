import React from 'react'
import HeroPage from '../component/HeroPage'
import Bookbanner from '../component/Bookbanner'
import Image1 from '../assets/team/1.png'
import Image2 from '../assets/team/2.png'
import Image3 from '../assets/team/3.png'
import Image4 from '../assets/team/4.png'
import Image5 from '../assets/team/5.png'
import Image6 from '../assets/team/6.png'

const OurTeam = () => {

  const team = [
    {img: Image1, name: 'Kesh', post: 'Salesman'},
    {img: Image2, name: 'Luv', post: 'Business Owner'},
    {img: Image3, name: 'Preet', post: 'Photographer'},
    {img: Image4, name: 'Prai', post: 'Car Detailist'},
    {img: Image5, name: 'Neo', post: 'Mechanic'},
    {img: Image6, name: 'Kim', post: 'Menager'}
  ]
  return (
    <>
      <section className="team-page">
        <HeroPage name = "Our Team"/>
        <div className="container">
          <div className="team-container">
            {
              team.map((team, id) => (
                <div key={id} className="team-container__box">
                  <div className="team-container__box__img-div">
                    <img src={team.img} alt="team profile" />
                  </div>
                  <div className="team-container__box__description">
                    <h3>{team.name}</h3>
                    <p>{team.post}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <Bookbanner />
      </section>
    </>
    
  )
}

export default OurTeam
