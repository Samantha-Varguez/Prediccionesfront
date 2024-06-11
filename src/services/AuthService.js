import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/auth';

const AuthService = {
    login: async (email, contraseña) => {
        try {
            const response = await axios.post(`${baseUrl}/login`, { email, contraseña });
            console.log('Inicio de sesión exitoso:', response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    register: async (nombre, genero, email, contraseña, edad) => {
        try {
            const response = await axios.post(`${baseUrl}/register`, { nombre, genero, email, contraseña, edad });
            console.log('Usuario registrado correctamente:', response.data);
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    },
    resetPassword: async (email) => {
        try {
            const response = await axios.post(`${baseUrl}/request-reset-password`, { email });
            return response.data;
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    }
};

export default AuthService;
