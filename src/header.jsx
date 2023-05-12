import React from 'react'
import './css/header.css'
import './css/mediaqueries.css'
import MyImage from'./assets/WhatsApp Image 2023-05-12 at 17.33.17.jpg';
function header() {
  return (
    <div className='Header--div'>

<div className="paragraph--div">
    <span className='hey'>Hey!</span> <br></br>
    
<span className='intro'>
    "Hello and welcome to my portfolio website! My name is <span className="name">ANKIT MISHRA, </span> and I'm a student learning web development,designing and developing beautiful, user-friendly websites.
</span>
<div className="extra">
    <span className='extra-intro'>"I'm Passionate about crafting websites that not only look great but also deliver a seamless user experience."
</span>
</div>

</div>
<div className="myimage">
    <img src={MyImage} alt="my-phot"  />
</div>


    </div>
  )
}

export default header