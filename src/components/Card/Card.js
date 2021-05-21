import React from 'react';
import './styles.css';
import { FiDatabase } from 'react-icons/fi';

export const Card = ({
  header = 'OBJECT STORAGE',
  title = 'Store Data',
  time = '2-6 mins',
}) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <p>{header}</p>
        <FiDatabase size={30} color='#3ab199' />
      </div>
      <div className='card-body text-dark'>{title}</div>
      <div className='card-footer'>{time}</div>
    </div>
  );
};
