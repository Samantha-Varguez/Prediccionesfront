import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './LoginForm.css'; // Archivo de estilos CSS personalizados
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetPassword, setResetPassword] = useState(false);
    const [resetPasswordMessage, setResetPasswordMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate(); // Obtiene la función de navegación

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { token } = await login(email, password);
            console.log('Token recibido:', token);
            localStorage.setItem('auth-token', token);
            console.log('Token guardado en localStorage:', token);
            navigate('/dashboard'); // Redirige a MainDash después del login exitoso
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    const handleResetPassword = async () => {
        try {
            setResetPasswordMessage('Se ha enviado un correo electrónico con instrucciones para restablecer tu contraseña.');
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
            setResetPasswordMessage('Error al enviar la solicitud. Por favor, inténtalo de nuevo.');
        }
    };
    

    return (
        <div className='LoginWapper'>
            {resetPassword ? (
                <div>
                    <h2>Restablecer contraseña</h2>
                    <p>Introduce tu correo electrónico para recibir un enlace de restablecimiento de contraseña.</p>
                    <div className="input-box">
                        <input type="email" placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <FaUser className='icon'/>
                    </div>
                    <button onClick={handleResetPassword}>Enviar solicitud</button>
                    <p>{resetPasswordMessage}</p>
                    <button onClick={() => setResetPassword(false)}>Volver al inicio de sesión</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <h1>Bienvenido</h1>
                    <div className="input-box">
                        <input type="email" placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <FaUser className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Recuérdame</label>
                        <Link to="#" className="forgot-password" onClick={() => setResetPassword(true)}>¿Has olvidado tu contraseña?</Link>
                    </div>
                    <button type="submit">Entrar</button>
                    <div className="register-link">
                        <p>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></p>
                    </div>
                </form>
            )}
        </div>
    );
};

export default LoginForm;
