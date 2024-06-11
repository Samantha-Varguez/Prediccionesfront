import React from 'react';
import './style.css'; // Asegúrate de importar tu hoja de estilos

const Error404 = () => {
  return (
    <div className="background">
      <div className="ground"></div>
      <div className="container">
        <div className="left-section">
          <div className="inner-content">
            <h1 className="heading">404</h1>
            <p className="subheading">La página que buscabas ya no está aquí. Parece que se perdió en el vasto mundo digital. ¿Quizás quieras regresar al inicio?</p>
          </div>
        </div>
        <div className="right-section">
          <svg className="svgimg" xmlns="http://www.w3.org/2000/svg" viewBox="51.5 -15.288 385 505.565">
            <g className="bench-legs">
              <path d="M202.778,391.666h11.111v98.611h-11.111V391.666z M370.833,390.277h11.111v100h-11.111V390.277z M183.333,456.944h11.111
                v33.333h-11.111V456.944z M393.056,456.944h11.111v33.333h-11.111V456.944z" />
            </g>
            <g className="top-bench">
              <path d="M396.527,397.917c0,1.534-1.243,2.777-2.777,2.777H190.972c-1.534,0-2.778-1.243-2.778-2.777v-8.333
                c0-1.535,1.244-2.778,2.778-2.778H393.75c1.534,0,2.777,1.243,2.777,2.778V397.917z M400.694,414.583
                c0,1.534-1.243,2.778-2.777,2.778H188.194c-1.534,0-2.778-1.244-2.778-2.778v-8.333c0-1.534,1.244-2.777,2.778-2.777h209.723
                c1.534,0,2.777,1.243,2.777,2.777V414.583z M403.473,431.25c0,1.534-1.244,2.777-2.778,2.777H184.028
                c-1.534,0-2.778-1.243-2.778-2.777v-8.333c0-1.534,1.244-2.778,2.778-2.778h216.667c1.534,0,2.778,1.244,2.778,2.778V431.25z"
              />
            </g>
            {/* Agrega aquí el resto del SVG si es necesario */}
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Error404;
