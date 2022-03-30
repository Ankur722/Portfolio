import React from 'react';
import "./Footer.css";
import Fade from 'react-reveal/Fade';


function Footer() {
  return (
    <div class="footer-padding">
        <div class="footer">
          <Fade bottom delay={2600}>
            <p>Made by Ankur Patel</p>
          </Fade>
        </div>
  </div>
  )
}

export default Footer