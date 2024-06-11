import React from 'react';
import './Menu.css';

const Menu = () => {
    return (
        
        <div className="menu-container">
            <div className="menu-item">
                <a href="#">Inicio</a>
            </div>
            <div className="menu-item">
                <a href="#">Nosotros</a>
            </div>
            <div className="menu-item">
            <a href="#">Contacto</a>
            </div>
            {/* Más elementos de menú aquí */}
        </div>
    );
};

export default Menu;
