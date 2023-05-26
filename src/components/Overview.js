// Overview.js

import React from "react";

function Overview(props) {
    const { cards } = props;
    return (
        <div>
            {cards.map((card) => {
                return <div>
                    
                    </div>;
              })}
        </div>
      );
}
export default Overview;