import cardImg from './image.jpg'
import React, { useState, useEffect } from "react";
import Overview from "./components/Overview";

function App() {
  const [cardArray, setCardArray] = useState([]);
  const [card, setCard] = useState('');
  useEffect(() => {
    setCard('example');
    setCardArray(['fdsa']);
    console.log(cardArray);
  }, []);


  const incrementCount = () => {
    console.log("lol");
  };
  return (
    <div className="App">
      {/* <Overview cards={cardArray} /> */}
      <div onClick={incrementCount}>
        <img src={cardImg}/>
        
      </div>
    </div>
  );
}

export default App;
