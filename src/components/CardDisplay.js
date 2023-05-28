import React from "react";

function CardDisplay(props) {
    const { cards } = props;
    const random = Math.floor(Math.random() * 100);

    return (
        <div>
            {/* {cards.map((card) => {
                return <div>
                    <img src={card}></img>
                    </div>;
              })} */}
              <img src={cards[random]}></img>
              {console.log("fdsa")}
        </div>
      );
}
export default CardDisplay;