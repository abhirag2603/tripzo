import React,{useEffect,useRef} from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';


const Review = () => {
  const refReview = useRef(null);
  const isInViewReview = useInView(refReview, { once: true }); 
  const controlsReview = useAnimation();

  useEffect(() => {
    if (isInViewReview) {
      controlsReview.start('visible');
    }
  }, [isInViewReview, controlsReview]);

  return (
     <motion.div
          ref={refReview}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial='hidden'
          animate={controlsReview}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
    <div
     className='pt-10 md:pt-10 lg:pt-16'>
    <div
     className='container lg:w-2/3 h-28 md:w-3/4 w-11/12 left-0 right-0 mx-auto bg-gray-400 rounded-3xl flex items-center justify-evenly'>
    <div className="flex items-center">
      <p className='lg:text-5xl md:text-3xl font-bold '>10</p>
      <p className='text-xs'>Years<br/> Of Experience</p>
    </div>
    <div className="flex items-center">
      <p className='lg:text-5xl md:text-3xl font-bold'>2K+</p>
      <p className='text-xs'>Fine<br/>Destinations</p>
    </div>
    <div className="flex items-center">
      <p className='lg:text-5xl md:text-3xl font-bold'>10K+</p>
      <p className='text-xs'>Customer<br/>Reviews</p>
    </div>
    <div className="flex items-center">
      <p className='lg:text-5xl md:text-3xl font-bold'>4.8</p>
      <p className='text-xs'>Overall<br/>Rating</p>
    </div>
    </div>
    </div>
    </motion.div>
  )
}

export default Review