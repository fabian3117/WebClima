import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
//import React from 'react';


class MiCompo extends React.Component{
  componentDidMount(){
    var resultado="HOLA";
  fetch("https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper",{
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  }).then((response) => response.json).then((dog) => resultado=dog);
console.log("ACA");

  };
};
async function consulta (tipo,url){
  return await axios({ method: tipo, url: url});
  }
function App(){
  const url='https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper';
  
  console.log(consulta ("POST",url))
var resultado="HOLA";


return (
    <div className="App">
      <header className="App-header">
        <title>CLIMA</title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>          Edit <code>src/App.js</code> Guardar y recargar</p>
        <p>{resultado}</p>
      </header>
    </div>
  );
}

export default App;
