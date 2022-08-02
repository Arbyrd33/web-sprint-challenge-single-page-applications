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
      setOrders(res.data)
      // console.log(orders);
    })
    .catch(err => console.error(err));
  }



  const submitPizza = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce: {
        marinara: formValues.marinara,
        alfredo: formValues.alfredo,
        BBQ: formValues.BBQ
      },
      toppings: {
        pepperoni: formValues.pepperoni,
        bellPeppers: formValues.bellPeppers,
        italianSausage: formValues.italianSausage,
        mushrooms: formValues.mushrooms,
        olives: formValues.olives,
        chokes: formValues.chokes,
        chovies: formValues.chovies,
        bacon: formValues.bacon,
        canadianBacon: formValues.canadianBacon,
        pineapple: formValues.pineapple,
        chicken: formValues.chicken,
        basil: formValues.basil,
        garlic: formValues.garlic,
        spinach: formValues.spinach,
        tomatoes: formValues.tomatoes,
        extraCheese: formValues.extraCheese
      },
      specialInstructions: formValues.specialInstructions.trim()
    };
    console.log("New pizza added, details: ", newPizza);
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
                        < PizzaForm submit = {submitPizza} values = {formValues} errors = {formErrors} orders={orders}/>
                    </Route>
                </Switch>
      </div>
    </>
  );
};
export default App;
