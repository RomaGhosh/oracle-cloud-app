import React from 'react';
import { FaCaretRight } from 'react-icons/fa';

export function DrawerItem({ title = 'testing item' }) {
  return (
    <div className='drawer-item'>
      <p className='title'>{title}</p>
      <FaCaretRight color='white' />
    </div>
  );
}
