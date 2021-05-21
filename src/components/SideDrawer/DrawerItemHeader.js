import React from 'react';
import { BiChip } from 'react-icons/bi';

export function DrawerItemHeader({ title = ' TEST HEADER' }) {
  return (
    <div className='drawer-item dropdown-header justify-content-start'>
      <BiChip color='#131514' size={20} style={{ marginRight: 10 }} />
      <p className='title-header'>{title}</p>
    </div>
  );
}
