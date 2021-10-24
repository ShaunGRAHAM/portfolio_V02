import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation/index.js';
import Carousel from '../components/Carousel.js';
import Project from '../components/Project.js';
import Footer from '../components/Footer.js';




const Home = () => {
  return (

    <div >
      <Navigation/>

      <div className=" about-home-inner flex m-auto ">
        <p className=" flex-auto text-center p-1">
          Hi, my name is Shaun, I'm a graphic designer curently living in Lyon, france.
        </p>
      </div>


      <Footer/>
    </div>
    );
}
export default Home;
