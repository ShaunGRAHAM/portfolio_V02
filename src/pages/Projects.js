import React from 'react';
import Navigation from '../components/Navigation/index.js';
import Project from '../components/Projects/index.js';
import { AnimatePresence, motion } from 'framer-motion';


const Projects = () => {

  return (

     <motion.div

      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
      >
      <Navigation/>
      <Project/>
    </motion.div>
    );
}

export default Projects;
