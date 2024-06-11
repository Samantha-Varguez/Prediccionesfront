import React, { useEffect } from 'react';
import './MainEvaluation.css';
import ShowEvaluation from './EvaluationIA/ShowEvaluation';
import Doctor from './Doctor/Doctor';
import Map from './Maps/Map'; // Importa la clase SimpleMap

const MainEvaluation = ({ doctor }) => {
    useEffect(() => {
        document.body.classList.add('evaluation-bg');
        return () => {
            document.body.classList.remove('evaluation-bg');
        };
    }, []);

    const doctorProp = doctor || {
        nombre: "Nombre por defecto",
        apellidos: "Apellidos por defecto",
        especialidad: "Especialidad por defecto",
        clinica: {
            nombre: "Clinica por defecto",
            direccion: "Direccion por defecto"
        }
    };

    return (
        <div className="evaluation-container">
            <div className="content">
                <ShowEvaluation />
                {/* Sección Doctor */}
                <Doctor doctor={doctorProp} />
                {/* Sección del mapa */}
                <div className="map-container">
                </div>

            </div>
        </div>
        
    );
};

export default MainEvaluation;
