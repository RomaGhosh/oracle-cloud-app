import { useState } from 'react';
import './App.css';
import { Header } from './components';
import { SideDrawer } from './components/SideDrawer/SideDrawer';
import { Home } from './view';

function App() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  return (
    <div>
      <Header onMenuClick={toggleDrawer} />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Home />

        {isDrawerOpen && <SideDrawer />}

      </div>
    </div>
  );
}

export default App;
