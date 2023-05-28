import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import CardDisplay from "./components/CardDisplay";
import './App.css';

function App() {

  useEffect(() => {
    document.title = 'PokeMemory';
    /* async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/10129/', {mode: 'cors'})
      const pokeData = await response.json();
      console.log(pokeData);
    }
    getData() */
    
  }, []); 

  return (
    <div className="App">
      <div id="title">Pokemon Memory Card</div>
    { <CardDisplay/> }


    </div>
  );
}

export default App;

