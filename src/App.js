import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import RedirectAs404 from "./components/RedirectAs404";
// Scenes
import Home from "./scenes/Home";
import SignIn from "./scenes/SignIn";
// Styles
import "./index.scss";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <Switch>
                <Route path="/sign-in" component={SignIn} exact />
                <Route path="/" component={Home} exact/>
                <Route component={RedirectAs404} />
            </Switch>
            <MobileMenu />
            <Footer />
        </div>
    );
}

export default App;
