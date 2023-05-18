import React, { Fragment , useEffect} from "react";
import { useRef } from 'react';
import {AiOutlineBars } from 'react-icons/ai';
import './css/navbar.css'
import { Link } from "react-scroll";





 function Navbar(){
    let refere = useRef();
   let divRef = useRef(null);

   let div = divRef.current;
    
  function handleClick() {
    let div = divRef.current;
     div.classList.toggle("rotate");
 
    refere.current.classList.toggle("active");
    
  }
  function handleListItemClick() {
    let div = divRef.current;
     div.classList.toggle("rotate");
    refere.current.classList.remove("active");
  }
  
    return(
        <Fragment>
        <nav>
            <div className="left--nav">
                <span className="nav--logo">ANKIT.</span>
                </div>
               
        <div className="navlist">
            <ul className="abs" ref={refere}>
               <li className="li-item"><Link to="home" spy={true} smooth={true} onClick={handleListItemClick} className="li-item">HOME</Link></li>
               <li className="li-item"><Link to="Portfolio" spy={true} smooth={true} offset={-5} duration={500} onClick={handleListItemClick}  className="li-item">PORTFOLIO</Link></li>
              <li className="li-item" > <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}  onClick={handleListItemClick} className="li-item">SKILLS</Link></li>
              <li className="li-item"> <Link to="blogs" spy={true} smooth={true} offset={5} duration={500} onClick={handleListItemClick} className="li-item">BLOGS</Link></li>
             <li className="li-item"> <Link to="contactus" spy={true} smooth={true} offset={-10} duration={500} onClick={handleListItemClick}  className="li-item">CONTACT ME</Link></li>
             
               
               
               
                
      
              
               
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