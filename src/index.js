import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// I promise I pay attention to what you say in class Casey
import "./index.css";
import App from "./App";

document.title="Bloomtech Eats";

ReactDOM.render(
<Router>
    <App />
</Router>
, document.getElementById("root"));
