
import React, { useState,useRef, useEffect } from 'react';

import { IoIosAirplane } from "react-icons/io";
import { IoIosKeypad } from "react-icons/io";

const Navbar = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowDropdown(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute w-5/6 left-0 right-0 mx-auto my-4 flex items-center justify-between h-16 bg-gray-800 text-emerald-400 rounded-xl z-10 shadow-2xl">
      <div className='z-20 flex items-center cursor-pointer'>
        <IoIosAirplane className="text-emerald-400 ml-4" />
        <p className="ml-2 font-semibold">Tripzo</p>
      </div>
      <IoIosKeypad className='z-20 mr-4 lg:hidden cursor-pointer' onClick={toggleDropdown} />
      <ul className={`${showDropdown ? 'z-20 absolute top-20 right-0 left-0 mx-auto flex flex-col items-center w-28 h-28 md:w-40 md:h-32 pl-0 md:py-3 py-1 bg-gray-800 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 border border-gray-100 text-white select-none list-none font-semibold' : 'hidden lg:list-none lg:text-white lg:select-none lg:font-semibold lg:flex lg:flex-row lg:gap-6 lg:mr-4'}`}>
        <li className="text-xs lg:text-base py-1.5 cursor-pointer hover:text-emerald-400 transition-all duration-300">Home</li>
        <li className="text-xs lg:text-base py-1.5 cursor-pointer hover:text-emerald-400 transition-all duration-300">Destinations</li>
        <li className="text-xs lg:text-base py-1.5 cursor-pointer hover:text-emerald-400 transition-all duration-300">About</li>
        <li className="text-xs lg:text-base py-1.5 cursor-pointer hover:text-emerald-400 transition-all duration-300">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
