import React from 'react';

import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';

const InfoCards = () => {


  const cardData = [
    {
      id: 1,
      name: 'opening houres ',
      description: 'open 9:00 am to 5:00 pm',
      icon: clock,
      bgClass: 'bg-primary'
    },
    {
      id: 2,
      name: 'Our location ',
      description: 'dhaka , bangladesh',
      icon: marker,
      bgClass: 'bg-accent'
    },
    {
      id: 3,
      name: 'contact us now',
      description: '01761992392',
      icon: phone,
      bgClass: 'bg-secondary'
    },
  ]

  return (
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
      {cardData.map(card => <InfoCard
        key={card.id}
        card={card}
      ></InfoCard>)}
    </div>
  );
};

export default InfoCards;