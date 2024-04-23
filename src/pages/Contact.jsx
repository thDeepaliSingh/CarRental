import React from 'react'
import HeroPage from '../component/HeroPage'
import Bookbanner from '../component/Bookbanner'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <>
          <Navbar />
      <section className='contact-page'>
        <HeroPage name = "Contact"/>
        <div className="container">
          <div className="contact-div">

            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
                <a href="/">(123) 456-789</a>
                <a href="/">carrental@carmail.com</a>
                <a href="/">India</a>
            </div>

            <div className="contact-div__form">
              <form>
                <label htmlFor="name">
                  Name <b className='orange-text'>*</b>
                </label>
                <input type="text" name='name' id='name' placeholder='E.g: "Joe Shmoe'/>

                <label htmlFor="email">
                  Email <b className='orange-text'>*</b>
                </label>
                <input type="email" name="email" id="email" placeholder='yourmail@example.com'/>

                <label htmlFor="description">Tell us about it <b className='orange-text'>*</b></label>
                <textarea name="description" id='description' placeholder='Write here ...'>
                </textarea>

                <button type='submit'>Send Message</button>
              </form>
            </div>

          </div>
        </div>
        <Bookbanner />
                      <Footer/>
      </section>
    </>
  )
}

export default Contact
