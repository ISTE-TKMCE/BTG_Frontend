import React from 'react'
import { Link } from 'react-router-dom'
import FacebookIcon from '../assets/svgs/facebook.svg'
import InstagramIcon from '../assets/svgs/instagram.svg'
import LinkedInIcon from '../assets/svgs/linkedin.svg'
import TwitterIcon from '../assets/svgs/twitter.svg'
import logo from '../assets/images/logo.svg'


const Footer = () => {
  return (
    <div>
        <div className=' p-2 mt-2 flex flex-row justify-center align-middle text-white'>
            <div className='w-1/2' style={{borderRight:'1px solid'}}>
                <h1 className='text-3xl  font-bold text-center'>ISTE TKMCE</h1>
                <p className='opacity-80 text-sm p-1 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>                
            </div>
            <div class="divider lg:divider-horizontal"></div> 
            <div className='w-1/2'>
                <h1 className='text-3xl  font-bold text-center'>Follow Us</h1>
                <div className=' pt-4 lg:pt-8 lg:pb-4 '>
      <div className="w-full uppercase grid grid-cols-2 lg:w-2/3 lg:grid-cols-2 flex justify-center items-center">
     
         <a className='text-xxsmall lg:text-xsmall transition duration-500 hover:scale-125 text-center' href=''>            
         <img className='w-7 lg:w-10 transition duration-500 hover:scale-125 whitespace-nowrap mx-auto lg:block' src={InstagramIcon} alt="Facebook" />
         </a>
         <a className='text-xxsmall lg:text-xsmall transition duration-500 hover:scale-125 text-center' href=''>            
         <img className='w-7 lg:w-10 transition duration-500 hover:scale-125 whitespace-nowrap mx-auto lg:block' src={FacebookIcon} alt="Facebook" />

         </a>
      </div>

                </div>
            </div>
            
        </div>

        <h6 className='flex justify-center align-center text-lg pl-2'>All Rights Reserved by &copy; BTG 2.0</h6>

    </div>
  )
}

export default Footer