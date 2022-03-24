import react, { useState, setState, useEffect, Component  } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ProjectData, ProjectYear, ProjectSecondary, ProjectDescribtion, ProjectDetails, ProjectCategory, ProjectDataTop, ProjectDataBottom, ProjectDimensions } from './projectsElements'
import { projectsDataEn } from '../../data/en/projectsDataEn.js'

import { motion, AnimatePresence } from 'framer-motion'
import Slider from '../Slider/index.js'
import DropdownMenu from '../DropdownMenu/index.js'
import ProjectInfo from '../ToggleProjectInfo/index.js'


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

  // console.log(this.state.id);
  const projects = this.state.allProjects.projectsDataEn;
  // const id = this.state.id;
  // console.log(this.state.allProjects.projectsDataEn[1].project.title)
  // console.log(this.state.displayProject.project.title);
  // console.log(projects[id]);
  return (
    <div className="flex flex-col">
      <div class="flex justify-center">
        <DropdownMenu projects = {this.state.allProjects.projectsDataEn} updateProject={this.handleChangeProject}/>
      </div>
        <div className="">
          <div className="z-50 absolute bottom-0 left-0 bg-white w-full mb-1 px-2" >
            <ProjectInfo details={this.state.displayProject.project}/>
          </div>
          <Slider path={this.state.displayProject.project.img}/>
            <div className="flex flex-row z-10 bg-white relative w-full h-auto py-0 pb-1">
              <div className="pt-1.5 pr-3 pl-2 bg-white ">
                <div className=" items-center font-normal text-sans text-md m-auto ml-0 mt-0 item-center leading-none justify-start sm:pl-2 sm:text-3xl sm:leading-8">
                </div>
              </div>
          </div>
        </div>
      </div>
      )
    }
  }

 export default Project;
