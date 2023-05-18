import React, { Fragment , useEffect} from "react";
import { useRef } from 'react';
import {AiOutlineBars } from 'react-icons/ai';
import './css/navbar.css'





 function Navbar(){
    let refere = useRef();
   let divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    const handleClicked = () => {
      div.classList.toggle("rotate");
    };

    div.addEventListener("click", handleClicked);

    return () => {
      div.removeEventListener("click", handleClicked);
    };
  }, [divRef]);
    
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
            
        <div className="btns" ref={divRef} >
<AiOutlineBars className="bars" onClick={handleClick} />
        </div>
         
         
        </nav>
       </Fragment>
    )
}
export default Navbar;