import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className='nav_header'>
      <img className='carpet__logo' src='/logo003.JPG' alt='logo' />
      <div className='nav__div'>
        <nav className='nav__main'>
          <NavLink to='/' exact className='nav__home'>
            Main{" "}
          </NavLink>
          <NavLink to='/order' className='nav__form'>
            Order Calculator{" "}
          </NavLink>
          <NavLink to='/request' className='nav__request'>
            Contact Us{" "}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
