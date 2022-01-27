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
  font-family: 'HelveticaNeue 65';
  color: lightgrey;

  `;

  export const ProjectDetails = styled.div`
  font-size: 14px;
  font-family: 'HelveticaNeue 65';
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
  font-family: 'LynoUlys';
  color: black;
  font-size: 30px;
  `;

  export const ProjectNumber = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  /*left: 5%;*/
  position: relative;
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 18px;
  `;


  export const ProjectData = styled.div`

  border-radius: 8px;
  `;

  export const ProjectDataTop = styled.div`


  `

  export const ProjectYear = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  /*right: 5%;*/
  font-family: 'Suisse Intl Mono v02';
  color: black;
  font-size: 12px;
  `;

  export const ProjectCategory = styled.div`
  font-family: 'Suisse Intl Mono v02';
  color: black;
  font-size: 12px;
  border-left: solid 1px black;

  `
  export const ProjectDataBottom = styled.div`
  border-top: solid 1px black;
  `
  export const ProjectDimensions = styled.div`
  font-family: 'Suisse Intl Mono v02';
  color: black;
  border-left: solid 1px black;
  font-size: 12px;
  `
