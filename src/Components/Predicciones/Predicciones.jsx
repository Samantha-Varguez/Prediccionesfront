import React, { useState, useEffect } from 'react';
import './Predicciones.css';

const TableComponent = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('https://api.example.com/data') // Replace with your API URL
        .then(response => response.json())
        .then(data => {
          setData(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
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
          {data.map(item => (
            <tr key={item.id}> 
              <td>{item.id}</td> 
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TableComponent;
  