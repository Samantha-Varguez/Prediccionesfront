import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/sintomasPac';

const SintomasPacService = {
    saveSintomas: async (idUsuario, idSintomas, token) => {
        try {
            const response = await axios.post(
                `${baseUrl}/savesintomaspac`,
                { idUsuario, idSintomas },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log('Síntomas guardados correctamente:', response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    getSintomasByUsuario: async (idUsuario) => {
        try {
            const response = await axios.get(`${baseUrl}/getsintomaspac/${idUsuario}`);
            console.log('Síntomas obtenidos:', response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    deleteSintomasByUsuario: async (idUsuario) => {
        try {
            const response = await axios.delete(`${baseUrl}/deletesintomaspac/${idUsuario}`);
            console.log('Síntomas eliminados:', response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
};

export default SintomasPacService;
