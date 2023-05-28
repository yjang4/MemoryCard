import React, { useState, useEffect } from "react";
import CardDisplay from "./components/CardDisplay";

function App() {

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/10129/', {mode: 'cors'})
      const pokeData = await response.json();
      console.log(pokeData);
    }
    getData()
    
  }, []); 

  return (
    <div className="App">
    { <CardDisplay/> }


    </div>
  );
}

export default App;

