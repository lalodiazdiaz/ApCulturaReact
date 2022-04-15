import React from "react";
import style from "./PrincipalPage.module.css";
import img from "./imagenPortada.webp";
const PrincipalPage = () => {
  return (
    <>
      <div className={style.container}>
        <h1 className={style.titulo}>Culture Play</h1>
        <img src={img} alt="imagen" width="40%" className={style.imagen} />
      </div>
    </>
  );
};

export default PrincipalPage;
