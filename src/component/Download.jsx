import React from 'react'
import Img1 from '../assets/download/appstore.svg'
import Img2 from '../assets/download/googleapp.svg'
import { Link } from 'react-router-dom'

const Download = () => {
  return (
    <>
        <section className="download-section">
            <div className="container">
                <div className="download-text">
                    <h2>Download our app to get most out of it</h2>
                    <p>
                    Thrown shy denote ten ladies though ask saw. Or by to he goingthink order event music. Incommode so  intention defective at convinced. Led income months itself and houses you.
                    </p>

                    <div className="download-text__btn">
                        <Link to="/" onClick={ () => window.scrollTo(0, 0)}>
                            <img src={Img1} alt="App Store" />
                        </Link>
                        <Link to="/" onClick={ () => window.scrollTo(0, 0)}>
                            <img src={Img2} alt="Play Store" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default Download
