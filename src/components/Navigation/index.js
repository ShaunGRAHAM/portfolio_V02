import React , { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavbarContainer, NavMenu } from './navigationElements'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll';
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

  return (
    <div  scrollNav={scrollNav} className="w-screen z-10 fixed mx-auto items-center ">
      <div className=" flex ml-3 sm:mx-auto sm:justify-center mt-3 items-center content-center">
        <NavLink
          exact to="/"
          onClick={toggleHome}
          className="flex mr-0.5 sm:mr-2 sm:py-1 rounded-full border-solid border-2 border-black transition ease-in-out delay-150 bg-white text-black hover:bg-black hover:text-white hover:border-white duration-300"
          style={{ textDecoration: 'none' }}>
          <a className="text-xs sm:text-sm font-medium py-1 sm:py-1 px-2 sm:px-4 content-center" >ABOUT</a>
        </NavLink>
        <NavLink
          to='/projects'
          //onClick={toggleProject}
          className="flex ml-0.5 sm:ml-2 sm:py-1 rounded-full border-solid border-2 border-black active:bg-black active:text-white active:border-white transition ease-in-out delay-150 bg-white text-black hover:bg-black hover:text-white hover:border-white duration-300"
          style={{ textDecoration: 'none' }}>
          <a className="text-xs sm:text-sm font-medium py-1 sm:py-1 px-2 sm:px-4 content-center" >WORK</a>
        </NavLink>
      </div>
    </div>
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
