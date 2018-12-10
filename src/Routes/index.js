import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../components/App";
import NavBar from "../components/NavBar";
import Features from "../components/Features";

export default function Routes() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <div className="container">
            <Route exact path="/" component={App} />
            <Route exact path="/features" component={Features} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
