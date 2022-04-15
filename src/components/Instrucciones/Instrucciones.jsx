import React from "react";
import style from "./Instrucciones.module.css";
import { Link } from "react-router-dom";

const Instrucciones = () => {
  return (
    <>
      <div className={style.instructions}>
        <h1>Instrucciones</h1>

        <p>El jugador tendra 5 vidas</p>

        <p>Se precentara una pregunta con 3 opciones </p>
        <p>Si el jugador contesta correctamente ganara 1 punto</p>
        <p>
          Si el jugaror selecciona una respuesta incorrecta perdera una vida
        </p>
      </div>
      <div className={style.botonVolver}>
        <Link to="/">VOLVER</Link>
      </div>
    </>
  );
};

export default Instrucciones;
