import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Portfolio from './Portfolio.jsx'
import Skills from './Skills.jsx'
import Blogs from './Blogs.jsx'
import { render } from 'react-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    <Navbar/>
     <Header/>
   <Portfolio/>
   <Skills/>
   <Blogs/>
    </>


  

)
