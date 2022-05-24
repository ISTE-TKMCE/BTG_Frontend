import React, { useEffect, useState } from 'react'
import bg from "../assets/images/playstyle-linear-overlay.png";
import Navbar from './common/navbar';
import {BASE_URL} from '../constants/urls';
import useFetch from "../hooks/useFetch";



const UserRow = (props)=>{
  return(
    <div className='flex scrollDivH flex-row overflow-x-auto md:items-center w-full my-2 border-b md:border-none py-5 md:py-2'>
      <div className='w-10 mx-1'>
        <p>{props.slNo+1}</p>
      </div>
      
      <div className=' w-3/5 flex flex-col '>
        <p>{props.data.username}</p>
        <div className='w-full md:hidden'>
        <p>{props.data.batch}</p>
      </div>
      </div>
      <div className='w-1/6 hidden md:block'>
        <p>{props.data.branch}</p>
      </div>
      <div className='w-5'>
        <p>{props.data.points}</p>
      </div>
    </div>
  )
}

const Leaderboard = () => {

  const [userState,setUserState] = useState({name:"Aravind"});
  const { error, isPending, data: leaderBoard } = useFetch(BASE_URL+'/users/leaderboard/');

  
  // const details = [
  //   {
  //     name:"Abc",
  //     img:"",
  //     branch:"CSE",
  //     points:"2400",
  //   },
  //   {
  //     name:"Someone",
  //     img:"",
  //     branch:"CSE",
  //     points:"2400",
  //   },
  //   {
  //     name:"HHello",
  //     img:"",
  //     branch:"ECE",
  //     points:"2400",
  //   },
  //   {
  //     name:"Abc",
  //     img:"",
  //     branch:"CSE",
  //     points:"2400",
  //   },
  // ]

// 

  // useEffect(()=>{
  //   setLeaderBoard(details);
  // },[]);
  return (
    <div>
    <div className="z-40 w-full">
                
                <Navbar />
            </div>
    <div className='w-full flex justify-center min-h-screen'>
      <div className='flex flex-col w-11/12 mt-5 z-10'>
        <div className='flex backdrop-blur-sm flex-row items-center justify-between mb-5 text-xl bg-[#EFEEEE14] font-bold rounded-xl py-5 px-5'>
          <p>{userState.name}</p>
          <p>POINTS</p>
        </div>
        <div className='flex backdrop-blur-sm flex-col w-full items-center justify-between mb-5 text-xl bg-[#EFEEEE14] font-bold rounded-xl py-5 px-5'>
          {
            leaderBoard?.length>0 && leaderBoard.map((item,index)=>{
              return(
                <>
                  { isPending ? "Loading" : <UserRow data={item} key={index} slNo={index} />}

                </>
              )
            })
          }
        </div>
      </div>
      <img src={bg} className="fixed pointer-events-none top-0 w-full min-h-full object-cover z-0" alt=" "/>
    </div>
    </div>
  )
}

export default Leaderboard