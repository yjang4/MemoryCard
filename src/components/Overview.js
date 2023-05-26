// Overview.js

import React from "react";
import logo from './image.jpg';

function Overview(props) {
    const { cards } = props;
    return (
        <div>
            {cards.map((card) => {
                return <div>
                    <img src={logo}></img>
                    </div>;
              })}
        </div>
      );
}
export default Overview;