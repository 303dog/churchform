import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className='nav_header'>
      <img className='carpet__logo' src='/logo003.JPG' alt='logo' />
      <div className='nav__div'>
        <nav className='nav__main'>
        <div className='nav__home'>
          <NavLink exact activeClassName='active-link' to='/' >
            Main{" "}|
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/order'>
            {" "}Order-Estimator{" "}|
          </NavLink>
          <NavLink exact activeClassName='active-link' to='/request'>
            {" "}Contact-Us{" "}
          </NavLink>
        </div>
        </nav>
      </div>
    </header>
  );
}
