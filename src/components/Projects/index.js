import react, { useState, setState, useEffect, Component  } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProjectContainer, ProjectBg, ProjectData, ProjectInfo, ProjectNumber, ProjectDate } from './projectsElements'
import { projectsDataEn } from '../../data/en/projectsDataEn.js';


 class Project extends Component {

    constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
      project:{projectsDataEn},
      /*totalPages: null,
      selectedPage: null,
      autoPlay: true,
      btnPause: "⑴",*/
    };
  }

getProjectTitle = () => {
  const thisProject = this.state.project.projectsData;
  const thisTitle = thisProject.map((element) => {
       return element.project.title
    });
}

render () {



  console.log(this.state.project.projectsDataEn.project);
  //console.log(this.state.project.projectsDataEn[0].projects);
  const jsonProjDataEn = JSON.stringify(projectsDataEn);
  console.log(jsonProjDataEn); //Reaching to Project title
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

  return (
    <div >
    {this.state.project.projectsDataEn[0].projects.map((element) => {
      return (
      <ProjectContainer >
        <ProjectBg >
          <img src={element.project.imgCover} className="object-cover object-scale-down w-full h-auto" alt=""/>
          <ProjectData>

              <ProjectNumber className=" my-auto mt-3.5 ">
                [{element.id + 1 } / {element.id.length}]
              </ProjectNumber>
              <ProjectInfo className=" mt-3.5 m-auto item-center">
                {element.project.title}
              </ProjectInfo>
              <ProjectDate className=" mt-3.5 my-auto ">
                {element.project.year}
              </ProjectDate>

          </ProjectData>
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
