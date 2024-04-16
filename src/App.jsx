import React from 'react'
import './style/style.scss'
import Navbar from './component/Navbar'
// import Home from './pages/Home'
import About from './pages/About'
// import Contact from './pages/Contact'
// import OurTeam from './pages/OurTeam'
// import Testimonial from './pages/Testimonial'
// import Vehical from './pages/Vehical'
import Footer from './component/Footer'

const App = () => {
  return (
  
      <>
      <Navbar />
      {/* <Home /> */}
      <About />
      {/* <Contact />
      <OurTeam />
      <Testimonial />
    <Vehical /> */}
    <Footer/>
      </>
  
  )
}

export default App
