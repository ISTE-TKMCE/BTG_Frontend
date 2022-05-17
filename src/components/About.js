import React from 'react';
import './App.css';
import Navbar from './common/navbar';
import TechnicalImage from "../assets/images/playstyle-linear-overlay.png";


function About() {
  return (
    <div>
      <div className="z-40 w-full">
                
                <Navbar />
            </div>
      <header className="App-header">
        <p>
          njcnfsv shv v sbvhnv vhnvjbvdcjsvndc dcvgdscbdvcgd
        </p>
      </header>
      <img src={TechnicalImage} className="fixed pointer-events-none top-0 w-full min-h-full object-cover z-0" alt=" "/>
    </div>
  );
}

export default About
