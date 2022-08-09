import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
//var admin = require("firebase-admin/app");
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from "firebase/functions";
var serviceAccount = require("../src/serviceAccountKey.json");

const app=initializeApp({
  databaseURL: "https://handy-droplet-337317-default-rtdb.firebaseio.com",
  type: "service_account",
  project_id: "handy-droplet-337317",
  private_key_id: "6b8da469edc127478de042862591e033b5d48395",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDcQVM3QTNdC45a\nfWyk/H7vduxzpDVDTU54v+uQaROa9ditgVX/UI0yUqKAv7ReCCnRsl6RsGCDihcF\nlzkBAuBSOcOMEMIxYuR3qqL91W6spICGYWHlorp5qtnnIDlEhAvu+UgiRL681irs\n3K12IqLCcSKIQGxyIJgKJEqw7+xVRFDbCe7d9NdosyQZ79+lauZcrjIE1LhNr9VI\nJLhZf7RPPVgrU+OPAcjOMaSKjjYmLI/2iOcWjX1SZRWv4Yq8TEU9nFOBSt8GRcPG\njsc9sUkpbE1b3modhqfI1RJNT0Pzl4uMxn3HA8hG6aJz6MrZ6xi9yJ4dlXwnwl/e\nudksPs/zAgMBAAECggEACW6Me7glDdMxFSkmtv5rs8wi0AHQ0aTEu0TJIksaEkTu\nMqjFpxmALtXvD/olngzHcTnW2Ksu5RavMM7D4tEzKKB58+jfXVWYypKhLDGGCjVA\nSQ8a9P8hYuow9bevwzshr7D+b8k89GxPbWBTLGM9F0Nmxn9Z+tZ+en0llo6PpIDO\n8dsXaOzORC9U6nXzP9Pvu8EAveiM5kZl+uBoG9cYw/cBAvqa1NjJaxPt5F5VY0Ld\nbNPo+nqSbJBeQqU5b0QPG7ltXoq5GFmPR2toOiw5JF7+2PVJgoTbRE/LU4+7FeCE\ni/isA//YjngpSfg84lNfRSJ+ayQraXAAaR0RVhQccQKBgQD6R6bXPEQ9VE37Egh9\ni4OpLQsuFZau8XMCyz6dZVOZFQ6voEMyjGBleLNO/UAp0j0/G1J9pYaWc6p+pDBK\naY0TY5PWHZYGQ7Badu0bNHUxC8sJ0vTZMfSYpaniixnXZ80Cvz8Wewq0PxOyTqQF\nxmDhHO3DOpEjeK56ZgduSuzcdwKBgQDhSgDi7Q6r3j96UMJayIy6tfw+Jna4m3H4\nItdHTdd7Nsw8UacZDK3UlDr3h3JA97MrqskRjWgULEs1NReCmsZQ8lRdcgy7xr2A\nFlL+IXACaY1EWZFYbEG5pnJuT/JzeVHx++YRwOhYO76br3pEhz4YxT4FH7cGDi5X\n5llJSckTZQKBgByUqhzSKQjH48/UE1wi3nonRquQk5COyg97nj7jH1TP7slnh8Tx\n+uAblH5ktTsRYyUdvaHTkTcFJmcn4Mvemdmo+WzuG//DIxRxmEoPB4L+UcVhbcyP\nw9rasDfKorzSgbralB3BF0vWGC24hUqTiOSsJQqyWXivg10+4YJa1AmpAoGAGPh6\n4Kwl1CbuIkCRSj6wWoGRU9IvloakOzyhX+Xg3GdWe9kRDFW7brR/VLBOmaTa1xw2\n7RsfTh0auOsJkBBXquExOKpLfwSoPGo9CK3sHFhWsBy9X2+gWVN5m4CA/wuTaZ7i\nAVXAawc0OU1Z3/6dg2FZXngFcUZhHJ0LiHQFNYECgYEA6xnyb9R7OExKnHAWJ077\n5BBODWtUh3BoS/+f9cnMYsD6yCHOfQWxOYrt13XNwa8HMB7x5+/ADPALfRhiUnLA\nZi/nZ1IAm2bMg4DG1unoic4o4K0tQasUq2CRtUJ1dnkXOssKmCQcpB4FSZlOaCnK\nLODuoTl0JA5py2kjc8mpr3U=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-q34db@handy-droplet-337317.iam.gserviceaccount.com",
  client_id: "102023872153815247949",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q34db%40handy-droplet-337317.iam.gserviceaccount.com"
});
const functions = getFunctions(app);

function App(){
  /*cors();
  fetch("https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper",{
    method: 'GET',
    mode: 'no-cors',
    cache: 'default'
  }).then((response) => response.json).then((dog) => console.log(dog));
  */
  const url="https://us-central1-handy-droplet-337317.cloudfunctions.net/pupper";
  const url_Clima="https://us-central1-handy-droplet-337317.cloudfunctions.net/clima?Latitud=-32.94682&Longi=-60.63932";
  const [todos,setTodos]=useState();
  const [Datos_Clima,SetDatos]=useState();

const fetchApia =async ()=>{
    const repuesta=await fetch(url);
    //console.log(repuesta.status);
    const json=await repuesta.json();
    setTodos(json);
    //console.log(json);
 }
 const fetch_Clima =async ()=>{
  const repuesta_Clima=await fetch(url_Clima);
  console.log(repuesta_Clima.status);
  const json_Clima=await repuesta_Clima.json();
  SetDatos(json_Clima);
  console.log(json_Clima);
}
 useEffect(()=>{
fetchApia();
fetch_Clima();

 },[]);

 var resultado="HOLA";
  return (
    <div className="App">
      <header className="App-header">
        <title>CLIMA</title>
        <img src={logo} className="App-logo" alt="logo" />
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
        
      </header>
    </div>
  );
}

export default App;
