import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.module.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });

            if (response.status === 200) {
                // Redirige al Dashboard si el login es exitoso
                navigate('/dashboard');
            }
        } catch (error) {
            // Maneja los errores de autenticación
            if (error.response) {
                setError(error.response.data.message);
            } else {
                setError('Error en la solicitud');
            }
        }
    };

    return (
        <div className='login'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

export default Login;
