import React from 'react';
import './Tarjetas.css';

const TarjetaComidas = ({ onClick }) => {
  return (
    <div className="tarjetaComidas comidas">
      <h1>¡Si tienes hambre, echa un vistazo!</h1>
      <button onClick={onClick}>NUESTRAS COMIDAS</button>
    </div>
  );
};

export default TarjetaComidas;
