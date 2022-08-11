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
  console.log(url_Clima)
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
        <img src={logo} className="App-logo" alt="logo" align="center" />
        <div className='mdc-mdc-card mdc-card--outlined'>
        <h2>Subtes</h2>
        <ul>
        { !todos ? 'Cargando...' :  <li>{todos["results"].map((elemento,index)=>{
          return <li>{elemento}</li>
        })}</li>
        }
        </ul>
        </div>
        <div className='Clima'>
        <h2>Clima</h2>
        
        <ul>
        { !Datos_Clima ? 'Cargando...' : <div> <li>{Datos_Clima["Localidad"]}</li><li>{Datos_Clima["Temperatura"]}</li><li>Humedad : {Datos_Clima["Humedad"]}</li><li>Precion : {Datos_Clima["Presion"]}</li><li>Viento :{Datos_Clima["Viento"]}</li><li>Visibilidad: {Datos_Clima["Visibilidad"]}</li></div>
        
        }
        </ul>  
        </div>
      </header>
    </div>
  );
}

export default App;
