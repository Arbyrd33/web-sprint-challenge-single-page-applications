import React, {useState} from "react";
import Order from "./Order";

export default function PizzaForm(props){
    const {submit, errors, values, change, orders} = props;
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    const onChange=(event)=>{
        const {name, value, type, checked } = event.target;
        const useValue = type === "checkbox" ? checked : value;
        change(name, useValue);
    }


    return (
        <div className="pizzaform">
            <form id="pizza-form" onSubmit={onSubmit}>
                <label>Your Name: &nbsp;
                    <input
                    id="name-input"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    onChange={onChange}
                    value = {values.name}
                    /><br/>
                </label>
                <div>{errors.name}</div>
                
                <label>Pizza Size: &nbsp;&nbsp;&nbsp;
                    <select
                    id="size-dropdown"
                    name="size"
                    onChange={onChange}
                    value={values.size}
                    >
                        <option value = "">--- Choose a Size ---</option>
                        <option value="personal">Personal (10")</option>
                        <option value="small">Small (12")</option>
                        <option value="medium">Medium (14")</option>
                        <option value="large">Large (16")</option>
                    </select>
                </label>
                <div>{errors.size}</div>

                <h3>Choose Your Toppings (up to 3):</h3>
            <div className = "toppings">
                <label>
                    Pepperoni
                    <input
                        type="checkbox"
                        name="pepperoni"
                        onChange={onChange}
                        value={values.pepperoni}
 
                    />
                </label>
                <label>
                    Bell Peppers
                    <input
                        type="checkbox"
                        name="bellPeppers"
                        onChange={onChange}
                        value={values.bellPeppers}

                    />
                </label>
                <label>
                    Italian Sausage
                    <input
                        type="checkbox"
                        name="italianSausage"
                        onChange={onChange}
                        value={values.italianSausage}

                    />
                </label>
                <label>
                    Portabella Shroomies
                    <input
                        type="checkbox"
                        name="mushrooms"
                        onChange={onChange}
                        value={values.mushrooms}

                    />
                </label>
                <label>
                    Black Olives
                    <input
                        type="checkbox"
                        name="olives"
                        onChange={onChange}
                        value={values.olives}
                    />
                </label>
                <label>
                    Artichoke Hearts
                    <input
                        type="checkbox"
                        name="chokes"
                        onChange={onChange}
                        value={values.chokes}

                    />
                </label>
                <label>
                    Anchovies
                    <input
                        type="checkbox"
                        name="chovies"
                        onChange={onChange}
                        value={values.chovies}

                    />
                </label>
                <label>
                    Bacon
                    <input
                        type="checkbox"
                        name="bacon"
                        onChange={onChange}
                        value={values.bacon}

                    />
                </label>
                <label>
                    Canadian Bacon
                    <input
                        type="checkbox"
                        name="canadianBacon"
                        onChange={onChange}
                        value={values.canadianBacon}

                    />
                </label>
                <label>
                    Pineapple
                    <input
                        type="checkbox"
                        name="pineapple"
                        onChange={onChange}
                        value={values.pineapple}

                    />
                </label>
                <label>
                    Jalapenos
                    <input
                        type="checkbox"
                        name="jalapenos"
                        onChange={onChange}
                        value={values.jalapenos}

                    />
                </label>
                <label>
                    Chicken
                    <input
                        type="checkbox"
                        name="chicken"
                        onChange={onChange}
                        value={values.chicken}

                    />
                </label>
                <label>
                    Basil
                    <input
                        type="checkbox"
                        name="basil"
                        onChange={onChange}
                        value={values.basil}

                    />
                </label>
                <label>
                    Garlic
                    <input
                        type="checkbox"
                        name="garlic"
                        onChange={onChange}
                        value={values.garlic}

                    />
                </label>
                <label>
                    Spinach
                    <input
                       type="checkbox"
                       name="spinach" 
                       onChange={onChange}
                       value={values.spinach}

                    />
                </label>
                <label>
                    Sun Dried Tomatoes
                    <input
                        type="checkbox"
                        name="tomatoes"
                        onChange={onChange}
                        value={values.tomatoes}

                    />
                </label>


<br/><br/>

                <label>
                    Extra Cheese?
                    <input
                        type="checkbox"
                        name="extraCheese"
                        onChange={onChange}
                        value={values.extraCheese}

                    />
                </label>
            </div>

                <h3>Do you have any special instructions for our kitchen or driver?</h3>
                <label>
                    Special Instructions: &nbsp;
                    <input
                        type="text"
                        name="specialInstructions"
                        id="special-text"
                        placeholder="Have a nice day!"
                        onChange={onChange}

                    />
                </label>
                <button id="order-button">Add to Order</button>
            </form>

            <div className="pizzaOrders">
                {orders.map((pizza)=>{
                    return <Order key={pizza.id} pizza = {pizza} />
                })}
                {/* < Order /> */}
            </div>
        </div>
    )
}