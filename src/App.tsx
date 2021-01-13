import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import GHUsers from "./components/GHUsers";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/ghusers" component={GHUsers} />
        </Switch>
      </Router>
    </div>
  );
}
