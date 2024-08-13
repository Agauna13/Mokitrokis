/*UsuariosComponent.js*/

import React,{useState} from "react";
import axios from 'axios';

const UsuariosComponent = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const logging = async(event) =>{
        event.preventDefault();
        try {
            alert('Aqui');
            
            console.log('Sending authentication');
            const authentication = {
                'username': username,
                'password': password,
                'otros': 'otro'
                
            }
            alert(authentication);
            const response = await axios.post(
                'http://localhost:5000/login',
                authentication
            );
            
            alert(response.data);
        } catch(error){
            alert('Error');
            console.log('Error con el formulario');
        }
    };


    const fetchUsuarios = async() => {
        try {
            const response = await axios.get('http://localhost:5000/usuarios');
            setUsuarios(response.data);
        } catch (error){
            console.log('Error fetching usuarios: ', error);
        }
    };
    
    return (
        <div>
            <h1>Log in</h1>
            <form className='loggingform' name='loggingform' onSubmit={logging}>
                <input 
                    name='username' 
                    type='text' 
                    value={username}
                    onChange = {(j) => setUsername(j.target.value)}
                    placeholder="Nombre de usuario"
                />
                <input
                    name='password' 
                    type="password" 
                    value={password} 
                    onChange = {(e) => setPassword(e.target.value)} 
                    placeholder="Contraseña"
                />
                <button type='submit'>Loguear</button>
            </form>
            <button onClick={fetchUsuarios}>Fetch Usuarios</button>
            <ul>
                {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.username} {usuario.password}</li>
                ))}
            </ul>
        </div>
    );
};
export default UsuariosComponent;