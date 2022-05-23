import React from 'react'
import bg from "../assets/images/contact.png"
import Navbar from './common/navbar'
import facebook from "../assets/images/Facebookicon.png"
import instagram from "../assets/images/Instagramicon.png"
import phone from "../assets/images/Phone.png"
import Footer from './Footer'
const Contacts = () => {
  
  return (

    <div>
      <div className="z-40 w-full">
                
                <Navbar />
            </div>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 pt-6 gap-8 mt-12 mb-12 text-center">
   
                <div className="rounded " style={{borderRight:"5px solid"}} >
                <div className='Heading flex items-center justify-center text-white'>Socials</div>

                <div className='flex items-center justify-center'><img src={facebook}></img> <img src={instagram}></img></div>
                </div>
                <div className="rounded  h-24" >
                  <div className='Heading flex items-center justify-center text-white'>Call Us for enquiries <img src={phone} className="ml-3 w-8 h-8"></img></div>

                  <div className='text-white text-center mt-10'>
                    <div><h4>Aboo : 8089588916</h4></div>
                    <div><h4>Vinay : 7994641360</h4></div>
                  </div>
                </div>
                
            
            </div>
            
      <img src={bg} className="fixed pointer-events-none top-0 w-full min-h-full object-cover z-0" alt=" "/>
    </div>
  )
}

export default Contacts