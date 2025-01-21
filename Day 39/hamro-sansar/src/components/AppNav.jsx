import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/country">Country</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
