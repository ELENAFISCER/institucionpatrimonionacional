import React from 'react';
import {Link} from 'gatsby'; 


const NavBar = () => {
  return (
    <>
    <nav className='navegacion'>
    <ul>
      <li><a href="#presidencia">Bienvenido a la presidencia</a></li>
      <li><a href="#historia">Conoce nuestra historia</a></li>
      <li><a href="#administracion">Consejo de administración</a></li>
      <li><a href="#oficiales">Actos oficiales e institucionales</a></li>
      <li><a href="#rey">Casa de S.M el Rey</a></li>
      <li><a href="#retratos">Retratos Oficiales</a></li>
      <li><a href="#ministerio">Ministerio de la Presidencia</a></li>
    </ul>
  </nav>
  </>
  );
};


export default NavBar;
