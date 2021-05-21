import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import './styles.css';
import navLogo from '../../assets/nav-logo.png';
export function Header({ onMenuClick }) {
  return (
    <div className='header bg-dark'>
      <div className='flex-row-center'>
        <button className='nav-menu ' onClick={onMenuClick}>
          <HiMenu color='white' size={25} />
        </button>
        <img src={navLogo} alt='brand-nav' className='nav-brand' />

      </div>
      <div className='search-wrapper'>
        <input
          className='search-box'
          type='text'
          placeholder='Search for resourses'
        />
        <BiSearchAlt size={30} color='#1f2732' />
      </div>
      <h3 className='text-white text-right'>US West</h3>

    </div>
  );
}
