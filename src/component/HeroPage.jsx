import React from 'react'
import { Link } from 'react-router-dom'

const HeroPage = ({name}) => {
  return (
    <>
    <section className="hero-page">
        <div className="container">
            <div className="hero-page__text">
                <h3>{name}</h3>
                <p><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link> / {name}</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default HeroPage