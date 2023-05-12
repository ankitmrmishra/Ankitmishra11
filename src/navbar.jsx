import React, { Fragment } from "react";
import { useRef } from 'react';
import {AiOutlineBars } from 'react-icons/ai';
import './css/navbar.css'





 function Navbar(){
    let refere = useRef();
    
  function handleClick() {
    
 
    refere.current.classList.toggle("active");
    
  }
  
    return(
        <Fragment>
        <nav>
            <div className="left--nav">
                <span className="nav--logo">ANKIT</span>
                </div>
               
        <div className="navlist">
            <ul className="abs" ref={refere}>
                <li className="li-item">PORTFOLIO</li>
                <li className="li-item" >ABOUT</li>
                <li className="li-item">BLOGS</li>
                <li className="li-item">CONTACT ME</li>
      
              
               
            </ul>
             
        </div>
            
        
         <AiOutlineBars className="bars" onClick={handleClick}  />
         
        </nav>
       </Fragment>
    )
}
export default Navbar;