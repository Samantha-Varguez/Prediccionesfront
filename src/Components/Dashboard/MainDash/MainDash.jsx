import React, { useEffect } from 'react';
import Menu from '../Menu/Menu.jsx';
import './MainDash.css';
import MultipleSelectionList from '../Selector/MultipleSelectionList';
import Search from '../Search/Search.jsx';
import Profile from '../UserProfile/Profile.jsx'
import Nosotros from '../Nosotros/Nosotros.jsx'
import Contacto from '../Contacto/Contacto.jsx'
 
const MainDash = () => {
    useEffect(() => {
        document.body.classList.add('dashboard-bg');
        return () => {
            document.body.classList.remove('dashboard-bg');
        };
    }, []);

    return (
        <div className="dashboard-container">
            <Menu />
            <Search />
            <Profile />
            <div className="content">
                <MultipleSelectionList />
                   {/* Sección Nosotros */}
                    < Nosotros />
      
                   {/* Sección Contacto */}
                    <Contacto />
            </div>
        </div>
    );
};

export default MainDash;
