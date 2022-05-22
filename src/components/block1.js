import React from 'react'
import Block2 from './block2';
import BTG from '../assets/images/BTG.svg'
import bg1 from '../assets/images/bg1.svg'
import {
    Link
  } from "react-router-dom";
const Block1 = () => {
  return (
    <div className="relative w-full h-screen pb-10 pt-36">
    <div className="md:block">
        <img className="absolute bg-cover bg-center w-full h-full inset-0" src={bg1} alt />
    </div>
    <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
        <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12" >
        <img src={BTG}></img>
            {/* <h1 className="text-4xl md:text-4xl align-middle lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-black">Beat The Game</h1> */}
            <div className="text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus, turpis massa arcu blandit justo enim. Mauris dis libero leo in amet proin sagittis fringilla.</h2>
            </div>
            <div className="lg:flex">
                <button className="hidden md:block opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  text-indigo-600 font-medium  outline-none  ring-2  ring-offset-2  ring-blue-700 rounded-lg">Instructions</button>
            </div>
        </div>
        <div>
        <Link to='#instruction' smooth>
        <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  text-indigo-600 font-medium  outline-none  ring-2  ring-offset-2  ring-blue-700 rounded-lg">Instructions</button>
        </Link>
        </div>
    </div>
</div>
  )
}

export default Block1