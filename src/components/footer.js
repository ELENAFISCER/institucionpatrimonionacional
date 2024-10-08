import React from 'react';



const Footer = () => (
  <footer style={{ backgroundColor: '#333', color: '#FFF', padding: '40px 20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'left' }}>
      
      <div>
        <h2 style={{ fontSize: '18px' }}>VISITA</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>Descubre los Reales Sitios</li>
          <li>Jardines Históricos y Espacios Naturales</li>
        </ul>
      </div>
      
      <div>
        <h2 style={{ fontSize: '18px' }}>ACTUALIDAD</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>Noticias</li>
          <li>Agenda</li>
          <li>Conciertos</li>
          <li>Exposiciones</li>
          <li>Conferencias</li>
          <li>Objetivo Patrimonio</li>
          <li>Concurso de fotografía Infanta Sofía</li>
          <li>Premio Reina Sofía de Poesía Iberoamericana</li>
          <li>Multimedia</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '18px' }}>COLECCIONES</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>Explora las Colecciones Reales</li>
          <li>Archivo General de Palacio</li>
          <li>Real Biblioteca de Palacio</li>
          <li>Real Biblioteca del Monasterio de El Escorial</li>
          <li>Restauración</li>
          <li>Préstamos para exposiciones</li>
          <li>Publicaciones</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '18px' }}>EDUCACIÓN</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>Actividades</li>
          <li>Biblioteca de Recursos didácticos</li>
          <li>Concurso de pintura infantil y juvenil</li>
          <li>Programa de escuelas taller y talleres de empleo</li>
          <li>Becas</li>
          <li>Investigadores</li>
        </ul>
      </div>

      <div>
        <h2 style={{ fontSize: '18px' }}>NOSOTROS</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
          <li>Sobre Patrimonio Nacional</li>
          <li>Cartas de servicios</li>
          <li>Transparencia</li>
          <li>Empleo público</li>
          <li>Entradas</li>
          <li>¿Seguimos en contacto?</li>
          <li>Arrendamientos</li>
          <li>Solicitudes de rodaje</li>
          <li>Cesión de espacios de Patrimonio Nacional</li>
        </ul>
      </div>
    </div>
    
    <div style={{ borderTop: '1px solid #555', marginTop: '20px', paddingTop: '20px', textAlign: 'center' }}>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '20px', display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Accesibilidad</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Aviso legal</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Política de privacidad</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Política de cookies</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Certificación ENS</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Contacto</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>RSS</a></li>
        <li><a href="#" style={{ color: '#FFF', textDecoration: 'none' }}>Mapa web</a></li>
      </ul>
      
    
      
      <div style={{ marginTop: '20px' }}>
        <p>Síguenos en</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <a href="#"><img src="tiktok-icon.png" alt="TikTok" style={{ width: '30px' }} /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" style={{ width: '30px' }} /></a>
          <a href="#"><img src="youtube-icon.png" alt="YouTube" style={{ width: '30px' }} /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" style={{ width: '30px' }} /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
