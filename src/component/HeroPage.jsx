import React from 'react'

const HeroPage = ({name}) => {
  return (
    <>
    <section className="hero-page">
        <div className="container">
            <div className="hero-page__text">
                <h3>{name}</h3>
                <p><a href="#">Home</a> / {name}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroPage