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
        <div className="about-home flex m-auto pt-10 sm:pt-12 p-4 sm:p-6">
          <p className=" flex p-1 text-2xl sm:text-5xl text-sans" >
            Hi, my name is Shaun, I'm a multidisciplinary designer curently living in Lyon, France.
            My practice spreads accross a wide range of design fields from Print to Digital.
            Through the years I developed my own set of tools and skills in order to develop sustainable design solutions.
            Today, I spend most of my time focused on web3 and how decentralization is impacting the way we create, we interact and the way we work.
            Feel free to contact me, even if it is just to say hi.
          </p>
        </div>
      <Footer/>

    </motion.div>
    );
  }

export default Home;
