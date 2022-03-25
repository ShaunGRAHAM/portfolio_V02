import react, { useState, setState, useEffect, Component  } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { projectsDataEn } from '../../data/en/projectsDataEn.js'

import { motion, AnimatePresence } from 'framer-motion'
import Slider from '../Slider/index.js'
import DropdownMenu from '../DropdownMenu/index.js'
import ProjectDetails from '../ToggleProjectInfo/index.js'


 class Project extends Component {

    constructor(props) {
    super(props);

    this.state = {
      allProjects:{projectsDataEn},
      showHideProjectDescription: false,
      isToggleOn: false,
      displayProject: projectsDataEn[0]
    }
  }

showHideComponent = () => {
  this.setState({
    showHideProjectDescription: !this.state.showHideProjectDescription
  });
}

handleChangeProject = (id) => {

  if (!this.state.displayProject) {
    return this.setState({
      displayProject: this.state.allProjects.projectsDataEn[0]
    })
  } else {
     this.setState({
    displayProject: this.state.allProjects.projectsDataEn[id]
  })
  }
}
render(){
  return (
    <div className="flex flex-col">
      <div class="z-50 flex justify-center">
        <DropdownMenu projects = {this.state.allProjects.projectsDataEn} updateProject={this.handleChangeProject}/>
      </div>
      <div className="">
        <div
          className=
            "absolute
             bottom-1 sm:bottom-4
             left-0 sm:left-20
             w-full sm:w-fit
             rounded-none sm:rounded-xl
             mb-1 sm:mb-0
             px-2 sm:px-0
             bg-white sm:bg-transparent
             z-30" >
          <ProjectDetails details={this.state.displayProject.project}/>
        </div>
        <Slider path={this.state.displayProject.project.img}/>
        </div>
      </div>
      )
    }
  }

 export default Project;
