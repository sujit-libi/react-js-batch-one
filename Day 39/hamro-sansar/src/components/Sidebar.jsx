import React from 'react';
import AppNav from '../components/AppNav';
import Logo from '../components/Logo';

import styles from './Sidebar.module.css';
import { Outlet } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
}

export default Sidebar;
