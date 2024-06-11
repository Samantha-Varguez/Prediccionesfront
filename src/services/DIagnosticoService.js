import axios from 'axios';

const API_URL = 'http://localhost:3001/api/diagnosticos';

const DiagnosticoService = {
    saveDiagnostico: async (diagnosticoData) => {
        try {
            const response = await axios.post(`${API_URL}/save-diagnostico`, diagnosticoData);
            console.log('Diagnóstico guardado correctamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al crear diagnóstico:', error);
            throw new Error('Error al crear diagnóstico: ' + error.response?.data?.message);
        }
    },
    getDiagnosticoById: async (id) => {
        try {
            const response = await axios.get(`${API_URL}/get-diagnostico/${id}`);
            console.log('Diagnóstico obtenido:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al obtener diagnóstico por ID:', error);
            throw new Error('Error al obtener diagnóstico por ID: ' + error.response?.data?.message);
        }
    },
    getDiagnosticosByUsuarioId: async (idUsuario) => {
        try {
            const response = await axios.get(`${API_URL}/get-diagnosticos/${idUsuario}`);
            console.log('Diagnosticos obtenidos:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al obtener diagnósticos por ID de usuario:', error);
            throw new Error('Error al obtener diagnósticos por ID de usuario: ' + error.response?.data?.message);
        }
    },
    getAllDiagnosticos: async () => {
        try {
            const response = await axios.get(`${API_URL}/get-all-diagnosticos`);
            console.log('Todos los diagnósticos obtenidos:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al obtener todos los diagnósticos:', error);
            throw new Error('Error al obtener todos los diagnósticos: ' + error.response?.data?.message);
        }
    },
    updateDiagnostico: async (id, diagnosticoData) => {
        try {
            const response = await axios.put(`${API_URL}/update-diagnostico/${id}`, diagnosticoData);
            console.log('Diagnóstico actualizado correctamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar diagnóstico:', error);
            throw new Error('Error al actualizar diagnóstico: ' + error.response?.data?.message);
        }
    },
    deleteDiagnostico: async (id) => {
        try {
            const response = await axios.delete(`${API_URL}/delete-diagnostico/${id}`);
            console.log('Diagnóstico eliminado correctamente:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al eliminar diagnóstico:', error);
            throw new Error('Error al eliminar diagnóstico: ' + error.response?.data?.message);
        }
    }
};

export default DiagnosticoService;
