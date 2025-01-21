import React from 'react';
import styles from './AppLayout.module.css';
import AppNav from '../components/AppNav';

function AppLayout() {
  return (
    <div className={styles.app}>
      <AppNav />
      This is dashboard
    </div>
  );
}

export default AppLayout;
