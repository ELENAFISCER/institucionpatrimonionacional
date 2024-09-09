import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1>X ANIVERSARIO</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li><a href="#familia">La Familia Real</a></li>
          <li><a href="#actividades">Actividades y Agendas</a></li>
          <li><a href="#corona">La Corona Hoy</a></li>
          <li><a href="#transparencia">Transparencia</a></li>
          <li><a href="#historia">La Monarquía en la Historia</a></li>
          <li><a href="#multimedia">Archivo Multimedia</a></li>
          <li><a href="#prensa">Área de Prensa</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
