import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {GrCaretNext} from 'react-icons/Gr'
import Mycard from './components/card.jsx'
import image1 from './assets/portfolio/3d-business-man-and-woman-working-at-the-table.png'

import image2 from './assets/portfolio/3d-business-man-has-an-idea.png'
import image3 from './assets/portfolio/3d-business-young-woman-working-online.png'
import image4 from './assets/portfolio/casual-life-3d-side-view-of-young-man-wearing-smart-watch-and-holding-book.png'
import image5 from './assets/portfolio/dazzle-artificial-intelligence-powers-sound-data-analysis-and-image-neural-network.png'
import image6 from './assets/portfolio/dazzle-line-task-management.png'
import image7 from './assets/portfolio/demure-man-programs-on-laptop-while-sitting-in-an-armchair-1.png'
// import image8 from './assets/portfolio/juicy-girl-is-working-on-laptop-at-a-remote-job.png'
// import image9 from './assets/portfolio/popularity.png'
// import image10 from './assets/portfolio/sammy-line-workflow.png3d-business-guy-working-on-a-computer-and-shopping-online-1.png'
import {data} from './data.jsx'
import './css/swiper.css'
import './css/portfolio.css'
const Imagecarousel = () => {
    

     var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (


        
        <div className="product-carousel">

<h1 className='title'>
    SHOWCASE
</h1>
<span>  Step into my digital gallery and discover a visual feast of stunning web projects.</span>

           <div className="caro">

           <Slider {...settings} >
                 <Mycard  image={image1} projectName="PROJECT 1" Github={data.Github} LiveLink={data.LiveLink}/>
                <Mycard image={image2} projectName="PROJECT 2" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image3} projectName="PROJECT 3" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image6} projectName="PROJECT 4" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image4} projectName="PROJECT 5" Github={data.Github} LiveLink={data.LiveLink} />
                 <Mycard image={image1} projectName="PROJECT 6" Github={data.Github} LiveLink={data.LiveLink}/>
                <Mycard image={image2} projectName="PROJECT 7" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image3} projectName="PROJECT 8" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image6} projectName="PROJECT 9" Github={data.Github} LiveLink={data.LiveLink} />
                <Mycard image={image4} projectName="PROJECT 10" Github={data.Github} LiveLink={data.LiveLink} />
           </Slider>
        </div>
        </div>
    )
}

export default Imagecarousel