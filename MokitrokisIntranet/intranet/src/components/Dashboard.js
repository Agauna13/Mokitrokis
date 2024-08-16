// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import "./dashboard.css";

const Dashboard = () => {
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Realizar la solicitud al backend para obtener las reservas
        fetch('http://localhost:3500/api/reservas')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setReservas(data))
            .catch(error => console.error('Error fetching reservas:', error));
    }, []);

    return (
        <div>
            
            <h2>Dashboard</h2>
            <div className="reservas-container">
                <div className='cabeceraTabla'>
                    <h2>ID</h2>
                    <h2>Nombre</h2>
                    <h2>Teléfono</h2>
                    <h2>Fecha</h2>
                    <h2>Hora</h2>
                    <h2>Nº Comensales</h2>
                    <h2>Comentarios</h2>

                </div>
                {reservas.map(reserva => (
                    <div key={reserva.id} className="reserva-item">
                        <p>{reserva.id}</p>
                        <p>{reserva.nombre}</p>
                        <p>{reserva.telefono}</p>
                        <p>{reserva.fecha}</p>
                        <p>{reserva.hora}</p>
                        <p>{reserva.personas || 'No especificado'}</p>
                        <p>{reserva.comentarios || 'Sin comentarios'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
