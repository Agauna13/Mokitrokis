import axios from 'axios';
import React, { useState } from 'react';
import styles from './Reservations.module.css';

function Reservations() {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        fecha: '',
        hora: '',
        personas: '',
        comentarios: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Combina la fecha y la hora en un solo string de fecha y hora para MySQL
        const fechaHora = `${formData.fecha} ${formData.hora}`;

        // Crea un nuevo objeto de datos con el formato correcto
        const formattedData = {
            nombre: formData.nombre,
            telefono: formData.telefono,
            fecha: fechaHora,
            hora: formData.hora, // Aquí podrías no necesitar esto si ya lo combinaste en fecha
            personas: formData.personas,
            comentarios: formData.comentarios
        };

        try {
            const response = await axios.post('http://localhost:5000/api/insertar', formattedData);
            // Mostrar una alerta de éxito
            alert('Reserva enviada con éxito: ' + response.data.message);
        } catch (error) {
            // Mostrar una alerta de error
            alert('Error al enviar la reserva: ' + (error.response ? error.response.data : error.message));
        }
    };

    return (
        <div className={styles.formContainer}>
            <h1>RESERVA CON NOSOTROS</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Número de Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                />
                <input
                    type="date"
                    name="fecha"
                    placeholder="Fecha"
                    value={formData.fecha}
                    onChange={handleChange}
                    required
                />
                <input
                    type="time"
                    name="hora"
                    placeholder="Hora"
                    value={formData.hora}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="personas"
                    placeholder="Número de Personas"
                    value={formData.personas}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="comentarios"
                    placeholder="¿Tienes alguna petición especial? ¿Alguna alergia? Coméntanoslo"
                    value={formData.comentarios}
                    onChange={handleChange}
                ></textarea>
                <button className="botonSubmit" type="submit">RESERVAR</button>
            </form>
        </div>
    );
}

export default Reservations;
