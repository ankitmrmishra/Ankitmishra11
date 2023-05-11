import React from "react";
import { useRef } from 'react';
import {AiOutlineBars } from 'react-icons/ai';
import './css/navbar.css'





 function navbar(){
    let refere = useRef();
    let refer = useRef();
    function rotate(){
        refer.current.classList.toggle("bars-rotate");
    }
  function handleClick() {
    
 
    refere.current.classList.toggle("active");
    
  }
  
    return(
        <>
        <nav>
            <div className="left--nav">
                <img className="nav--logo"  src="https://download.logo.wine/logo/Ableton/Ableton-Logo.wine.png"  />
                </div>
               
        <div className="navlist">
            <ul className="abs" ref={refere}>
                <li>Live</li>
                <li>Push</li>
                <li>Note</li>
                <li>Link</li>
                <li>Shop</li>
                <li>Packs</li>
                <li>Help</li>
                <li className="more">More+</li>
                <AiOutlineBars className="bars bars-rotate" onClick={handleClick}  />
            </ul>
             
        </div>
            
        
         <AiOutlineBars className="bars" onClick={handleClick}  />
         
        </nav>
        </>
    )
}
export default navbar;