import React from 'react';
import { drawerData } from '../../data/drawer.data';
import { DrawerItem } from './DrawerItem';
import { DrawerItemHeader } from './DrawerItemHeader';
import './styles.css';

export function SideDrawer() {
  return (
    <div className='sidedrawer bg-secondary'>
      {drawerData.map((item) => (
        <>
          <DrawerItemHeader title={item.header} />
          {item.contents.map((content) => {
            return <DrawerItem title={content.title} />;
          })}
        </>
      ))}
    </div>
  );
}
