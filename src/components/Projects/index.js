import react, { useState, setState, useEffect, Component  } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ProjectContainer, ProjectBg, ProjectInfo, ProjectNumber, ProjectDate } from './projectsElements'
import { projectsData } from '../../data/projectsData.js';


 class Project extends Component {

    constructor(props) {
    super(props);
    // N’appelez pas `this.setState()` ici !
    this.state = {
      project:{projectsData},
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



  /*console.log(this.state.project.projectsData[1].project.title); //Reaching to Project title
  const thisProject = this.state.project.projectsData;
  console.log(thisProject);

  const thisTitle = thisProject.map((element) => {
     return element.project.title
  });
  console.log(thisTitle);
  const title = thisTitle.map((element) => {
    return element
  });
  console.log(title);*/
const thisProject = this.state.project.projectsData;

  return (
    <div >
    {this.state.project.projectsData.map((element) => {
      return (
      <ProjectContainer >
        <ProjectBg >
          <img src={element.project.imgCover} className="object-cover object-scale-down w-full h-auto" alt=""/>
          <ProjectNumber>
            {element.id + 1 }
          </ProjectNumber>
          <ProjectInfo className=" m-auto item-center">
            {element.project.title}
          </ProjectInfo>
          <ProjectDate>
            {element.project.year}
          </ProjectDate>
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
