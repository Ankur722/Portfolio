import React from 'react';
import "./About.css"
import Header from './Header';
import Footer from './Footer';
import Fade from 'react-reveal/Fade';
import Progress from './Progress';

function About() {
  return (
    <div className="about">
        <Header />
        <Fade top delay={250}>
        <Progress skill="HTML" progress='80' />
        <Progress skill="CSS" progress='70' />
        <Progress skill="Javascript" progress='60' />
        <Progress skill="MongoDB" progress='50' />
        <Progress skill="React" progress='60' />
        </Fade>

        <Fade top delay={600}>
        <a class="btn" href="./Resume_Ankur.pdf"> Download Resume</a>
        </Fade>
        
        <Footer />
    </div>
  )
}

export default About