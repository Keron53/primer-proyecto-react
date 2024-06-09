import "./styles/TercerComponente.css";
//rafc
import React from "react";
const string = "Esto es un texto";
const number = 12345;
const array = ["Curso de REACT", "Youtube", 4, 1000];
const boolean = true;
const funcion = () => 1 + 1;
const objeto = { nombre: "Curso de Javascript", duracion: 4 };
const fecha = new Date();



export const TercerComponente = () => {
  return (
    //<h3>{funcion()}</h3>
    //<h4>{ JSON.stringify(objeto)}</h4>
    //<div>
    //<Fragment>
    <>
      <h1>Variables en JSX</h1>
      <h4>Variables tipo String:</h4> <p>{string}</p>
      <h4>Variables tipo number:</h4> <p>{number}</p>
      <h4>Variables tipo array:</h4> <p>{array}</p>
      <h4>Variables tipo boolean:</h4> <p>{boolean}</p>
      <h4>Variables tipo funcion:</h4> <p>{funcion}</p>
    </>
    //</div>
    //</fragment>
  );
};
