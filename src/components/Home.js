import React from 'react';
import "./Home.css"
import Footer from "./Footer";
import Header from './Header';
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <div>
      <div className="image">
        <Header />
          <div>
            <Fade left duration={2500}>
            <h1>I'm Ankur Patel</h1>
            </Fade>
            <Fade right duration={2500} delay={500}>
            <p>Keep Learning</p>
            </Fade>
          </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home