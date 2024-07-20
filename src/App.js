import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Presentation from './components/Presentation';
import Reservations from './components/Reservations';

const App = () => {
    return (
        <>
            <Header />
            <Presentation />
            <Menu />
            <Reservations />
        </>
    );
};

export default App;
