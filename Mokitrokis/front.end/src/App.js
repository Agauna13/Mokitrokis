import React, { useEffect, useState } from 'react';
import './App.css';
import { GiReturnArrow } from "react-icons/gi";
import Header from './components/Header';
/*import Presentation from './components/Presentation';*/
import TarjetaComidas from './components/TarjetaComidas';
import TarjetaBebidas from './components/TarjetaBebidas';
import MenuComidas from './components/MenuComidas';
import MenuBebidas from './components/MenuBebidas';
import Footer from './components/Footer';


const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    //const reservationsRef = useRef(null); //Lógica para el menu de reservas. Implementar en un futuro


    // Estado para controlar la tarjeta visible y el menú activo De la versión de prueba
    const [activeCard, setActiveCard] = useState(null); // 'comidas', 'bebidas', o null
    const [activeMenu, setActiveMenu] = useState(null); // 'comidas', 'bebidas', o null



    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            //document.getElementById('logotipo').classList.add('dark-mode');
            //document.getElementById('logotipo').classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            //document.getElementById('logotipo').classList.add('light-mode');
            //document.getElementById('logotipo').classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    /*const scrollToReservations = () => {
        if (reservationsRef.current) {
            reservationsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };*/

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const showMenuComidas = () => {
        setActiveCard('comidas'); // Oculta tarjeta de comidas
        setActiveMenu('comidas'); // Muestra menú de comidas
    };

    const showMenuBebidas = () => {
        setActiveCard('bebidas'); // Oculta tarjeta de bebidas
        setActiveMenu('bebidas'); // Muestra menú de bebidas
    };

    const showTarjetas = () => {
        setActiveCard(null); // Muestra ambas tarjetas
        setActiveMenu(null); // Oculta ambos menús
    };




    return (
        <div className="App">
            <Header /*scrollToReservations={scrollToReservations}*/ toggleTheme={toggleTheme} />
            
            <div className="content">
                {/* Mostrar Tarjetas si no hay menú activo */}
                {!activeMenu && (
                    <div className="contenedor">
                        {!activeCard || activeCard === 'comidas' ? (
                            <TarjetaComidas onClick={showMenuComidas} />
                        ) : null}
                        {!activeCard || activeCard === 'bebidas' ? (
                            <TarjetaBebidas onClick={showMenuBebidas} />
                        ) : null}
                    </div>
                )}

                {/* Mostrar Menú si hay un menú activo */}
                {activeMenu && (
                    <div className="menu-container">
                        {activeMenu === 'comidas' && <MenuComidas />}
                        {activeMenu === 'bebidas' && <MenuBebidas />}
                        <button className="back-button" onClick={showTarjetas}>Volver <GiReturnArrow /></button>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );

    return (
        <>


        </>
    );
};

export default App;


/*

<Presentation isDarkMode={isDarkMode} />

<div ref={reservationsRef}>
                <Reservations />
            </div>*/


