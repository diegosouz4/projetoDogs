import React from "react";
import Header from "../Components/Helpers/Header";

const NotFound = () => {
  return (
    <>
      <Header title='404' description="Página não encontrada" />
      <div className="container mainContainer">
        <h1 className="title">Erro 404</h1>
        <p>Página não encontrada!</p>
      </div>
    </>
  );
};

export default NotFound;
