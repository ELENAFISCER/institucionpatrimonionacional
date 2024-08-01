import React from 'react';
import logo from '/src/images/logo.png'; 
const Header = ({siteTitle,description}) => {
  return (
    <header>
      <div className='logo'>
        <img src={logo} alt="Logo"/>
      </div>
      <div className='encabezados'>
      <h1>{siteTitle}</h1>
      <h2>{description}</h2>
      </div>
      
    
    </header>
  );
};

export default Header;
