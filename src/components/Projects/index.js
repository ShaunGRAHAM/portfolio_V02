import react, { useState, setState, useEffect, Component  } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProjectContainer, ProjectBg, ProjectData, ProjectTitle, ProjectNumber, ProjectYear, ProjectSecondary, ProjectDescribtion, ProjectDetails, ProjectCategory, ProjectDataTop, ProjectDataBottom, ProjectDimensions } from './projectsElements'
import { projectsDataEn } from '../../data/en/projectsDataEn.js';

import { motion, AnimatePresence } from 'framer-motion';
import Slider from '../Slider/index.js';


 class Project extends Component {

    constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
      project:{projectsDataEn},
      showHideProjectDetails: false,
      /*totalPages: null,
      selectedPage: null,
      autoPlay: true,
      btnPause: "⑴",*/
    };
  }
showHideComponent = () => {
  this.setState({
    showHideProjectDetails: !this.state.showHideProjectDetails

  });

}

render () {

//---------CONVERT_DATA_FILE_TO_JSON-----------------//
  //const jsonProjDataEn = JSON.stringify(projectsDataEn);
  //console.log(jsonProjDataEn); //Reaching to Project title


  /*const thisProject = this.state.project.projectsData;
  console.log(thisProject);

  const thisTitle = thisProject.map((element) => {
     return element.project.title
  });
  console.log(thisTitle);
  const title = thisTitle.map((element) => {
    return element
  });
  console.log(title);*/
//const thisProject = this.state.project.projectsData;

  const indexTotal = this.state.project.projectsDataEn.length;
  console.log(indexTotal);

const projectDetails = this.state.project.projectsDataEn.map((element) => {
  return element.project.img
});

  return (
    <div className="flex flex-col">
    {this.state.project.projectsDataEn.map((element) => {

      return(
      <ProjectContainer >
        <ProjectBg  >
          <Slider
            path={element.project.img}
            />
          <div className="relative bg-white" >
            <div className="flex flex-row bg-white relative w-100 h-auto py-0 pb-4">
              <div className="p-1.5">
                <div className="rounded-full border-solid border-2 border-black p-1 my-auto mt-0 mb-0 relative min-w-max ">
                  <div className=" text-sans text-sm font-bold sm:text-2xl leading-none sm:leading-8 py-0.5 px-3 ">
                    {element.id + 1 }
                  </div>
                </div>
              </div>
              <div className="py-1.5 pr-3">
                <ProjectTitle className=" font-medium text-sans text-md m-auto ml-0 mt-0 p-1.5 item-center leading-none justify-start sm:pl-5 sm:text-2xl sm:leading-8">
                  {element.project.title}
                  <button className="ml-2 text-xs sm:text-lg text-black relative" onClick={this.showHideComponent}>{this.state.showHideProjectDetails ? "Less" : "More"}</button>
                  {this.state.showHideProjectDetails ?
                  <ProjectSecondary className="m-auto mb-1 ">
                    <ProjectDescribtion className="font-light text-sans mb-1 text-sm sm:text-lg leading-none sm:leading-none">
                      {element.project.description}
                    </ProjectDescribtion>
                  </ProjectSecondary>
                  : "" }
                </ProjectTitle>
              </div>
              {/*<ProjectData className="">
                <ProjectDataTop className="flex flex-col mt-0 mb-0 pt-1 w-24  sm:w-48 sm:min-wm-max text-xs sm:text-sm leading-none sm:leading-4 text-right">
                  <ProjectYear className= " pl-2 sm:pl-2 pr-1 sm:pr2">
                    {element.project.year}
                  </ProjectYear>
                  <ProjectCategory className= " pl-2 sm:pl-2 pr1 sm:pr2">
                    {element.project.category}
                  </ProjectCategory>
                  <ProjectDimensions className=" pl-2 sm:pl-2 pr1 sm:pr2 ">
                    {element.project.info}
                  </ProjectDimensions>
                </ProjectDataTop>
              </ProjectData>*/}
            </div>
          </div>
        </ProjectBg>
      </ProjectContainer>
      )
      })
      }
      </div>
      )
    }
  }

 export default Project;
