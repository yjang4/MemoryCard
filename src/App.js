/* https://api.giphy.com/v1/gifs/translate?api_key=g72i3yeiL9kBl8o5DmSq0Dr9I3MSa2Vw&s=cats */
import React, { useState, useEffect } from "react";
import Overview from "./components/Overview";


function App() {

  const [api, setApi] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=g72i3yeiL9kBl8o5DmSq0Dr9I3MSa2Vw&s=cat', {mode: 'cors'})
      const catData = await response.json();
      setImg(catData.data.images.original.url);
    }
    getData()
  }, []);

  return (
    <div className="App">
      <img src={img}></img>
      
        

    </div>
  );
}

export default App;