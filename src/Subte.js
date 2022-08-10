import React, { Component, useEffect, useState } from 'react';
function asc(){
    const url="https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper";
    
    return "HOLA llamado a funcion";
}
var todos="";
export default class Subte extends Component {
    
    constructor(props) {
        super(props);
      };
      async componentDidMount(){
        const url="https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper";
        const repuesta=await fetch(url);
        const json=await repuesta.json();
        //console.log("ESTADO SUBTE : "+repuesta.status);
        todos=json;
        console.log(todos["results"][1]);
      }
      render() {
        return <ul>
          { !todos ? 'Cargando...' :  <li>{todos["results"][0]}<li>{todos["results"][1]}<li>{todos["results"][2]}<li>{todos["results"][3]}<li>{todos["results"][4]}</li></li></li></li></li>}
          </ul>



      }}