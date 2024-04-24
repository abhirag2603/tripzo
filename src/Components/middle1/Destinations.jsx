import React,{useEffect,useRef} from 'react'
import { CiSearch } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Destinations = () => {
  const refSearch = useRef(null);
  const isInViewSearch = useInView(refSearch, { once: true }); 
  const controlsSearch = useAnimation();

  useEffect(() => {
    if (isInViewSearch) {
      controlsSearch.start('visible');
    }
  }, [isInViewSearch, controlsSearch]);

  const refText = useRef(null);
  const isInViewText = useInView(refText, { once: true }); 
  const controlsText = useAnimation();

  useEffect(() => {
    if (isInViewText) {
      controlsText.start('visible');
    }
  }, [isInViewText, controlsText]);

  const refGenre = useRef(null);
  const isInViewGenre = useInView(refGenre, { once: true }); 
  const controlsGenre = useAnimation();

  useEffect(() => {
    if (isInViewGenre) {
      controlsGenre.start('visible');
    }
  }, [isInViewGenre, controlsGenre]);

  return (
    <>
    <motion.div
    ref={refText}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={controlsText}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    >
    <div className='lg:mt-16 mt-10 md:mt-12 items-center flex flex-col'>
    <p className='items-center text-emerald-400 font-bold'>Explore now</p>
    <p className='text-black font-semibold lg:text-5xl md:text-4xl text-xl mt-3'>Find Your Dream Destination</p>
    <p className='mt-2 text-xs md:text-sm'>Fill in the fields below to find the best spot for you next trip!</p>
    </div>
    </motion.div>
    <motion.div
    ref={refSearch}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={controlsSearch}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    >
    <div className='mt-10 flex flex-col items-center justify-center gap-4 lg:flex-row md:flex-row'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
    <div className="relative ">
          <input type='text' className='rounded-2xl bg-emerald-100' />
          <IoLocation className="absolute top-1 left-2 text-gray-400" />
          <p className="absolute top-0.5 left-8 text-gray-400">Location</p>
        </div>
        <div className="relative ">
          <input type='text' className='rounded-2xl bg-emerald-100' />
          <FaRegCreditCard className="absolute top-1 left-2 text-gray-400" />
          <p className="absolute top-0.5 left-8 text-gray-400">Budget</p>
        </div>
        </div> 
        <div className='flex flex-col lg:flex-row lg:items-center gap-2'>
        <div className="relative">
          <input type='date' className='rounded-2xl bg-emerald-100' />
          {/* <FaCalendarAlt className="absolute top-1 left-2 text-gray-400" />
          <p className="absolute top-0.5 left-8 text-gray-400">Date</p> */}
        </div>
        <button className='flex flex-row items-center gap-1 border-2 w-full lg:w-40 border-emerald-400 h-8 p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 text-emerald-400 font-mont text-sm transition-all duration-300'><CiSearch />Search</button>
        </div>
    </div>
    </motion.div>
    <motion.div
    ref={refGenre}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={controlsGenre}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    >
    <div className="mt-10 text-xs flex flex-col md:flex-row md:justify-center md:text-sm lg:text-lg gap-5">
        <div className='flex flex-row gap-5 justify-center'>
        <p className='cursor-pointer border-dashed border-2 border-emerald-400 px-4 py-1.5 lg:px-6 rounded-xl'>All</p>
        <p className='cursor-pointer border-dashed border-2 border-emerald-400 px-4 py-1.5 lg:px-6 rounded-xl'>Recommended</p>
        <p className='cursor-pointer border-dashed border-2 border-emerald-400 px-4 py-1.5 lg:px-6 rounded-xl'>Beach</p>
        </div>
        <div className='flex flex-row  gap-5 justify-center'>
        <p className='cursor-pointer border-dashed border-2 border-emerald-400 px-4 py-1.5 lg:px-6 rounded-xl'>Park</p>
        <p className='cursor-pointer border-dashed border-2 border-emerald-400 px-4 py-1.5 lg:px-6 rounded-xl'>Mountain</p>
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default Destinations