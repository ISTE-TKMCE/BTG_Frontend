import React from 'react'
import Footer from './Footer'
import MatchDiagram from './MatchDiagram'
import Block1 from './block1';
import Block2 from './block2';

import Navbar from './common/navbar'
const HomePage = () => {
  
  return (
    <div className='' style={{background: "linear-gradient(to right, #330708, #330708, #0E070E, #070E20, #050813)"}}>
      <div className="z-40 w-full" >
                
                <Navbar />
            </div>
            
            <div className='text-center md:ml-5' >
           <Block1 />
           
           </div>
           
           
            <Block2 />
           

        <MatchDiagram/>
        <Footer/>
    </div>
    
  )
}

export default HomePage