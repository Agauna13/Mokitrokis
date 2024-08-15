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
                {reservas.map(reserva => (
                    <div key={reserva.id} className="reserva-item">
                        <p>ID: {reserva.id}</p>
                        <p>Nombre: {reserva.nombre}</p>
                        <p>Teléfono: {reserva.telefono}</p>
                        <p>Fecha: {reserva.fecha}</p>
                        <p>Hora: {reserva.hora}</p>
                        <p>Personas: {reserva.personas || 'No especificado'}</p>
                        <p>Comentarios: {reserva.comentarios || 'Sin comentarios'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
