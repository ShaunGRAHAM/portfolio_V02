import styled from 'styled-components'

  export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 0.7%;
  margin-right: 0.7%;
  `;

  export const ProjectBg = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: calc(100% - 1.4%);
  height: 100%;
  `;

  export const ProjectElmts = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  /*height: 40px;
  width: 100%; */

  `;

  export const ProjectPrimary = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: white;
  height: auto;
  width: 100%;
  `;

  export const ProjectSecondary = styled.div`
  position: relative;
  display: flex;
  right; 5%;

  `;

  export const ProjectDescribtion = styled.div`
  font-size: 14px;
  font-family: 'HelveticaNeue 55';
  color: lightgrey;

  `;

  export const ProjectDetails = styled.div`
  font-size: 14px;
  font-family: 'HelveticaNeue 55';
  color: lightgrey;
  `;

  export const ProjectInfo = styled.div`
  /*z-index: 10;
  display: flex;
  position: absolute;
  margin-top: calc(102vh - 1px);
  left: 50%;
  transform: translate(-50%);
  color: lightgrey;
  font-size: 14px;*/
  position: relative;
  font-family: 'HelveticaNeue';
  color: black;
  font-size: 28px;
  `;

  export const ProjectNumber = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  /*left: 5%;*/
  position: relative;
  font-family: 'HelveticaNeue 55';
  color: black;
  font-size: 28px;
  `;


  export const ProjectData = styled.div`
  `;

  export const ProjectDataTop = styled.div`
  `;

  export const ProjectYear = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  /*right: 5%;*/
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 14px;
  `;

  export const ProjectCategory = styled.div`
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 14px;
  `;
  export const ProjectDataBottom = styled.div`
  `;

  export const ProjectDimensions = styled.div`
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 14px;
  `;
