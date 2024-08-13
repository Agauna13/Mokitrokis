//Header.js
// src/components/Header.js
import React from 'react';
import { FaMoon } from "react-icons/fa6";
import styles from './Header.module.css';

const Header = ({ scrollToReservations, toggleTheme }) => {
    return (
        <header className={styles.cabecera}>
            <button onClick={toggleTheme} className={styles.icon}><FaMoon /></button>
            <h1>MOKITROKIS</h1>
            <button className={styles.botonReservas} onClick={scrollToReservations}>RESERVAS</button>
        </header>
    );
};

export default Header;
