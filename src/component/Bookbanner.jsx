import React from 'react'
// import { IconPhone } from "@tabler/icons-react";

const Bookbanner = () => {
  return (
    <section className='book-banner'>
        <div className="container">
            <div className="book-banner__text-container">
                <h2>Book a car by getting in touch with us</h2>
                <span className='orange-text'>
                    {/* <IconPhone width={40} height={40} /> */}
                    <h3>(123) 456-7869</h3>
                </span>
                
            </div>
        </div>
      
    </section>
  )
}

export default Bookbanner
