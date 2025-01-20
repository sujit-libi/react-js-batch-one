import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      <div className={styles.nav}>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink to="/">Home</NavLink>
          </li>
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
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.demo}>
        <ul>
          <li>
            {/* <a href="/">Home</a> */}
            <NavLink to="/">Home</NavLink>
          </li>
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
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
