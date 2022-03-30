import React from 'react';
import emailjs from '@emailjs/browser';
import Header from './Header';
import Footer from "./Footer";
import "./Contact.css";
import Fade from 'react-reveal/Fade';

function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wqvqbw7', 'template_emjkfrm', e.target, '8Qu4Cp2-Neuzoz_34')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div className="contact">
      <Header />
      <Fade left delay={250}>
      <div className="contact__container">
        <div className="contact__heading">
          <h1>Contact Me</h1>
        </div>
         <div className="contact__form">
          <form onSubmit={sendEmail}>
            <div className="form__fName">
            <label for="fname">Name</label>
            <input type="text" name="name" placeholder=" Your name.." />
            </div>

            <div className="form__lName">
            <label for="lname">G-Email</label>
            <input type="email" name="email" placeholder=" Your email.." />
            </div>

            <div className="form__subject">
            <label for="subject">Subject</label>
            <textarea name="subject" placeholder=" Subject....." rows="4" cols="50" />
            </div>

            <button className="form__btn" type="submit" value="send">Submit</button>
          </form>
        </div> 
      </div>
      </Fade>
      <Footer />
    </div>
  )
}

export default Contact