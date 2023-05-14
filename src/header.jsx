import React , { useState } from 'react'
import './css/header.css'
import './css/mediaqueries.css'

import MyImage from'./assets/WhatsApp Image 2023-05-12 at 17.33.17.jpg';
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function header() {
const [text, setText] = useState("ANKIT MISHRA");
  const [intervalId, setIntervalId] = useState(null);

  function handleMouseOver() {
    let iteration = 0;

    clearInterval(intervalId);

    const newIntervalId = setInterval(() => {
      setText(prevText => {
        return prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
      });

      if (iteration >= text.length) {
        clearInterval(newIntervalId);
      }

      iteration += 1 / 3;
    }, 30);

    setIntervalId(newIntervalId);
  }

  function handleMouseLeave() {
    clearInterval(intervalId);
    setText("HYPERPLEXED");
  }
    


  return (
    <>
    
    <div className='Header--div'>

<div className="paragraph--div">
    <span className='hey'>Hey!</span> <br></br>
    
<span className='intro'>
    "Hello and welcome to my portfolio website! My name is <span className="name" data-value="ANKIT MISHRA"  onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave} >ANKIT MISHRA, </span> and I'm a student learning web development, designing and developing beautiful, user-friendly websites.
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
    </>
  )
}

export default header