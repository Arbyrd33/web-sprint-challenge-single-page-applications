import React from "react";
import {Route, Link, Switch} from 'react-router-dom';
import Home from "./Home"
import PizzaForm from "./PizzaForm";


const Navbar = () => {
    return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link id="order-pizza" to="/pizza">Pizza?</Link>
            </div>
            
    )
}
export default Navbar;