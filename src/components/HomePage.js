import React from 'react'
import Footer from './Footer'
import MatchDiagram from './MatchDiagram'
import Block1 from './block1';
import Block2 from './block2';

import Navbar from './common/navbar'
const HomePage = () => {
  
  return (
    <div className='' style={{  background: "linear-gradient(to right, #200122, #6f0000)"}}>
      <div className="z-40 w-full" >
                
                <Navbar />
            </div>
            
            <div className='text-center md:ml-5' >
           <Block1 />
           
           </div>
           
           <div className='w-full'>
            <Block2 />
            </div>
            <div style={{backgroundColor:'#101822'}}>
        <MatchDiagram/>
        
        <Footer/>
        </div>
    </div>
    
  )
}

export default HomePage