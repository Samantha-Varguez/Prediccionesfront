// SymptomSelector.jsx
import React, { useState } from 'react';
import './SymptomSelector.css';

const SymptomSelector = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);

    const toggleSymptom = (symptom) => {
        if (selectedSymptoms.includes(symptom)) {
            setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
        } else {
            setSelectedSymptoms([...selectedSymptoms, symptom]);
        }
    };

    const startEvaluation = () => {
        // Aquí puedes enviar los síntomas seleccionados para la evaluación mediante IA
        console.log('Síntomas seleccionados:', selectedSymptoms);
    };

    return (
        <div className="symptom-selector">
            <h2>Selecciona tus síntomas:</h2>
            <div className="symptom-bubbles">
                <div
                    className={`symptom-bubble ${selectedSymptoms.includes('tos') ? 'selected' : ''}`}
                    onClick={() => toggleSymptom('Cansancio')}
                >
                    Cansancio
                </div>
                <div
                    className={`symptom-bubble ${selectedSymptoms.includes('falta-de-aire') ? 'selected' : ''}`}
                    onClick={() => toggleSymptom('Tos seca')}
                >
                    Tos seca
                </div>
                <div
                    className={`symptom-bubble ${selectedSymptoms.includes('sibilancias') ? 'selected' : ''}`}
                    onClick={() => toggleSymptom('Dificultad para respirar')}
                >
                    Dificultad para respirar
                </div>
                <div
                    className={`symptom-bubble ${selectedSymptoms.includes('sibilancias') ? 'selected' : ''}`}
                    onClick={() => toggleSymptom('Dolor de garganta')}
                >
                    Dolor de garganta
                </div>
                
            </div>
            
        </div>
    );
};

export default SymptomSelector;
