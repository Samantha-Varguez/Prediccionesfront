import { useState } from 'react';
import AuthService from '../services/AuthService';

const useAuth = () => {
    const [resetPasswordMessage, setResetPasswordMessage] = useState('');
    const [token, setToken] = useState(null); // Añade un estado para almacenar el token

    const login = async (email, password) => {
        try {
            const response = await AuthService.login(email, password);
            console.log('Inicio de sesión exitoso:', response);
            localStorage.setItem('auth-token', response.token); // Guardar el token en localStorage
            return response;
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            throw error;
        }
    };
    
    
    
    

    const register = async (nombre, genero, email, contraseña, edad) => {
        try {
            await AuthService.register(nombre, genero, email, contraseña, edad);
        } catch (error) {
            console.error('Error al registrar usuario:', error);
        }
    };

    const handleResetPassword = async (email) => {
        try {
            await AuthService.resetPassword(email);
            setResetPasswordMessage('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
        } catch (error) {
            console.error('Error al solicitar restablecimiento de contraseña:', error);
            setResetPasswordMessage('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
        }
    };

    return {
        resetPasswordMessage,
        token, // Retorna el token
        login,
        register,
        handleResetPassword
    };
};

export default useAuth;
