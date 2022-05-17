import React from 'react'
import Footer from './Footer'
import MatchDiagram from './MatchDiagram'
import Navbar from './common/navbar'
const HomePage = () => {
  return (
    <div className='h-screen'>
      <div className="z-40 w-full">
                
                <Navbar />
            </div>
        <MatchDiagram/>
        <Footer/>
    </div>
    
  )
}

export default HomePage