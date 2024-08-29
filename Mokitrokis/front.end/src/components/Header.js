//Header.js
// src/components/Header.js
import React from 'react';
import { FaMoon } from "react-icons/fa6";
import styles from './Header.module.css';

const Header = ({ scrollToReservations, toggleTheme }) => {   //aqui faltaría el parametro scrollToReservations presente para que haga el scroll al pulsar el botón
    return (
        <header className={styles.cabecera}>
            <button onClick={toggleTheme} className={styles.icon}><FaMoon /></button>
            <h1>MOKITROKIS</h1>
            
        </header>
    );
};

export default Header;




/*const Header = ({ scrollToReservations, toggleTheme }) => {   Version previ a la implementación de las tarjetas
    return (
        <header className={styles.cabecera}>
            <button onClick={toggleTheme} className={styles.icon}><FaMoon /></button>
            <h1>MOKITROKIS</h1>
            <button className={styles.botonReservas} onClick={scrollToReservations}>RESERVAS</button>            
        </header>
    );
};   */
