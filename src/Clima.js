import React, { Component, useEffect, useState } from 'react';


//const root=ReactDOM.createRoot(document.getElementById('root'));
var Datos_Clima="";
export default class Clima extends Component {
    async componentDidMount(){
        const url="https://us-central1-handy-droplet-337317.cloudfunctions.net/clima?Latitud=-32.94682&Longi=-60.63932";
        const repuesta=await fetch(url);
        const json=await repuesta.json();
        console.log("ESTADO Clima : "+repuesta.status);
        Datos_Clima=json;
console.log(json);
      }
    render(){
        
        return (<div>
        <ul>
        { !Datos_Clima ? 'Cargando...' :  <li>{Datos_Clima["Localidad"]} {Datos_Clima["Temperatura"]}<li>Humedad : {Datos_Clima["Humedad"]}<li>Precion: {Datos_Clima["Presion"]}<li>Viento: {Datos_Clima["Viento"]}<li>Visibilidad: {Datos_Clima["Visibilidad"]}</li></li></li></li></li>
        
        }
        </ul></div>);
    }
}