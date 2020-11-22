import React from 'react';
import ParticlesBg  from "particles-bg";

function Header({ data }) {
   return (
      <header id="home">
         <ParticlesBg type="circle" bg={true} />
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

            <ul id="nav" className="nav">
               <li><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#contact">Contact</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">Jaired Jawed</h1>
               <h3>A responsible, detailed-oriented and steadfast problem solver with the ability to quickly adapt to new emerging frameworks. Proficient in a range of web technologies including React, Node.js, and Python.</h3>
               <hr />
               <ul className="social">
                  <li>
                     <a href={data.resumedownload} className="button btn project-btn"><i className="fa fa-download" /> Resume</a>
                  </li>
                  <li>
                     <a href="https://github.com/jaireddjawed" className="button btn github-btn"><i className="fa fa-github" /> Github</a>
                  </li>
                  <li>
                  <a href="https://www.linkedin.com/in/jaired/" className="button btn linkedin-btn"><i className="fa fa-linkedin" /> LinkedIn</a>
                  </li>
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
         </p>

      </header>
   );
}

export default Header;
