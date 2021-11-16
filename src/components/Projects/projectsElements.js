import styled from 'styled-components'

  export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 0.7%;
  margin-right: 0.7%;
  `;

  export const ProjectBg = styled.div`
  background-color: red;
  display: flex;
  width: calc(100% - 1.4%);
  height: 100%;
  `;

  export const ProjectData = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  background-color: white;
  height: 40px;
  width: 100%;
  margin-top: 108vh;
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
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 18px;
  `;

  export const ProjectNumber = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  left: 5%;
  position: relative;
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 18px;
  `;

  export const ProjectDate = styled.div`
  position: relative;
  /*margin-top: calc(102vh - 1px);*/
  right: 5%;
  font-family: 'HelveticaNeue 65';
  color: black;
  font-size: 18px;
  `;
