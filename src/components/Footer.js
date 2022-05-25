import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../assets/svgs/facebook.svg'
import InstagramIcon from '../assets/svgs/instagram.svg'
import LinkedInIcon from '../assets/svgs/linkedin.svg'
import TwitterIcon from '../assets/svgs/twitter.svg'
import logo from '../assets/images/logo.svg'

import iste_logo from '../assets/images/ISTElogo.svg'
const Footer = () => {
  return (
    <div style={{backgroundColor:'#101822'}}>
        <div className=' p-2 mt-2 flex flex-row justify-center align-middle text-white'>
            <div className='w-1/2' style={{borderRight:'1px solid'}}>
                <div className='flex justify-center items-center'>
                <a href='https://istetkmce.in/'><img src={iste_logo} className="w-14"></img></a>
                <h1 className='text-3xl  font-bold text-center mt-3 ml-3'><span>ISTE TKMCE</span></h1>
                </div>
                <p className='opacity-80 text-sm p-2 mt-3'></p>                
            </div>
             
            <div className='w-1/2'>
                <h1 className='text-3xl  font-bold text-center'>Follow Us</h1>
                <div className=' pt-4 lg:pt-8 lg:pb-4 '>
      <div className="w-full uppercase grid grid-cols-2 lg:w-2/3 lg:grid-cols-2 flex justify-center items-center mx-auto">
     
         <a className='text-xxsmall lg:text-xsmall transition duration-500 hover:scale-125 text-center' href='https://www.instagram.com/iste_tkmce_/'>            
         <img className='w-7 lg:w-10 transition duration-500 hover:scale-125 whitespace-nowrap mx-auto lg:block font-white' src={InstagramIcon} alt="Facebook" />
         </a>
         <a className='text-xxsmall lg:text-xsmall transition duration-500 hover:scale-125 text-center' href='https://www.facebook.com/istetkm/'>            
         <img className='w-7 lg:w-10 transition duration-500 hover:scale-125 whitespace-nowrap mx-auto lg:block font-white' src={FacebookIcon} alt="Facebook" />

         </a>
      </div>

                </div>
            </div>
            
        </div>

        <h6 className='flex justify-center align-center text-lg pl-2'>All Rights Reserved by &copy; BTG 3.0</h6>

    </div>
  )
}

export default Footer