import React from 'react';
import logo from '/src/images/logo.png'; // Ajusta esta ruta
const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoContainerStyle}>
        <img src={logo} alt="Logo" style={logoStyle} />
      </div>
      <h1>PATRIMONIO NACIONAL</h1>
      <nav>
        <ul style={navStyle}>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#mision">Misión</a></li>
          <li><a href="#vision">Visión</a></li>
          <li><a href="#valores">Valores</a></li>
        </ul>
      </nav>
    </header>
  );
};


const headerStyle = {
  backgroundColor: '#282C34',
  padding: '10px',
  color: 'white',
  textAlign: 'center',
  margin: '0 auto',
  lineHeight: '1.2'
  
};

const logoContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '0px',
};

const logoStyle = {
  width: '200px', // Ajusta el tamaño del logo según tus necesidades
  height: 'auto',
  margin:'0',

};

const navStyle = {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  margin:0
};

export default Header;
