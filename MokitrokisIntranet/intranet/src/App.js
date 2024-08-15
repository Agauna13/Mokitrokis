import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Presentation from './components/Presentation';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const HomePage = ({ setIsAuthenticated }) => {
  return (
      <div>
          <Presentation />
          <LogIn setIsAuthenticated={setIsAuthenticated} />
      </div>
  );
}

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return(
    <div className='App'>
      <h1>Mokitrokis</h1>
      <Router>
          <Routes>
            <Route path="/" element={<HomePage setIsAuthenticated={setIsAuthenticated} />} />
            <Route 
              path="/Dashboard" 
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
      </Router>
    </div>
  )
}

export default App;
