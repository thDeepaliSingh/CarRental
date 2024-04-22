import React from 'react'
import './style/style.scss'
// import Navbar from './component/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurTeam from './pages/OurTeam'
import TestimonialPage from './pages/TestimonialPage'
import Vehical from './pages/Vehical'
import Footer from './component/Footer'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter([

    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/team',
      element: <OurTeam />
    },
    {
      path: '/testimonials',
      element: <TestimonialPage />
    },
    {
      path: '/models',
      element: <Vehical />
    }
  ]);
  return (
  
      <>
      {/* <Navbar /> */}
      <RouterProvider router={router}/>
      <Footer/>
      </>
  
  )
}

export default App
