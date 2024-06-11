import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import './RegisterForm.css'; // Archivo de estilos CSS personalizados
import useAuth from '../../hooks/useAuth';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');
    const { register } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(name, gender, email, password, age);
        } catch (error) {
            console.error('Error al enviar la solicitud:', error);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={handleSubmit}>
                <h1>Regístrate</h1>
                <div className="input-box">
                    <input type="text" placeholder='Nombre completo' value={name} onChange={(e) => setName(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Género' value={gender} onChange={(e) => setGender(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Edad' value={age} onChange={(e) => setAge(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='Correo electrónico' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <FaLock className='icon' />
                </div>
                <button type="submit">Registrarse</button>
                <div className="register-link">
                    <p>¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link></p>
                </div>
            </form>
        </div>
    );
};

export default RegisterForm;
