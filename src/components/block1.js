import React from "react";
import Block2 from "./block2";
import BTG from "../assets/images/BTG.svg";
import kohli from '../assets/images/kohlibhai.jpg'
import { Link } from "react-router-dom";
const Block1 = () => {
  return (
    <div className="relative w-full">
      {/* <div className="myVideo" id="myVideo" style={{zIndex:'20'}}>
        <video autoPlay loop>
          <source src="../assets/BtgBackground.mp4" type="video/mp4" />
        </video>
       </div> */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div className="relative px-4 container mx-auto items-center gap-8">
      <div className="md:block">
        <img
          className="absolute h-80 mx-auto  inset-0"
          src="https://btgregister.istetkmce.in/assets/img/bat.gif"
          style={{opacity:'0.2'}}
        />
      </div>
        <div className="text-color w-full pt-72">
          <img src={BTG}></img>
          {/* <h1 className="text-4xl md:text-4xl align-middle lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-black">Beat The Game</h1> */}
          <div className="pt-8 pb-8">
            <h2 className="text-left">
            Shout out to all IPL fanatics who thrive out their ways to join
              the IPL gala. Amidst this Hestia fever, ISTE Students Chapter
              TKMCE offers an ecstatic chance to be part of this jubilant buzz
              through the much awaited ravishing season Beat The Game
            </h2>
          </div>
          <div className="">
          <a href="#instruction">
          <button className="hidden md:block opacity-90 text-base  xl:text-base xl:w-4/12  f-f-r py-4  text-white font-bold   outline-none  ring-2  ring-offset-2  ring-slate-700 rounded-lg">
              Instructions
            </button>
          </a>
          </div>
        </div>
        <div>
          <a href="#instruction">
            <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  text-white  font-bold   outline-none  ring-2  ring-offset-2  ring-slate-700 rounded-lg mb-4">
              Instructions
            </button>
          </a>
        </div>
        
      </div>
      <div className="hidden md:block">
      <img src={kohli}></img>
      </div>
      </div>
    </div>
  );
};

export default Block1;
