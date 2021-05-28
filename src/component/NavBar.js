import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className='nav_header'>
      <div className='nav__brand'>
      <img className='allied__logo' src='https://www.alliedprintdesign.com/wp-content/uploads/2015/03/logo-allied-print-design.png' alt="logo" />
      <h1 className='nav__title'>irononcarpetlabels.com </h1>
      </div>
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
            <i className="fas fa-store"></i>
            {" "}
          </NavLink>
          <NavLink
            to='/request'
            className='nav__request'
          >
            <i className="fas fa-comment-dots"></i>
            {" "}
          </NavLink>
          <NavLink
            to='/payment'
            className='nav__payment'
          >
            <i className="fas fa-shopping-cart"></i>
            {" "}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
