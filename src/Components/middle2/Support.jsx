import React,{useEffect,useRef} from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';


const Support = () => {
    const refSupport = useRef(null);
    const isInViewSupport = useInView(refSupport, { once: true }); 
    const controlsSupport = useAnimation();
  
    useEffect(() => { 
      if (isInViewSupport) {
        controlsSupport.start('visible');
      }
    }, [isInViewSupport, controlsSupport]);

  return (
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
    <div className='lg:mt-28 md:mt-12 mt-8 flex flex-col justify-center items-center'>
      <p className='lg:text-4xl md:text-2xl font-bold text-emerald-800'>Do you have any questions?</p>
      <p className='lg:mt-3 md:mt-3 text-xs'>Please fill the form below and our dedicated team will get in touch with you</p>
        <input type='email' className='lg:p-2 md:p-2 p-0 rounded-xl w-60 h-10 mt-4 bg-zinc-200 lg:w-1/3 md:mt-6 md:w-1/2 lg:mt-6 border-emerald-800 border-2 text-emerald-800' placeholder="Enter your email" />
      <textarea className='lg:p-2 md:p-2 p-0 lg:mt-6 resize-none rounded-xl w-60 h-60 mt-4 md:mt-6 md:w-1/2 md:h-40 lg:w-1/3 lg:h-80 bg-zinc-200 border-emerald-800 border-2 text-emerald-800' placeholder='Enter your question here'></textarea>
      <button className='flex flex-row items-center mt-4 justify-center gap-1 border-2 md:w-1/2 md:mt-6  border-emerald-400 lg:mt-6 lg:w-1/3 h-10 p-4 rounded-2xl bg-gray-700 hover:bg-gray-800 text-emerald-400 font-mont text-sm transition-all duration-300'>Submit</button>
    </div>
    </motion.div>
  );
}

export default Support;
