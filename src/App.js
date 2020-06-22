import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
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
                <MobileMenu />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
