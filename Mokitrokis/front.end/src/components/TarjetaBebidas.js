import React from 'react';
import './Tarjetas.css';

const TarjetaBebidas = ({ onClick }) => {
  return (
    <div className="tarjetaBebidas bebidas">
      <h1>Tanto para acompañar como para disfrutar de la terraza, aquí tienes nuestras bebidas.</h1>
      <button onClick={onClick}>NUESTRAS BEBIDAS</button>
    </div>
  );
};

export default TarjetaBebidas;
