import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Welcome from "./intento.js"
import Subte from './Subte';
import Clima from './Clima';
var Lat_def=-32.94682;
var Long_def=-60.63932;
function App(){
  const url="https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper";
  const [todos,setTodos]=useState();
  const [Datos_Clima,SetDatos]=useState();

const fetchApia =async ()=>{
    const repuesta=await fetch(url);
    //console.log(repuesta.status);
    const json=await repuesta.json();
    setTodos(json);
    //console.log(json);
 }
 const fetch_Clima =async (Lat,Long)=>{
  const url_Clima="https://us-central1-handy-droplet-337317.cloudfunctions.net/clima?Latitud="+Lat+"&Longi="+Long;
  const repuesta_Clima=await fetch(url_Clima);
  console.log(repuesta_Clima.status);
  const json_Clima=await repuesta_Clima.json();
  SetDatos(json_Clima);
  console.log(json_Clima);
  console.log(Long_def);
}
function Ubicacion(funcion){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      Lat_def=position.coords.latitude;
      console.log(position.coords.latitude);
      
      Long_def=position.coords.longitude;   
      console.log(position.coords.longitude);
      funcion(position.coords.latitude,position.coords.longitude);

  })
  }
}

 useEffect(()=>{
  Ubicacion(fetch_Clima);
  fetchApia();
//fetch_Clima();
},[]);
 var resultado="HOLA";
  return (
    <div className="App">
      <header className="App-header">
      <title>CLIMA</title>
      <div align="right">
        <img src={logo} className="App-logo" alt="logo" align="center" />
        </div>
        <h2>Subtes</h2>
        <ul>
        { !todos ? 'Cargando...' :  <li>{todos["results"].map((elemento,index)=>{
          return <li>{elemento}</li>
        })}</li>
        }
        </ul>
        <h2>Clima</h2>
        <ul>
        { !Datos_Clima ? 'Cargando...' :  <li>{Datos_Clima["Localidad"]} {Datos_Clima["Temperatura"]}<li>Humedad : {Datos_Clima["Humedad"]}<li>Precion: {Datos_Clima["Presion"]}<li>Viento: {Datos_Clima["Viento"]}<li>Visibilidad: {Datos_Clima["Visibilidad"]}</li></li></li></li></li>
        
        }
        </ul>  
        <p>{Long_def}</p>
      </header>
    </div>
  );
}

export default App;
