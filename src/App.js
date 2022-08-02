import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Navbar from "./Components/Navbar";



const initialValues = {
  name: "",
  size: "",

  sauce: {
    marinara: false,
    alfredo: false,
    BBQ: false
  },

  toppings: {
    pepperoni: false,
    bellPeppers: false,
    italianSausage: false,
    mushrooms: false,
    olives: false,
    chokes: false,
    chovies: false,
    bacon: false,
    canadianBacon: false,
    pineapple: false,
    chicken: false,
    basil: false,
    garlic: false,
    spinach: false,
    tomatoes: false,
    extraCheese: false,
  },

  specialInstructions: ""
}

const initialErrors = {
  name: "",
  size: "",
}
const App = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const submitPizza = () => {
    return;
  }

  return (
    <>
      <div className="container">
        <div className="App-header">
          <div className="header-left">
            <h1>BloomTech Eats</h1>
            <p>pizza made while you write your code</p>
          </div>
          <div className="header-right">
        < Navbar />
          </div>
        </div>
        < Switch >
                    < Route exact path = "/">
                        < Home />
                    </Route> 
                    <Route path = "/pizza">
                        < PizzaForm submit = {submitPizza} values = {formValues} errors = {formErrors}/>
                    </Route>
                </Switch>
      </div>
    </>
  );
};
export default App;
