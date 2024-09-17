import React from 'react';
import logo from '/src/images/logo.png'; 
import backgroundImage from '/src/images/background.jpg';

const Header = ({ siteTitle, description }) => {
  return (
    <header style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      color: 'white',
      padding: '20px',
      height: '250px', 
      display: 'flex', 
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      

      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '15px',
        borderRadius: '8px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
        maxWidth: '450px',
        textAlign: 'center'
      }}>
        <img src={logo} alt="logo" style={{ width: '100%', height: 'auto' }} />
      </div>

    
      <div className='encabezados' style={{ textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>{siteTitle}</h1>
        <h2 style={{ margin: 0, fontSize: '1rem', fontWeight: 'normal' }}>{description}</h2>
      </div>
    </header>
  );
};

export default Header;
