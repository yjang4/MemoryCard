import React, { useState, useEffect } from "react";

function CardDisplay() {
    
    const [images, setImg] = useState([]);
    const displays = [];
    
    function randomUniqueNum(range, outputCount) {

        let arr = []
        for (let i = 1; i <= range; i++) {
          arr.push(i)
        }
      
        let result = [];
      
        for (let i = 1; i <= outputCount; i++) {
          const random = Math.floor(Math.random() * (range - i));
          result.push(arr[random]);
          arr[random] = arr[range - i];
        }
      
        return result;
    }
    function imageClick() {
        console.log("click");
    }
    /* function displayPokemonCards(numOfCards) {
        const rando = randomUniqueNum(cards.length, numOfCards);

        for (let i = 0; i < numOfCards; i++) {
            displays.push(<img src={cards[rando[i]-1]}></img>);

        }
    } */
    //displayPokemonCards(5);
    useEffect(() => {
        async function getData() {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000', {mode: 'cors'})
          const pokeData = await response.json();
          console.log(pokeData);
          const urlArray = [];
          const randArray = randomUniqueNum(pokeData.results.length, 5)
          
          console.log(randArray);
          for (let i = 0; i < randArray.length; i ++) {
            const newUrl = pokeData.results[randArray[i]-1].url;
            console.log(newUrl);
            const response2 = await fetch(newUrl, {mode: 'cors'});
            const pokeData2 = await response2.json();
            urlArray.push(pokeData2.sprites.front_default);
          } 
          console.log(urlArray);
          setImg(images => ([...images, ...urlArray]));
        }
        getData()
        
      }, []);
    return (
        <div>
            {images.map((image) => { 
                return <div>
                    <img onClick={imageClick} className ="pokemon-image" src={image}></img>
                    </div>;
              })} 
            {displays}

        </div>
      );
}
export default CardDisplay;