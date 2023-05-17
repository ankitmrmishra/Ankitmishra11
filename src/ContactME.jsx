import React, { useRef , useEffect } from 'react';
import {SiHashnode} from 'react-icons/si'
import { FaMapMarkedAlt , FaPhoneAlt , FaGlobeAsia} from 'react-icons/fa';
import {AiTwotoneMail} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import './css/contact.css'
export  const ContactUs = () => {

    useEffect(() => {
    const labels = document.querySelectorAll('.form-control label');

    labels.forEach((label) => {
      label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx*100}ms">${letter}</span>`)
        .join('');
    });
  }, []);
 




  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contactme">
        <div className="contact-me-tog">
 <div className="contact-me-section-details">
            <div className="upperpart-contact-me">
 <h1 className="contactme--title">
                CONTACT ME
            </h1>
            <span className="dec-contact-me">
                We're open for any suggestion or just to have a chat
            </span>
            </div>
            <div className="lower-part-contact-me">
                <div className="details-contact-me">
<FaMapMarkedAlt/> <span>
   <span className="adr">Address:</span>Mahajidiya, Birdpur no. 8, Siddhartnagar, Utter Pradesh
</span>
                </div>
                <div className="details-contact-me">
<FaPhoneAlt/> <span>
    <span className="adr">Phone:</span>(+91)8437153991
</span>
                </div>
                <div className="details-contact-me">
<AiTwotoneMail/> <span>
    <span className="adr">Email:</span>ankitmrmishra1118@gmail.com
</span>
                </div>
                {/* <div className="details-contact-me">
<FaGlobeAsia/> <span>
    <span className="adr">Website:</span>ankitmrmishra1118@gmail.com
</span>
                </div> */}
                {/* <div className="details-contact-me">
<GrMapLocation/> <span>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
</span>
                </div> */}
            </div>
           

        </div>
  <div className="container">
        <h1>SEND A MESSAGE</h1>
        <form>
            <div className="form-control" >
                <input type="text" required />
                <label>Name</label>
            </div>
            <div className="form-control" >
                <input type="email" required />
                <label>Email</label>
            </div>
              <div className="form-control"  >
                <input type="text" required />
                <label>Subject</label>
            </div>
            <div className="form-control">
                <textarea name="" id="" cols="30" rows="4"></textarea>
            </div>

            <button className="btn">SUBMIT </button>
        </form>

       
    </div>
    </div>
        </div>
       
  
  );
};