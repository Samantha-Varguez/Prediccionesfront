import React, { useState } from 'react';
import './ExperienceSelector.css';

const ExperienceSelector = () => {
    const [selectedExperience, setSelectedExperience] = useState([]);

    const toggleExperience = (experience) => {
        if (selectedExperience.includes(experience)) {
            setSelectedExperience(selectedExperience.filter((s) => s !== experience));
        } else {
            setSelectedExperience([...selectedExperience, experience]);
        }
    };

    const startEvaluation = () => {
        console.log('Experiencias seleccionados:', selectedExperience);
    };

    return (
        <div className="experience-selector">
            <h2>Selecciona tus Experiencias:</h2>
            <div className="experience-bubbles">
            <div
                    className={`experience-bubble ${selectedExperience.includes('ninguna-experiencia') ? 'selected' : ''}`}
                    onClick={() => toggleExperience('ninguna-experiencia')}
                >
                    Ninguna Experiencia
                </div>
                <div
                    className={`experience-bubble ${selectedExperience.includes('dolor') ? 'selected' : ''}`}
                    onClick={() => toggleExperience('dolor')}
                >
                    Dolor
                </div>
                <div
                    className={`experience-bubble ${selectedExperience.includes('congestion-nasal') ? 'selected' : ''}`}
                    onClick={() => toggleExperience('congestion-nasal')}
                >
                    Congestion Nasal
                </div>
                <div
                    className={`experience-bubble ${selectedExperience.includes('escurrimiento-nasal') ? 'selected' : ''}`}
                    onClick={() => toggleExperience('escurrimiento-nasal')}
                >
                    Escurrimiento Nasal
                </div>
            </div>
            
        </div>
    );
};

export default ExperienceSelector;
