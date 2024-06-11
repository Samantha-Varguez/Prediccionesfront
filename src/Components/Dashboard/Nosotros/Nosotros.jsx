// Nosotros.js
import React from 'react';
import './Nosotros.css'; // Import CSS file for styling
import empresaImage from '../../Assets/image.png'; // Importa la imagen

const Nosotros = () => {
  return (
    <div className="Contenido">
      <img src={empresaImage} alt="Imagen de la empresa" className="ImagenEmpresa" />
      <h2>Smart Health</h2>
      <p>Somos una empresa comprometida con la salud y el bienestar de las personas...</p>
      <p>Por medio de nuestra herramienta de selección de síntomas, buscamos brindar a nuestros usuarios la posibilidad de identificar sus signos y síntomas de manera rápida y precisa, para que puedan recibir un diagnóstico tentativo y orientación sobre el tipo de especialista que podrían necesitar.</p>
      <p>En nuestras clínicas y hospitales, contamos con un equipo multidisciplinario de profesionales altamente calificados y equipamiento de última generación para ofrecer la mejor atención médica posible.</p>
      <p>Recuerda que nuestra herramienta de selección de síntomas no reemplaza la consulta médica profesional. Siempre es importante consultar a un médico para obtener un diagnóstico y tratamiento adecuados.</p>

    </div>
  );
}

export default Nosotros;
