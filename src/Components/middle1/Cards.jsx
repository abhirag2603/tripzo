import React from 'react';
import Card from './Card';
import Carddata from './Carddata';

const Cards = () => {
  const cards = Carddata.map((card) => (
    <Card
      key={card.id}
      title={card.title}
      description={card.description}
      coverImg={card.coverImg}
      rating={card.rating}
    />
  ));

  return (  
    <div className='mt-10 lg:mx-28 md:mx-4 left-0 right-0 mx-auto grid grid-cols-3 lg:grid-cols-4 gap-y-4 justify-items-center'>
      {cards}
    </div>
  );
}

export default Cards;
