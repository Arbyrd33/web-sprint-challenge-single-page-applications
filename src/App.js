import React, {useState, useEffect} from "react";
import {Route, Switch} from "react-router-dom";

import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Navbar from "./Components/Navbar";

import * as yup from "yup";
import schema from "./Validation/PizzaSchema"
import data from "./Validation/dummyData";




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


function fetchPizzas(){
  return Promise.resolve({success: true, data});
}

const initialOrders = [];

const App = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [orders, setOrders] = useState(initialOrders)

  const getPizzas = () =>{
    fetchPizzas()
    .then((res) => {
      console.log("res", res.data);
      setOrders(...orders, res.data)
    })
    .catch(err => console.error(err));
  }



  const submitPizza = () => {
    return;
  }



  useEffect(()=>{
    getPizzas();
  }, []);


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
