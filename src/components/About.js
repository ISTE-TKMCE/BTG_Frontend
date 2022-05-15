import React from 'react';
import './App.css';
import TechnicalImage from "E:\\ISTE\\btg\\btgx\\src\\ab.jpg";
const About = () => {
  return (
    <div>About</div>
  )
}

const divStyle = {
  
  backgroundImage: `url(${TechnicalImage})`,
  backgroundSize: 'cover'  
};


function App() {
  return (
    <div style={{
      backgroundImage: `url("E:\\ISTE\btg\btgx\\src\\ab.jpg")` 
    }}>

      <header className="App-header">
        <p>
          njcnfsv shv v sbvhnv vhnvjbvdcjsvndc dcvgdscbdvcgd
        </p>
      </header>
    </div>
  );
}

export default App;
export default About
