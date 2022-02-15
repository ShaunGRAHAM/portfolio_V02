import React from 'react';
import styled from 'styled-components';



const FooterElements = styled.a`
 text-decoration: none;
  color: #231F20;
  &:hover {
    color: rgb(203, 213, 225);
  }
`

const Footer = () => {
return (

      <div className="w-screen m-auto items-center fixed bottom-0 pb-4">
        <div className="m-auto items-center justify-center flex flex-row">
          <FooterElements className="text-base px-6" href="mailto:shaun.o.graham@gmail.com">MAIL</FooterElements>
          <FooterElements className="text-base px-6" href="https://twitter.com/GRAHAMSHAUN3">TWITTER</FooterElements>
        </div>
      </div>
      );
}





export default Footer;
