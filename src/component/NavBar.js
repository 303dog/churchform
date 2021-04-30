import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className='nav_header'>
      <div className='nav__div'>
        <nav className='nav__main'>
          <NavLink
            to='/'
            exact
            className='nav__home'
          >
            Main{" "}
          </NavLink>
          <NavLink
            to='/order'
            className='nav__form'
          >
            Order{" "}
          </NavLink>
          <NavLink
            to='/request'
            className='nav__request'
          >
            Request{" "}
          </NavLink>
          <NavLink
            to='/cart'
            className='nav__cart'
          >
            Cart{" "}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
