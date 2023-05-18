import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import Navbar from './navbar.jsx'
import Header from './header.jsx'
import Portfolio from './Portfolio.jsx'
import Skills from './Skills.jsx'
import Blogs from './Blogs.jsx'
import { ContactUs } from './ContactME.jsx'
import Footer from './footer.jsx'
import { render } from 'react-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <>
    

   
      <Navbar/>
      
     <Header/>
   <Portfolio/>
   <Skills/>
   <Blogs/>
   <ContactUs/>
   <Footer/>
    </>


  

)
