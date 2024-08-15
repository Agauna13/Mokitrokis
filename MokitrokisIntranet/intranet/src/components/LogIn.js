// src/components/LogIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //para usar las rutas del DOM

const LogIn = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Hook de redirección

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulación de autenticación (en una app real, harías una petición a una API)
        if (username === 'admin' && password === 'admin') {
            console.log('correcto¡¡')
            setIsAuthenticated(true);
            navigate('/Dashboard'); // Redirigir al Dashboard

        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Log In</button>
        </form>
    );
}

export default LogIn;

