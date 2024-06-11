import React, { useState, useEffect } from 'react';
import diseaseService from '../../../services/diseaseService'; // Importa diseaseService
import api from '../../../services/api'; // Importa tu instancia de axios con el token
import './MultipleSelectionList.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const MultipleSelectionList = () => {
  const options = [
    { "id": 1, "clave": "Comezon" },
    { "id": 2, "clave": "Sarpullido" },
    { "id": 3, "clave": "Sarpullido_en_ganglios_linfaticos" },
    { "id": 4, "clave": "Estornudos_Frecuentes" },
    { "id": 5, "clave": "Temblores" },
    { "id": 6, "clave": "Escalofrios" },
    { "id": 7, "clave": "Dolor_en_articulaciones" },
    { "id": 9, "clave": "Dolor_de_estomago" },
    { "id": 10, "clave": "Acidez" },
    { "id": 11, "clave": "Ulceras_en_la_lengua" },
    { "id": 12, "clave": "Atrofia_muscular" },
    { "id": 13, "clave": "Vomito" },
    { "id": 14, "clave": "Ardor_al_orinar" },
    { "id": 15, "clave": "Sangre_en_orina" },
    { "id": 16, "clave": "Fatiga" },
    { "id": 17, "clave": "Aumento_de_peso" },
    { "id": 18, "clave": "Ansiedad" },
    { "id": 19, "clave": "Extremidades_frias" },
    { "id": 20, "clave": "Cambios_de_humor" },
    { "id": 21, "clave": "Perdida_de_peso" },
    { "id": 22, "clave": "Inquietud" },
    { "id": 23, "clave": "Letargia" },
    { "id": 24, "clave": "Manchas_en_garganta" },
    { "id": 25, "clave": "Nivel_anormal_de_azucar" },
    { "id": 26, "clave": "Tos" },
    { "id": 27, "clave": "Fiebre_alta" },
    { "id": 28, "clave": "Ojos_hundidos" },
    { "id": 29, "clave": "Falta_de_aire" },
    { "id": 30, "clave": "Sudoracion" },
    { "id": 31, "clave": "Deshidratacion" },
    { "id": 32, "clave": "Indigestion" },
    { "id": 33, "clave": "Dolor_de_cabeza" },
    { "id": 34, "clave": "Piel_amarilla" },
    { "id": 35, "clave": "Orina_oscura" },
    { "id": 36, "clave": "Nauseas" },
    { "id": 37, "clave": "Perdida_de_apetito" },
    { "id": 38, "clave": "Dolor_detras_de_ojos" },
    { "id": 39, "clave": "Dolor_de_espalda" },
    { "id": 40, "clave": "Constipacion" },
    { "id": 41, "clave": "Dolor_abdominal" },
    { "id": 42, "clave": "Diarrea" },
    { "id": 43, "clave": "Fiebre_leve" },
    { "id": 44, "clave": "Orina_amarilla" },
    { "id": 45, "clave": "Ojos_amarillentos" },
    { "id": 46, "clave": "Fallo_hepatico_agudo" },
    { "id": 47, "clave": "Hipervolemia" },
    { "id": 48, "clave": "Hinchazon_del_estomago" },
    { "id": 49, "clave": "Hinchazon_de_ganglios_linfaticos" },
    { "id": 50, "clave": "Malestar" },
    { "id": 51, "clave": "Vision_borrosa" },
    { "id": 52, "clave": "Flemas" },
    { "id": 53, "clave": "Irritacion_de_la_garganta" },
    { "id": 54, "clave": "Ojos_rojos" },
    { "id": 55, "clave": "Presion_en_senos_paranasales" },
    { "id": 56, "clave": "Goteo_nasal" },
    { "id": 57, "clave": "Congestion_nasal" },
    { "id": 58, "clave": "Dolor_de_pecho" },
    { "id": 59, "clave": "Debilidad_de_extremidades" },
    { "id": 60, "clave": "Ritmo_cardiaco_rapido" },
    { "id": 61, "clave": "Dolor_al_evacuar" },
    { "id": 62, "clave": "Dolor_anal" },
    { "id": 63, "clave": "Heces_con_sangre" },
    { "id": 64, "clave": "Irritacion_anal" },
    { "id": 65, "clave": "Dolor_de_cuello" },
    { "id": 66, "clave": "Mareos" },
    { "id": 67, "clave": "Colicos" },
    { "id": 68, "clave": "Moretones_frecuentes" },
    { "id": 69, "clave": "Obesidad" },
    { "id": 70, "clave": "Piernas_hinchadas" },
    { "id": 71, "clave": "Vasos_sanguineos_inflamados" },
    { "id": 72, "clave": "Ojos_y_cara_hinchada" },
    { "id": 73, "clave": "Tiroides_agrandecida" },
    { "id": 74, "clave": "Uñas_quebradizas" },
    { "id": 75, "clave": "Extremidades_hinchadas" },
    { "id": 76, "clave": "Hambre_excesiva" },
    { "id": 77, "clave": "Contactos_extramaritales" },
    { "id": 78, "clave": "Labios_secos" },
    { "id": 79, "clave": "Habla_arrastrada" },
    { "id": 80, "clave": "Dolor_de_rodillas" },
    { "id": 81, "clave": "Dolor_de_cadera" },
    { "id": 82, "clave": "Debilidad_muscular" },
    { "id": 83, "clave": "Cuello_rigido" },
    { "id": 84, "clave": "Articulaciones_hinchadas" },
    { "id": 85, "clave": "Rigidez_de_movimientos" },
    { "id": 86, "clave": "Movimientos_giratorios" },
    { "id": 87, "clave": "Perdida_de_equilibrio" },
    { "id": 88, "clave": "Inestabilidad" },
    { "id": 89, "clave": "Debilidad_de_un_lado_del_cuerpo" },
    { "id": 90, "clave": "Perdida_de_olfato" },
    { "id": 91, "clave": "Incomodidad_de_vejiga" },
    { "id": 92, "clave": "Orina_con_olor_desagradable" },
    { "id": 93, "clave": "Miccion_frecuente" },
    { "id": 94, "clave": "Gases" },
    { "id": 95, "clave": "Comezon_interna" },
    { "id": 96, "clave": "Apariencia_decaida_tifos" },
    { "id": 97, "clave": "Depresion" },
    { "id": 98, "clave": "Irritabilidad" },
    { "id": 99, "clave": "Dolor_muscular" },
    { "id": 100, "clave": "Sentidos_alterados" },
    { "id": 101, "clave": "Manchas_rojas_en_el_cuerpo" },
    { "id": 102, "clave": "Dolor_estomacal" },
    { "id": 103, "clave": "Problemas_de_menstruacion" },
    { "id": 104, "clave": "Manchas_descoloridas" },
    { "id": 105, "clave": "Ojos_llorosos" },
    { "id": 106, "clave": "Apetito_elevado" },
    { "id": 107, "clave": "Miccion_excesiva" },
    { "id": 108, "clave": "Historial_Familiar" },
    { "id": 109, "clave": "Esputo_mucoide" },
    { "id": 110, "clave": "Esputo_con_color_oxidado" },
    { "id": 111, "clave": "Problemas_de_concentracion" },
    { "id": 112, "clave": "Problemas_de_vision" },
    { "id": 113, "clave": "Recibe_transfusiones_de_sangre" },
    { "id": 114, "clave": "Recibe_inyecciones_no_esteriles" },
    { "id": 115, "clave": "Coma" },
    { "id": 116, "clave": "Sangrado_estomacal" },
    { "id": 117, "clave": "Distension_abdominal" },
    { "id": 118, "clave": "Alcoholismo" },
    { "id": 119, "clave": "Hipervolemia_2" },
    { "id": 190, "clave": "Sangre_en_esputo" },
    { "id": 121, "clave": "Varices" },
    { "id": 122, "clave": "Palpitaciones" },
    { "id": 123, "clave": "Dolor_al_caminar" },
    { "id": 124, "clave": "Granos_con_pus" },
    { "id": 125, "clave": "Puntos_negros" },
    { "id": 126, "clave": "Scurring" },
    { "id": 127, "clave": "Descamacion_de_la_piel" },
    { "id": 128, "clave": "Piel_grisacea" },
    { "id": 129, "clave": "Uñas_abolladas" },
    { "id": 120, "clave": "Uñas_inflamadas" },
    { "id": 131, "clave": "Ampollas" },
    { "id": 132, "clave": "Llaga_roja_cerca_de_la_nariz" },
    { "id": 133, "clave": "Pus_amarillenta" }
  ];

  const [jsonInput, setJsonInput] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [idUsuario, setIdUsuario] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('auth-token'); // Obtener el token del localStorage
  const navigate = useNavigate(); // Obtén el navigate
  
  useEffect(() => {
    // Obtener el ID de usuario desde el servidor usando el token
    const getUserId = async () => {
      try {
        const response = await api.get('/user/profile', {
          headers: {
            Authorization: `Bearer ${token}` // Agregar el token a las cabeceras de la solicitud
          }
        });
        setIdUsuario(response.data.id); // Suponiendo que la respuesta contiene el ID del usuario
      } catch (error) {
        setError('Error al obtener ID de usuario');
        console.error('Error al obtener ID de usuario:', error);
      }
    };

    if (token) {
      getUserId();
    }
  }, [token]);

  const handleSelectOption = (e) => {
    const value = parseInt(e.target.value, 10);

    if (!selectedOptions.includes(value) && selectedOptions.length < 8) {
      setSelectedOptions([...selectedOptions, value]);
      setErrorMessage('');
    } else {
      setErrorMessage('No puedes seleccionar más de 8 síntomas');
    }
  };

  const handleRemoveOption = (option) => {
    setSelectedOptions(selectedOptions.filter((item) => item !== option));
    setErrorMessage('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options.filter((option) =>
    option.clave.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (!idUsuario) {
        setErrorMessage('ID de usuario no encontrado');
        return;
      }
        // Crear un array binario con 1 para los síntomas seleccionados y 0 para los no seleccionados
        const requestBody = {};
        options.forEach((symptom) => {
          requestBody[symptom.clave] = selectedOptions.includes(symptom.id) ? 1 : 0;
        
        });
    
        console.log(requestBody);
    
        const response = await fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
    
        const data = await response.json();
        console.log('Success:', data);
        const enfermedad = await diseaseService.getEnfermedadByNombreOriginal(data.prediction);

        // Mostrar la información en el componente ShowEvaluation
        setPrediction(enfermedad.nombreEspañol);
        setJsonInput(JSON.stringify(enfermedad, null, 2));
      } catch (error) {
        console.error('Error:', error);
        setError('Error al realizar la predicción');
      }
    }; //

  return (
    <div className="MultipleSelectionList">
      {errorMessage && <div className="error-message iphone-error">{errorMessage}</div>}
      <div className="search-input">
        <input
          type="text"
          placeholder="Buscar síntomas"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <select className="list" multiple onChange={handleSelectOption}>
        {filteredOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.clave}
          </option>
        ))}
      </select>
      <div className="SelectedOptions">
        <ul>
          {selectedOptions.map((option) => (
            <li key={option} className="bubble">
              <span>{options.find(opt => opt.id === option).clave}</span>
              <button onClick={() => handleRemoveOption(option)}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="confirmar">
        <button className="guardar" onClick={handleSubmit} disabled={selectedOptions.length === 0}>Guardar Síntomas</button>
      </div>
    </div>
  );
};

export default MultipleSelectionList;
