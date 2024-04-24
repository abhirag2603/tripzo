import React,{useEffect,useRef} from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Support2 = () => {
  const refSupport = useRef(null);
    const isInViewSupport = useInView(refSupport, { once: true }); 
    const controlsSupport = useAnimation();
  
    useEffect(() => {
      if (isInViewSupport) {
        controlsSupport.start('visible');
      }
    }, [isInViewSupport, controlsSupport]);

  return (
    <>
     <motion.div
    ref={refSupport}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={controlsSupport}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    >
    <div className='lg:mt-28 md:mt-12 mt-8 flex flex-row lg:w-2/3 md:w-1/2 md:px-0   px-4 lg:px-20 justify-center mx-auto items-center'>
        <div>
        <p className='font-bold text-emerald-800 lg:text-3xl md:text-xl text-sm'>Best Way to start your Journey</p>
        <p className='lg:mt-3 md:text-sm md:mt-2 text-xs mt-1'>We offer personalized itineraries tailored to individual preferences and interests</p>
        <button className='flex flex-row items-center gap-1 border-2 md:w-full mt-1 lg:w-40 border-emerald-400 md:mt-2 lg:mt-3 h-8 p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 text-emerald-400 font-mont text-sm transition-all duration-300'>Start here</button>
        </div>
        <img src='person1.png' className='md:w-60 lg:w-80 w-28'/>
        </div>
        </motion.div>
        </>
  )
}

export default Support2