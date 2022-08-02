import React from "react";

export default function PizzaForm(){
    return (
        <div className="pizzaform">
            <form id="pizza-form">
                <label>Your Name: &nbsp;
                    <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    /><br/>
                </label>
                
                <label>Pizza Size: &nbsp;&nbsp;&nbsp;
                    <select
                    id="size-dropdown"
                    >
                        <option>--- Choose a Size ---</option>
                        <option>Personal (10")</option>
                        <option>Small (12")</option>
                        <option>Medium (14")</option>
                        <option>Large (16")</option>
                    </select>
                </label>

                <h3>Choose Your Sauce:</h3>
                <label>
                    Marinara
                    <input
                        type="checkbox"
                        name="marinara"
                    />
                </label>
                <label>
                    Alfredo Sauce
                    <input
                        type="checkbox"
                        name="alfredo"
                    />
                </label>
                <label>
                    Barbecue Sauce
                    <input
                        type="checkbox"
                        name="BBQ"
                    />
                </label>

                <h3>Choose Your Toppings (up to 2):</h3>

                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                    />
                </label>
                <label>
                    Bell Peppers
                    <input
                        type="checkbox"
                        name="bellPeppers"
                    />
                </label>
                <label>
                    Italian Sausage
                    <input
                        type="checkbox"
                        name="italianSausage"
                    />
                </label>
                <label>
                    Portabella Shroomies
                    <input
                        type="checkbox"
                        name="mushrooms"
                    />
                </label>
                <label>
                    Black Olives
                    <input
                        type="checkbox"
                        name="olives"
                    />
                </label>
                <label>
                    Artichoke Hearts
                    <input
                        type="checkbox"
                        name="chokes"
                    />
                </label>
                <label>
                    Anchovies
                    <input
                        type="checkbox"
                        name="chovies"
                    />
                </label>
                <label>
                    Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                    />
                </label>
                <label>
                    Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadianBacon"
                    />
                </label>
                <label>
                    Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                    />
                </label>
                <label>
                    Jalepenos
                    <input
                        type="checkbox"
                        name="jalepenos"
                    />
                </label>
                <label>
                    Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                    />
                </label>
                <label>
                    Basil
                    <input
                        type="checkbox"
                        name="basil"
                    />
                </label>
                <label>
                    Garlic
                    <input
                        type="checkbox"
                        name="garlic"
                    />
                </label>
                <label>
                    Spinach
                    <input
                       type="checkbox"
                       name="spinach" 
                    />
                </label>
                <label>
                    Sun Dried Tomatoes
                    <input
                        type="checkbox"
                        name="tomatoes"
                    />
                </label>




                <label>
                    Extra Cheese?
                    <input
                        type="checkbox"
                        name="extraCheese"
                    />
                </label>

                <h3>Do you have any special instructions for our kitchen or driver?</h3>
                <label>
                    Special Instructions: &nbsp;
                    <input
                        type="text"
                        name="specialInstructions"
                        id="special-text"
                        placeholder="Have a nice day!"
                    />
                </label>
                <button id="order-button">Add to Order</button>
            </form>
        </div>
    )
}