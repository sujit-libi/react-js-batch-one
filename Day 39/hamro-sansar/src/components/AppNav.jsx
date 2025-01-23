import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

function AppNav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/dashboard/cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/country">Country</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AppNav;
