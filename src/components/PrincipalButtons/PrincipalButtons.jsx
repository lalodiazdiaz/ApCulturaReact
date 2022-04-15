import React from "react";
import style from "./PrincipalButtons.module.css";
import { Link } from "react-router-dom";

const PrincipalButtons = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerEnlace}>
          <Link to="/instrucciones" className={style.a}>
            Instrucciones
          </Link>
        </div>
        <div className={style.containerEnlace}>
          <Link to="/playing" className={style.a}>
            Jugar
          </Link>
        </div>
      </div>
    </>
  );
};

export default PrincipalButtons;
