import axios from 'axios';

const API_URL = 'http://localhost:3001/api/enfermedades';

const diseaseService = {
    getEnfermedadByNombreOriginal: async (nombreOriginal) => {
        try {
            const response = await axios.get(`${API_URL}/enfermedadByNombreOriginal/${nombreOriginal}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching disease by original name:', error);
            throw error;
        }
    }
};

export default diseaseService;
