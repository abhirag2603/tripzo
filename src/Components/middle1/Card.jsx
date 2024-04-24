import React,{useEffect,useRef} from 'react'
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';

const Card = (props) => {
    const refCard = useRef(null);
    const isInViewCard = useInView(refCard, { once: true }); 
    const controlsCard = useAnimation();
  
    useEffect(() => {
      if (isInViewCard) {
        controlsCard.start('visible');
      }
    }, [isInViewCard, controlsCard]);
  return (
    <>
    <motion.div
    ref={refCard}
    variants={{
      hidden: { opacity: 0, y: 75 },
      visible: { opacity: 1, y: 0 },
    }}
    initial='hidden'
    animate={controlsCard}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="cursor-pointer hover:scale-105 transition-all duration-300 relative w-32 h-28 md:h-40 md:w-56 lg:w-64 lg:h-56 shadow-lg rounded-lg overflow-hidden">
        <img
          src={props.coverImg}
          alt={props.title}
          className="absolute inset-0 object-cover w-full h-full z-0"
        />
        <div className="absolute inset-0 flex items-end justify-start z-10">
          <div className="text-white ml-2 mb-2">
            <h2 className="text-sm font-bold">{props.title}</h2>
            <p className="text-xs">{props.description}</p>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default Card;
