import React from 'react'
import './css/Skill.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image1 from './assets/skills/104494_html5_html_icon.png'
import image2 from './assets/skills/317712_code repository_github_repository_resource_icon.png'
import image3 from './assets/skills/1174949_js_react js_logo_react_react native_icon.png'
import image4 from './assets/skills/2993773_git_social media_icon.png'
import image5 from './assets/skills/4375066_logo_sass_icon.png'
import image6 from './assets/skills/7422531_css3_css_file_development_icon.png'
import image7 from './assets/skills/8666135_bootstrap_icon.png'
import image8 from './assets/skills/9035061_logo_javascript_icon.png'
import image9 from './assets/skills/9055799_bxl_tailwind_css_icon.png'

function Skills() {
     var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 100,
      cssEase: "linear",
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1
          }
        }
      ]
    };

   return ( 
    <div className='skills'>
        <h1>SKILL SETS</h1>
        <span className='skills-span'>Let me introduce you with my weapons</span>
       
    
      <div>
       
        <Slider className='slider-slikk' {...settings}>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image1" />
          </div>
          <div>
            <img src={image3} alt="image1" />
          </div>
          <div>
            <img src={image4} alt="image1" />
          </div>
          <div>
            <img src={image5} alt="image1" />
          </div>
          <div>
            <img src={image6} alt="image1" />
          </div>
          <div>
            <img src={image7} alt="image1" />
          </div>
          <div>
            <img src={image8} alt="image1" />
          </div>
          <div>
            <img src={image9} alt="image1" />
          </div>
          
         
        </Slider>
      </div>
    
    </div>
  );
}

export default Skills