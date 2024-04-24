import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Promo = () => {
  const refPromo = useRef(null);
  const isInViewPromo = useInView(refPromo, { once: true });
  const controlsPromo = useAnimation();

  useEffect(() => {
    if (isInViewPromo) {
      controlsPromo.start('visible');
    }
  }, [isInViewPromo, controlsPromo]);

  return (
    <>
      <motion.div
        ref={refPromo}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial='hidden'
        animate={controlsPromo}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <div className="lg:mt-20 lg:w-3/4 md:w-11/12 w-11/1 md:mt-12 mt-10 px-2 md:px-4 mx-auto items-start flex justify-between">
          <div>
            <div className="gap-8 lg:scale-110">
              <h2 className="text-sm md:text-2xl lg:text-3xl text-emerald-800 font-bold">Why Should You Choose Us</h2>
              <ul className="list-disc list-inside text-gray-500 mt-4 text-xs lg:text-md md:text-md font-semibold">
                <li>Extensive knowledge and experience in the travel industry.</li>
                <li>Safety and support are our top priority.</li>
                <li>Wide range of destinations to cater to different interests and preferences.</li>
                <li>24/7 customer support available.</li>
              </ul>
            </div>
            <div className='lg:scale-110 lg:mt-20 md:mt20'>
              <h2 className="text-sm text-emerald-800 font-bold mt-4 lg:text-3xl md:text-2xl">FROM OUR CLIENTS</h2>
              <p className="text-gray-500 text-xs md:text-md font-semibold mt-2">Real travel history from our beloved clients.</p>
              <p className="text-xs md:text-md">By choosing us as their tour agency, customers can expect an enriching<br /> and enjoyable travel experience, filled with unforgettable memories that will last a lifetime.</p>
            </div>
          </div>
          <div>
            <img src='promo.jpg' className='rounded-[50px] h-64 lg:mt-0 md:mt-0 mt8 lg:h-72 lg:w-48 md:h-64 md:w-40 object-cover object-center gap-4 overflow-hidden' alt="Promotional Image" />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Promo;
