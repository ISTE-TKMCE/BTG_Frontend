import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/btg.png';
import hestia_logo from '../../assets/images/hestia_logo_white.png'

import { ABOUT, CONTACT, HOME, LEADERBOARD } from "../../constants/routes";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cc z-20 bg-grey-900">
        <div className="max-w-7xl z-20 px-4 sm:px-6=" style={{fontFamily: 'Rajdhani'}}>
          <div className="flex z-20 items-center justify-between h-16">
            <div className="flex z-20 items-center ">
              <div className="flex flex-shrink-0 px-4 justify-center items-center mx-auto">
              <img src={hestia_logo} className="w-20  pr-4 basis-1/3"></img>
              <img src={logo} className="w-20 pr-4 basis-1/3"></img>
              
              </div>
              <div className="hidden z-20 md:block uppercase text-xl font-bold">
                <div className="ml-10 flex items-baseline z-20 space-x-4 ">
                  <Link
                    to={HOME}
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md"
                  >
                    Home
                  </Link>
                  <Link
                    to="/select-team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                  >
                    Select Team
                  </Link>
                  <Link
                    to={LEADERBOARD}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                  >
                    Leaderboard
                  </Link>

                  <Link
                    to={CONTACT}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                   >
                    Contact
                  </Link>

                  <div
                    onClick={()=>{
                      console.log(">>>>>>>>>>>>>>>>>",sessionStorage)
                      sessionStorage.clear();
                      window.location('/')
                      console.log("7777",sessionStorage)
                    }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                  >
                    Logout
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden z-20">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent z-20 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform z-20"
          enterFrom="opacity-0 scale-95 z-20"
          enterTo="opacity-100 scale-100 z-20"
          leave="transition ease-in duration-75 transform z-20"
          leaveFrom="opacity-100 scale-100 z-20"
          leaveTo="opacity-0 scale-95 z-20"
          className="z-20"
        >
          {(ref) => (
            <div className="overflow-x-auto scrollDivH z-20 md:hidden mt-4" id="mobile-menu" >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-20 font-bold text-lg uppercase">
              <Link
                    to={HOME}
                    className="hover:bg-gray-700 text-white px-3 py-2 rounded-md "
                  >
                    Home
                  </Link>
                  
                  <Link
                    to={LEADERBOARD}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                  >
                    Leaderboard
                  </Link>
                  
                  <Link
                    to="/select-team"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                  >
                    My_Team
                  </Link>

                  <Link
                    to={CONTACT}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                  >
                    Contact
                  </Link>

                  <Link
                    to='/logout'
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md "
                  >
                    Logout
                  </Link>
              </div>
            </div>
          )}
        </Transition>
     
    </div>
  );
}

export default Navbar;