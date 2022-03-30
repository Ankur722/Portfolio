import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import Fade from 'react-reveal/Fade';

function Header() {
  return (
    <div>
      <Fade top>
      <div className="flex-container" >
        <div>
        <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/project">Project</Link>
        </div>
        <div>
          <Link to="/about">Skill</Link>
        </div>
        <div>
        <Link to="/contact">Contact</Link>
        </div>
      </div>
      </Fade>
    </div>
  )
}

export default Header;





