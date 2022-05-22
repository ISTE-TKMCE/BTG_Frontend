import React from 'react'
import Footer from './Footer'
import MatchDiagram from './MatchDiagram'
import Block1 from './block1';
import Block2 from './block2';
import bg from "../assets/images/playstyle-linear-overlay.png";

import Navbar from './common/navbar'
const HomePage = () => {
  
  return (
    <div className='h-screen'>
      <div className="z-40 w-full">
                
                <Navbar />
            </div>
           <Block1 />
            <Block2 />
           

        <MatchDiagram/>
        <Footer/>
    </div>
    
  )
}

export default HomePage