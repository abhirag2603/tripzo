import React from 'react';

const Popcard = (props) => {
  return (
    <div className='relative cursor-pointer'>
      <img
        src={props.img}
        className='w-80 h-20 md:w-96 md:h-20 lg:w-60 lg:h-40 object-cover rounded-2xl'
        alt="Popcard Image"
      />
      <p className='absolute bottom-0 left-0 z-20 p-2 text-white font-semibold'>{props.name}</p>
    </div>
  );
}

export default Popcard;
