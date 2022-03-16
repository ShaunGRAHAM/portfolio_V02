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
    <Nav  scrollNav={scrollNav} className=" mx-auto items-center ">
      <NavbarContainer className=" m-auto pt-4 items-center">
        <NavLink
          exact to="/"
          onClick={toggleHome}
          className="px-6 "
          style={{ textDecoration: 'none' }}>
          <NavMenu className="text-sm" >ABOUT</NavMenu>
        </NavLink>
        <NavLink
          to='/projects'
          //onClick={toggleProject}
          exact className="px-6"
          style={{ textDecoration: 'none' }}>
          <NavMenu className="text-sm" >WORK</NavMenu>
        </NavLink>



      </NavbarContainer>
    </Nav>
    );
};

export default Navigation;

/*<NavLink to="/" exact className="px-4" activeClassName="nav-active" style={{ textDecoration: 'none' }}>
          <NavMenu > ALL</NavMenu>
        </NavLink>
        <NavMenu  className="px-4"> [
          <ButtonLanguage type="submit" onClick={changeLanguage('fr')}> fr </ButtonLanguage>
          /
          <ButtonLanguage type="submit" onClick={changeLanguage('en')} > en </ButtonLanguage>
          ]
        </NavMenu>*/
