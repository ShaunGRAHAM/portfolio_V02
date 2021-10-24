import styled from 'styled-components'


export const Nav = styled.div`
  width: 100vh;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  z-index: 10;
`;
export const NavbarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  left: 50%;
  transform: translate(-50%);
`;
export const NavMenu = styled.a`
  text-decoration: none;
  font-size: 14px;

  &.active {
  }
`;
