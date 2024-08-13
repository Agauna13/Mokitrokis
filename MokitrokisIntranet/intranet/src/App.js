//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import UsuariosComponent from './components/UsuariosComponent';
import Presentation from './components/Presentation';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import './App.css';


const HomePage = () => {
  return (
      <div>
          <Presentation />
          <LogIn />
      </div>
  );
}

const App = () => {
  return(
    <div className='App'>
      <h1>Mokitrokis</h1>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path = "/Dashboard" element = {<Dashboard />}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App;