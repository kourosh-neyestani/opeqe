import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
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
                <Footer />
            </div>
        </Router>
    );
}

export default App;
