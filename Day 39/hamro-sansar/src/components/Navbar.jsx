import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from './Logo';

function Navbar() {
  return (
    <div className={styles.nav}>
      <Logo />
      <ul>
        <li>
          {/* <a href="/product">Product</a> */}
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {/* <a href="/pricing">Pricing</a> */}
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
