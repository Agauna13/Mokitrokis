import logo from './logo.svg';
import './App.css';
import Button from './Button';
import React, {useEffect, useState} from 'react';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick =() => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:5000/api/usuarios')
    .then(response => {1
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      alert(data.message)
      setData(data);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error al obtener los datos:',error);
      setError(error);
      setLoading(false);

    });
   
    
  };
  return (
    <div className='App'>
      <header className='App-Header'>
        <Button onClick={handleClick}>Enviar petición GET</Button> 
      </header>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Lista de usuarios y sus contraseñas</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item.username} {item.password}</li>
            ))}
          </ul>
        </div>
      )}     
    </div>
  );
};

export default App;
