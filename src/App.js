import React, { useState, useEffect } from "react";
import CardDisplay from "./components/CardDisplay";

function App() {

  const [img, setImg] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100', {mode: 'cors'})
      const pokeData = await response.json();
      for (let i = 0; i < pokeData.results.length; i ++) {
        const newUrl = pokeData.results[i].url;
        const response2 = await fetch(newUrl, {mode: 'cors'});
        const pokeData2 = await response2.json();
        const spriteUrl = pokeData2.sprites.front_shiny;
        setImg(img => ([...img, spriteUrl]));
        
      } 
    
    }
    getData()
    
  }, []);

  return (
    <div className="App">
      <CardDisplay cards={img}/>

    </div>
  );
}

export default App;