import react, { useState, setState, useEffect, Component  } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProjectContainer, ProjectBg, ProjectElmts, ProjectData, ProjectInfo, ProjectNumber, ProjectYear, ProjectPrimary, ProjectSecondary, ProjectDescribtion, ProjectDetails, ProjectCategory, ProjectDataTop, ProjectDataBottom, ProjectDimensions } from './projectsElements'
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

  //console.log(this.state.project.projectsDataEn.project);

  //console.log(this.state.project.projectsDataEn[0].projects);

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
console.log(projectDetails);


//console.log(projectDetailsImg);
  return (
    <div className="flex flex-col">
    {this.state.project.projectsDataEn.map((element) => {

      return(
      <ProjectContainer >
        <ProjectBg  >
            <Slider

            path={element.project.img}
            />

          <ProjectElmts >

            <ProjectPrimary className="pt-1">

             <ProjectNumber className=" my-auto mt-0 mb-0 leading-8">
                [{element.id + 1 } / {indexTotal}]
              </ProjectNumber>

              <ProjectInfo className=" m-auto mt-0 item-center leading-8">
                {element.project.title}
                <button className="ml-2 text-sm text-black relative" onClick={this.showHideComponent}>More</button>
              </ProjectInfo>






              <ProjectData className="">

                <ProjectDataTop className="flex flex-col mt-0 mb-0 pt-1">
                  <ProjectYear className= " px-2 leading-4">
                    {element.project.year}
                  </ProjectYear>
                  <ProjectCategory className= " px-2 leading-4">
                    {element.project.category}
                  </ProjectCategory>
                  <ProjectDimensions className=" px-2 leading-4">
                    {element.project.info}
                  </ProjectDimensions>

                </ProjectDataTop>


              </ProjectData>


            </ProjectPrimary>

            {this.state.showHideProjectDetails ?
              <ProjectSecondary className="mb-1 mr-10">
                <ProjectDetails className="pr-3">
                {element.project.info}
                </ProjectDetails>
                <ProjectDescribtion className="pl-3">
                {element.project.description}
                </ProjectDescribtion>
              </ProjectSecondary>
               : "" }

          </ProjectElmts>


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
