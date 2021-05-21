import React from 'react';
import { Card } from '../../components';
import { cardsData } from '../../data/cards.data';
import './styles.css';

export function Home() {
  return (
    <div className='bg-light '>
      <div className='container-box bg-light'>
        {cardsData.map((card) => (
          <Card {...card} />
        ))}
      </div>

    </div>
  );
}
