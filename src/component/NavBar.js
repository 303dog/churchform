import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className='nav_header'>
      <h1 className='nav__brand'> irononcarpetlabels.com </h1>
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
            <i class="fas fa-store"></i>
            {" "}
          </NavLink>
          <NavLink
            to='/request'
            className='nav__request'
          >
            <i class="fas fa-comment-dots"></i>
            {" "}
          </NavLink>
          <NavLink
            to='/cart'
            className='nav__cart'
          >
            <i class="fas fa-shopping-cart"></i>
            {" "}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
