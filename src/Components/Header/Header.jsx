import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Popcard from './Popcard';

const Header = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <video className='object-cover w-full h-screen z-0 relative' src='travel2.mp4' autoPlay muted loop></video>
      <div className='absolute z-10 top-1/4 lg:top-1/4 md:top-1/4 left-0 right-0 mx-auto text-center text-white'>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='z-10 font-bold text-4xl md:text-5xl lg:text-6xl animate-text'
        >
          Unlock Your Travel Dreams<br />With Us!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className='mt-4 lg:text-xl animate-text'
        >
          Discover the world's most adventurous nature! Life is too short for a trip
        </motion.p>
        <button className='border-2 border-white mt-10 w-40 h-8 rounded-2xl bg-gray-700 hover:bg-gray-800 text-emerald-400 font-mont text-sm hover:scale-110 transition-all duration-300'>Get started</button>
        <div className="flex items-center justify-center gap-1 mt-10">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className='text-center animate-places-text'
          >
            Popular places
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className='z-20 w-2/3 h-1 bg-white rounded-2xl animate-places-div'
          ></motion.div>
        </div>
        <div className='mt-10 md:mt-16 lg:mt-20 w-2/3 h-2/3 overflow-auto mx-auto grid lg:grid-cols-3 md:grid-rows-3 md:gap-4 sm:grid-rows-3 sm:gap-2 lg:gap-2 gap-2 justify-items-center'>
          <Popcard img="italy.jpg" name="Italy" key="1" />
          <Popcard img="paris.jpg" name="Paris" key="2" />
          <Popcard img="switz.jpg" name="Switzerland" key="3" />
        </div>
      </div>
    </div>
  );
};

export default Header;
