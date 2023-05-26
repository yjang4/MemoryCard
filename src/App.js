/* https://api.giphy.com/v1/gifs/translate?api_key=g72i3yeiL9kBl8o5DmSq0Dr9I3MSa2Vw&s=cats */
import React, { useState, useEffect } from "react";
import Overview from "./components/Overview";

function Card(url) {
  this.url = url
}
function App() {
  const card = new Card('../image.jpg')
  const [img, setImg] = useState();
  const [api, setApi] = useState();

  
  const [cardArray, setCardArray] = useState([]);


  useEffect(() => {
    setCardArray(cardArray.concat(card));
    fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=beng&api_key=live_t5C5EKXsYxtt6GJwSaNDJRU487gxMPUeNHyjaXw8BQa6fCmbT96XJG4JmBTmKguC`, {mode: 'cors'})
    .then((response) => response.json())
    .then((actualData) => setApi(actualData));
  }, []);
  
  console.log(cardArray);

  const incrementCount = () => {
    console.log("lol");
  };
  return (
    <div className="App">
      {/*  <Overview cards={cardArray} />  */}
       {/* <img src={img}></img>  */}
       {api &&
          api.map(({ url }) => (
            <img src={url}/>
          ))}
      {/* <div onClick={incrementCount}/> */}
      
        

    </div>
  );
}

export default App;