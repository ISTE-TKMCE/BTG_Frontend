import React from 'react'
import img from "../assets/images/img.svg";
import inst from '../assets/images/inst.svg'
import bg from '../assets/images/block2.png'


const Block2 = () => {
  return (
    <div id='instruction' className="px-5 text-black" style={{backgroundColor:'#FF4646'}}>
        
<div className=" lg:items-left" style={{zIndex:'2'}}>
            <img class="lg:ml-10 lg:max-w-4xl " src={inst} ></img>
    </div>  

   

    <div className="" >
     
    <div className="flex flex-col md:flex-row md:items-stretch items-center">
    
        <div className="md:py-10 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center xl:mr-28">
       
        <div className="flex flex-col text-left mx-auto" >
            
           
              <div className=" flex flex-col items-center mt-7">
              <p className="sm:w-96 w-full md:text-xl text-base leading-6 text-left text-white-600 mb-7">The participant can select the match from the Beat The Game website and must pick 11 players within 100 credits.</p>
                <div className=" flex flex-col items-center">
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full">The participants can recreate their team members even after saving. But once submitted, it cannot be changed.</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                   
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full">The time of the game is from 12pm to 7pm.The participants must select the team before 7pm.</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                    
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full uppercase font-bold">your team must include:</p>
                </div>
              </div>
                <div className="mt-7 flex flex-col items-center">
                    
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full"><span className="font-bold">W</span>icket keeper- minimum of 1 and maximum of 4.</p>
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full"><span className="font-bold">B</span>atsman - minimum of 3 and maximum of 6.</p>
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full"><span className="font-bold">A</span>ll rounder- minimum of 1 and maximum of 4.</p>
                    <p className="md:text-xl text-base leading-6 text-left text-white-600 sm:w-96 w-full"><span className="font-bold">B</span>owler- minimum of 3 and maximum of 6. </p>
                </div>
            </div>
        </div>
        <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2 flex flex-col items-center justify-center">
            
            <img src={img} alt="" className="h-full rounded-md object-cover object-center md:block " />
           
        </div>
    </div>
</div>
 
</div>
  )
}

export default Block2