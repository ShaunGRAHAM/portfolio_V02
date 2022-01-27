import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Home from './pages/Home.js';
import Projects from './pages/Projects.js'
import About from './pages/About.js';
//import Projects from './pages/Projects.js';
import Loader from './components/Loader.js';
import { AnimatePresence, motion } from 'framer-motion';


function App () {

const location = useLocation ();
  return  (
    <div id="main-container">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          < Redirect to="/" />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
