import React from "react";
export default function Order( { pizza }) {
    if (!pizza){return (
        <h3>Please wait while we build your pizza!!</h3>
    )}

    console.log(pizza);
    console.log(pizza.sauce)
    const sauce = pizza.sauce;
    const toppings = pizza.toppings;
    return(
        <div className="orderContainer">
            <h2>{pizza.name}'s order:</h2>
            <p>{pizza.size} {sauce} pizza with {toppings}.</p>
            <p>Special instructions: {pizza.specialInstructions}</p>
        </div>
    )
}