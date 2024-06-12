import React, { useState, useEffect } from 'react';
import './Predicciones.css';

function MapView() {
  // Estado para almacenar predicciones
  const [predicciones, setPredicciones] = useState([]);

  // useEffect para obtener los datos de las clínicas cuando el componente se monta
  useEffect(() => {
    const fetchPredicciones = async () => {
      try {
        const response = await fetch('/api/predicciones'); // Realiza una solicitud al backend
        const data = await response.json(); // Convierte la respuesta a JSON
        setPredicciones(data); // Actualiza el estado con los datos de las clínicas
      } catch (error) {
        console.error('Error fetching predicciones:', error); 
      }
    };

    fetchPredicciones(); // Llama a la función para obtener los datos
  }, []); // Se ejecuta solo una vez, al montar el componente

  return (
    <table className="tabla">
      <thead>
        <tr>
          {/* Adjust these headers based on your API response */}
          <th> Fecha </th>
          <th> Sintoma </th>
          <th> Prediccion de IA </th>
        </tr>
      </thead>
      <tbody>
        {predicciones.map(item => (
          <tr key={item.id}> 
            <td>{item.id}</td> 
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );


}
    

  
  export default MapView;
  
  