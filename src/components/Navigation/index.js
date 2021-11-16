import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavMenu, ButtonLanguage } from './navigationElements'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
import i18n from '../../i18n';

const Navigation = () => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  const toggleProject = () => {
    scroll.scrollTo('project', {
      duration: 500,
      delay: 0,
      spy: true,
      smooth: 'easeInOutQuart',
      containerId: 'project',
    })
  }

  const changeLanguage = (ln) => {
    return () => {
      i18n.changeLanguage(ln);
      console.log(ln);
    }
  }

  return (
    <Nav  scrollNav={scrollNav} className=" mx-auto items-center">
      <NavbarContainer className=" m-auto px-6 py-2 items-center">
        <NavLink to="/" onClick={toggleHome} exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu >ABOUT</NavMenu>
        </NavLink>
        <NavLink
          to='/projects'
          //onClick={toggleProject}
          exact className="px-4"
          activeClassName="nav-active"
          style={{ textDecoration: 'none' }}>
          <NavMenu >WORK</NavMenu>
        </NavLink>
        <NavLink to="/" exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu > ALL</NavMenu>
        </NavLink>
        <NavMenu  className="px-4"> [
          <ButtonLanguage type="submit" onClick={changeLanguage('fr')}> fr </ButtonLanguage>
          /
          <ButtonLanguage type="submit" onClick={changeLanguage('en')} > en </ButtonLanguage>
          ]
        </NavMenu>


      </NavbarContainer>
    </Nav>
    );
};

export default Navigation;
