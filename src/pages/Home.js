import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../components/Navigation/index.js';
import Carousel from '../components/Carousel.js';
import Project from '../components/Projects/index.js';
import Footer from '../components/Footer.js';

import { AnimatePresence, motion } from 'framer-motion';

const Home = () => {

  return (

    <motion.div

      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
      >

      <Navigation/>
        <div className=" about-home-inner flex m-auto ">

          <p className=" flex text-center p-1 leading-9">
            Hi, my name is Shaun, I'm a graphic designer curently living in Lyon, France.
              <br/><br/>
            My practice spreads accross a wide range of design fields from Print to Digital.
              <br/><br/>
            Though the years I developed my own set of tools and skills in order to develop sustainable
              <br/>
            design solutions.
              <br/><br/>
            Today, I spend most of my time focused on web3 and how decentralization is changing the way we create and we work.
              <br/><br/>
            Feel free to contact me, even if it is just to say hi
          </p>
        </div>
      <Footer/>

    </motion.div>
    );
  }

export default Home;
