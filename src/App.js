import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Scenes
import Home from "./scenes/Home";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
