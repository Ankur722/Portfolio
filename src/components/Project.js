import React from 'react';
import Header from './Header';
import Footer from "./Footer";
import "./Project.css";
import Fade from 'react-reveal/Fade';


function Project() {
  return (
    <div className="project">
      <Header />
      <Fade top delay={500}>
        <div className="project__row">

            <div className="project__image">
                <a href="https://fullstacknetflix-clone.web.app/">
                  <img src="./images/Project_img/Netflixclone.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://amazonclone-roan.vercel.app/">
                  <img src="./images/Project_img/Amazonclone.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://moviedatabase-seven.vercel.app/">
                  <img src="./images/Project_img/Moviedatabase.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://keeperapp.vercel.app/">
                  <img src="./images/Project_img/Keeperapp.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://teslaclone-three.vercel.app/">
                  <img src="./images/Project_img/Teslaclone.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://modernweb.vercel.app/">
                  <img src="./images/Project_img/Modernweb.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://pacific-beyond-14265.herokuapp.com/">
                  <img src="./images/Project_img/Dailyblog.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://infinite-gorge-58126.herokuapp.com/">
                  <img src="./images/Project_img/Todolist.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://tindog-lac.vercel.app/">
                  <img src="./images/Project_img/Tindog.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://ankur722.github.io/drumkit/">
                  <img src="./images/Project_img/Drumkit.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://dicegame-six.vercel.app/">
                  <img src="./images/Project_img/Dicegame.PNG" alt="" />
                </a>
            </div>

            <div className="project__image">
                <a href="https://firstwebsite-lake.vercel.app/">
                  <img src="./images/Project_img/Firstweb.PNG" alt="" />
                </a>
            </div>

        </div>
        </Fade>
      <Footer />
    </div>
  )
}

export default Project