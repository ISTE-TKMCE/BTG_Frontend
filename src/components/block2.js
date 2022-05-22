import React from 'react'
import img from "../assets/images/img.svg";
import inst from '../assets/images/inst.svg'
import bg1 from '../assets/images/kohlibg.png'


const Block2 = () => {
  return (
    <div id='instruction'>
        
    
    <div className=" lg:items-left" style={{zIndex:'2'}}>
            <img class="lg:ml-10 lg:max-w-2xl" src={inst} ></img>
    </div>  

    <div className="2xl:mx-auto 2xl:container 2xl:px-20 px-6 " >
     
    <div className="flex md:flex-row flex-col-reverse md:items-stretch items-center">
    
        <div className="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center xl:mr-28">
       
        <div className="flex flex-col text-left" >
            
           
                <p className="sm:w-96 w-full text-base leading-6 text-center text-white-600">The participant can select the match from the Beat The Game website and must pick 11 players within 100 credits.</p>
                <div className="md:mt-14 flex flex-col items-center">
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔰The participants can recreate their team members even after saving. But once submitted, it cannot be changed.</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                   
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔰The time of the game is from 12pm to 7pm.The participants must select the team before 7pm.</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                    
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">your team must include:</p>
                </div>
                <div className="mt-7 flex flex-col items-center">
                    
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔹Wicket keeper- minimum of 1 and maximum of 4.</p>
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔹Batsman - minimum of 3 and maximum of 6.</p>
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔹All rounder- minimum of 1 and maximum of 4.</p>
                    <p className="text-base leading-6 text-center text-white-600 sm:w-96 w-full">🔹Bowler- minimum of 3 and maximum of 6. </p>
                </div>
            </div>
        </div>
        <div className="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
            <img src={img} alt="" className="h-full rounded-md object-cover object-center md:block " />
           
        </div>
    </div>
</div>
 
</div>
  )
}

export default Block2