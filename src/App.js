import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
// Scenes
import Home from "./scenes/Home";
// Styles
import "./index.scss";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header />
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
