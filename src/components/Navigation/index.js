import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavMenu } from './navigationElements'
import { Link as LinkS } from 'react-scroll';

const Navigation = () => {
  return (
    <Nav className=" mx-auto items-center">
      <NavbarContainer className=" m-auto px-6 py-2 items-center">
        <NavLink to="/" exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu >ABOUT</NavMenu>
        </NavLink>
        <NavLink to="SelectedProjects" exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu >WORK</NavMenu>
        </NavLink>
        <NavLink to="/projects" exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu > ALL</NavMenu>
        </NavLink>
      </NavbarContainer>
    </Nav>
    );
};

export default Navigation;
