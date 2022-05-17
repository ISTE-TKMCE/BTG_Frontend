import React from 'react'
import bg from "../assets/images/contact.png"
import Navbar from './common/navbar'
const Contacts = () => {
  
  return (

    <div>
      <div className="z-40 w-full">
                
                <Navbar />
            </div>
      <div className='text-bold flex items-center justify-center text-white-500'> Socials</div>
      <img src={bg} className="fixed pointer-events-none top-0 w-full min-h-full object-cover z-0" alt=" "/>
    </div>
  )
}

export default Contacts