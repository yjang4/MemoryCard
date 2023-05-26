
import React, { useState, useEffect } from "react";
import Overview from "./components/Overview";

function Card(url) {
  this.url = url
}
function App() {
  const card = new Card('../image.jpg')
  const [img, setImg] = useState();

  
  const [cardArray, setCardArray] = useState([]);


  useEffect(() => {
    setCardArray(cardArray.concat(card));

    fetch('https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_t5C5EKXsYxtt6GJwSaNDJRU487gxMPUeNHyjaXw8BQa6fCmbT96XJG4JmBTmKguC', {mode: 'cors'})
    .then(function(response) {
      return response.json();
      
    }).then(function(response) {
      setImg(response[0].url);
 
    });;
  }, []);
  

  const incrementCount = () => {
    console.log("lol");
  };
  return (
    <div className="App">
       <Overview cards={cardArray} /> 
       <img src={img}></img>
      <div onClick={incrementCount}>
      
        
      </div>
    </div>
  );
}

export default App;