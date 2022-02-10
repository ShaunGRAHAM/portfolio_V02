import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.div`
  width: 100vh;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  z-index: 1000;
`;

export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
`;

export const NavMenu = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: black;
`;

export const ButtonLanguage = styled.button`
  position: relative;
  color: black;
  font-size: 14px;
`;
