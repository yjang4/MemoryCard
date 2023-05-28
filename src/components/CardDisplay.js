import React from "react";

function CardDisplay(props) {
    const { cards } = props;
    
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
    function displayPokemonCards(numOfCards) {
        const rando = randomUniqueNum(cards.length, numOfCards);

        for (let i = 0; i < numOfCards; i++) {
            displays.push(<img src={cards[rando[i]-1]}></img>);

        }
    }
    displayPokemonCards(5);

    return (
        <div>
            {/* {cards.map((card) => {
                return <div>
                    <img src={card}></img>
                    </div>;
              })} */}
            {displays}

        </div>
      );
}
export default CardDisplay;