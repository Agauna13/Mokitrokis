import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import Reservations from './components/Reservations';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const reservationsRef = useRef(null);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            document.getElementById('logotipo').classList.add('dark-mode');
            document.getElementById('logotipo').classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            document.getElementById('logotipo').classList.add('light-mode');
            document.getElementById('logotipo').classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    const scrollToReservations = () => {
        if (reservationsRef.current) {
            reservationsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <>
            <Header scrollToReservations={scrollToReservations} toggleTheme={toggleTheme} />
            <Presentation isDarkMode={isDarkMode} />
            <Menu />
            <div ref={reservationsRef}>
                <Reservations />
            </div>
        </>
    );
};

export default App;



