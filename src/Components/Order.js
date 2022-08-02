import React from "react";
export default function Order( { pizza }) {







    if (!pizza){return (
        <h3>Please wait while we build your pizza!!</h3>
    )}

    return(
        <div className="orderContainer">
            <h2>{pizza.name}'s order:</h2>
            <p>{pizza.size} {pizza.sauce.marinara ? "marinara" : pizza.sauce.alfredo ? "alfredo" : pizza.sauce.BBQ ? "barbecue" : null} pizza.</p>
            <p>Special instructions: {pizza.specialInstructions}</p>
        </div>
    )
}
