import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
    return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link id="order-pizza" to="/pizza">Pizza?</Link>
            </div>
            
    )
}
export default Navbar;