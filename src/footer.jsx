import React from 'react'
import {BsTwitter , BsLinkedin , BsInstagram , BsGithub , BsFillHeartFill} from 'react-icons/Bs'
import './css/footer.css'
function footer() {
  return (
    <div>
        <div className="footer">
            <div className="socialmedia">
                <BsTwitter/>
                <BsLinkedin/>
                <BsInstagram/>
                <BsGithub/>
            </div>
            <div className="endingline">
                <span>
                    Made with <BsFillHeartFill className='heart'/> by <span className="myname">ANKIT M.R. MISHRA</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default footer