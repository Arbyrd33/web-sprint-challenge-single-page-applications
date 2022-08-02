import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from "./Home"
import PizzaForm from "./PizzaForm";


import Navbar from "./Components/Navbar";

const App = () => {
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
          < Switch >
                    < Route exact path = "/">
                        < Home />
                    </Route> 
                    <Route path = "/pizza">
                        < PizzaForm />
                    </Route>
                </Switch>
        </div>
      </div>
    </>
  );
};
export default App;
