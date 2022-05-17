import React from 'react';
import './App.css';
import TechnicalImage from "../assets/images/playstyle-linear-overlay.png";
// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// const divStyle = {
  
//   backgroundImage: `url(${TechnicalImage})`,
//   backgroundSize: 'cover'  
// };


function About() {
  return (
    <div>

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
