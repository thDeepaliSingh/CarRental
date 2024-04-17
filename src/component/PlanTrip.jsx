import React from 'react'
import Icon1 from '../assets/plan/icon1.png'
import Icon2 from '../assets/plan/icon2.png'
import Icon3 from '../assets/plan/icon3.png'

const PlanTrip = () => {

    const item = [
        {
            img: Icon1,
            heading: 'Select Car',
            para: 'We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs',
        },
        {
            img: Icon2,
            heading: 'Contact Operator',
            para: 'Our knowledgeable and friendly operators are always ready to help with any questions or concerns',
        },
        {
            img: Icon3,
            heading: "Let's Drive",
            para: "Whether you're hitting the open road, we've got you covered with our wide range of cars",
        }
    ]

  return (
    <>
      <section className="trip-section">
        <div className="container">
            <div className="trip-container">
                <div className="trip-container__title">
                    <h3>Plan your trip now</h3>
                    <h2>Quick & easy car rental</h2>
                </div>
                <div className="trip-container__box-container">
                    {
                        item.map((item, id) =>(
                            <div key={id} className="trip-container__box-container__box">
                                <img src={item.img} alt="" />
                                <h3>{item.heading}</h3>
                                <p>{item.para}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </section>

    </>
  )
}

export default PlanTrip
