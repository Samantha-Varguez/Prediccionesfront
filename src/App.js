import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import EvaluationResults from './Components/Evaluation/MainEvaluation';
import MainDash from './Components/Dashboard/MainDash/MainDash'; // Importa el componente MainDash
import Error404 from './Errors/Error404'; // Importa el componente Error404
import './App.css'; // Asegúrate de importar tus estilos CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import TableComponent from './Components/Predicciones/Predicciones';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<MainDash />} /> {/* Ruta para el dashboard */}
        <Route path="/evaluation" element={<EvaluationResults />} />
        <Route path="/predictions" element={<TableComponent />} /> 
        {/* Esta ruta mostrará la página de error 404 para cualquier otra ruta */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
