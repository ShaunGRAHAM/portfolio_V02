import React from 'react';


const Footer = () => {
return (
      <div className="w-screen m-auto items-center fixed bottom-0 pb-2 pt-2 bg-white">
        <div className="m-auto items-center justify-center flex flex-row">
          <a className="text-md font-normal text-normal px-6 text-black transition ease-in-out delay-150 duration-150 hover:text-green-300" href="mailto:shaun.o.graham@gmail.com">MAIL</a>
          <a className="text-md font-normal text-normal px-6 text-black transition ease-in-out delay-150 duration-150 hover:text-green-300" href="https://twitter.com/GRAHAMSHAUN3">TWITTER</a>
          <a className="text-md font-normal text-normal px-6 text-black transition ease-in-out delay-150 duration-150 hover:text-green-300" href="https://orbis.club/profile/did:3:kjzl6cwe1jw145n8w7osui6aazbb3ldvsp45d3c9ohdyu20bssxnpoxkeqonmip">ORBIS</a>
        </div>
      </div>
      );
}
export default Footer;
