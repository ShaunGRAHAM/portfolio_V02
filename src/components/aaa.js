import React from 'react';
import { NavLink } from 'react-router-dom';



const Navigation = () => {
  return (
    <div className="navigation mx-auto items-center">
      <div className="navigation-inner m-auto px-6 py-2 items-center">
        <NavLink to="/" exact className="navlink-work" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <div className="menu menu-work">ABOUT</div>
        </NavLink>
        <NavLink to="/Projects" exact className="navlink-about px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <div className="menu menu-about">WORK</div>
        </NavLink>
        <NavLink to="/about" exact className="navlink-about px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <div className="menu menu-about"> ALL</div>
        </NavLink>
      </div>
    </div>
    );
};


