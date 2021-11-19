// Fn comp with Anonymous Function 

import React from 'react';
import Menu from './Menu';

const Footer = function(){

  // ideal place for the data to be kept 
  const year = 2021; // read-only variable

  return(
    <>
      <footer className="text-center">
        <hr />
        <Menu />
        <p className="redText">Copyright {year} - Arun</p>
      </footer>
      <p className="text-center">Happily made during Nov 2021!</p>
    </>
  )
}

export default Footer;