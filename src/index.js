import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import Error404 from "./components/Error404";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route render={({ location }) => (location.state && location.state.is404 ? <Error404 /> : <App />)} />
        </div>
    </HashRouter>,
    document.getElementById("root")
);

serviceWorker.unregister();
