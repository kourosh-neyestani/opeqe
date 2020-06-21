import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route
                        path="/"
                        component={() => (
                            <div>
                                <h1>Home</h1>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
