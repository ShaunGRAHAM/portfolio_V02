import styled from 'styled-components'

  export const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  `;

  export const ProjectBg = styled.div`
  background-color:red;
  display: flex;
  width: 100%;
  height: 100%;
  `;

  export const ProjectInfo = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  margin-top: calc(102vh - 1px);
  left: 50%;
  transform: translate(-50%);
  color: lightgrey;
  font-size: 14px;
  `;

  export const ProjectNumber = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  margin-top: calc(102vh - 1px);
  left: 5%;
  color: lightgrey;
  font-size: 14px;
  `;

  export const ProjectDate = styled.div`
  z-index: 10;
  display: flex;
  position: absolute;
  margin-top: calc(102vh - 1px);
  right: 5%;
  color: lightgrey;
  font-size: 14px;
  `;
