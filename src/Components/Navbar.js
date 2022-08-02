import {Route, Link, Switch} from 'react-router-dom';
import Home from "./Home"
import PizzaForm from "./PizzaForm";


const Navbar = () => {
    return (
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/order-pizza">Pizza?</Link>
                < Switch >
                    < Route exact path = "/">
                        < Home />
                    </Route> 
                    <Route path = "/order-pizza">
                        < PizzaForm />
                    </Route>
                </Switch>
            </div>
            
    )
}
export default Navbar;