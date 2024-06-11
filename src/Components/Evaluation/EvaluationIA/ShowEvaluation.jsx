import React, { useState, useEffect } from 'react';
import diseaseService from '../../../services/diseaseService';

const ShowEvaluation = () => {
  const [enfermedad, setEnfermedad] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const enfermedadData = await diseaseService.getEnfermedadByNombreOriginal('nombreOriginal');
        setEnfermedad(enfermedadData);
      } catch (error) {
        console.error('Error fetching disease:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {enfermedad ? (
        <div>
          <h3>{enfermedad.nombreEspañol}</h3>
          <p>{enfermedad.descripcion}</p>
          {/* Agrega aquí más campos de enfermedad que quieras mostrar */}
        </div>
      ) : (
        <p>Cargando enfermedad...</p>
      )}
    </div>
  );
};

export default ShowEvaluation;
