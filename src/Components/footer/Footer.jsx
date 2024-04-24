import React from 'react';
import { IoIosAirplane } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-800 lg:mt-20 md:mt-16 mt-8 text-white p-4">
      <div className="container mx-auto lg:h-60 md:h-60 flex lg:flex-row md:flex-row flex-col justify-between items-center">
        <div className='z-20 text-emerald-400 flex items-center cursor-pointer'>
          <IoIosAirplane className="lg:ml-28 md:ml-12" />
          <p className="ml-2 font-semibold">Tripzo</p>
        </div>
        <div className='flex w-full justify-evenly lg:justify-evenly md:justify-evenly mt-4 gap-2'>
        <div className="flex flex-col space-y-2 lg:text-base md:text-base text-xs">
          <a href="" className="hover:underline">Information</a>
          <a href="" className="hover:underline">Home</a>
          <a href="" className="hover:underline">Explore</a>
          <a href="" className="hover:underline">Travel</a>
          <a href="" className="hover:underline">Blog</a>
        </div>
        <div className="flex flex-col space-y-2 lg:text-base md:text-base text-xs">
          <a href="" className="hover:underline">Helpful Links</a>
          <a href="" className="hover:underline">Destination</a>
          <a href="" className="hover:underline">Support</a>
          <a href="" className="hover:underline">Travel & Condition</a>
          <a href="" className="hover:underline">Privacy</a>
        </div>
        <div className='lg:text-base md:text-base text-xs'>
          <a href="" className="hover:underline">Contact</a><br/>
          <p>XXXXXXXXXX</p>
          <p className='flex lg:flex-row md:flex-row flex-col'>abhirag4169<span>@gmail.com</span></p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
