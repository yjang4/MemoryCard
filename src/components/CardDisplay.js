import React, { useState, useEffect } from "react";

function CardDisplay() {
    
    const [images, setImg] = useState([]);
    const [savedCards, setSavedCards] = useState([]);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const displays = [];
    const difficulty = 1;
    const startingCards = 2;

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
    function checkIfCardInMemory(id) {
        const imageContainer = document.getElementById("image-container");
        if(savedCards.includes(id)) {
            emptyDiv(imageContainer);
            imageContainer.textContent = "Game Over";
        }
        else {
            setScore(score + 1)
    
        }
    }
    function emptyDiv(targetDiv) {
        while (targetDiv.firstChild) {
            targetDiv.removeChild(targetDiv.firstChild);
        }
    }
    function checkLevelUp() {
        console.log(savedCards.length)
        if(savedCards.length >= level * difficulty + startingCards) {
            setSavedCards([]);
            setLevel(level + 1)
        }
    }
    function shuffle(id) {
        checkIfCardInMemory(id);
        setSavedCards(savedCards => ([...savedCards, id]));
        var container = document.getElementById("image-container");
        var elementsArray = Array.prototype.slice.call(container.getElementsByClassName('pokemon-image'));
          elementsArray.forEach(function(element){
          container.removeChild(element);
        })
        shuffleArray(elementsArray);
        elementsArray.forEach(function(element){
        container.appendChild(element);
      })
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
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
          const urlArray = [];
          const randArray = randomUniqueNum(pokeData.results.length, level * difficulty + startingCards)
          
          for (let i = 0; i < randArray.length; i ++) {
            const newUrl = pokeData.results[randArray[i]-1].url;
            const response2 = await fetch(newUrl, {mode: 'cors'});
            const pokeData2 = await response2.json();
            urlArray.push(pokeData2.sprites.front_default);
          } 
          setImg(images => ([...images, ...urlArray]));
        }
        getData()
        
      }, []);
    
    return (
        <div id="image-container"> 
        {checkLevelUp()}
            <div id="score-board">
                <div id="level">
                    Level: {level}
                </div>
                <div id="score">
                    Score: {score}
                </div>
            </div>
            {images.map((image, index) => { 
                return <div id={index} className ="pokemon-image">
                    <img onClick={() => shuffle(index)}  src={image}></img>
                    </div>;
              })} 
            {displays}

        </div>
      );
}
export default CardDisplay;