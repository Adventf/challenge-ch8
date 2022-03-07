import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Nav from "./component/navbar";
import Registrasi from "./component/register.js";
import Edit from "./component/edit";
import Search from "./component/search";

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/Search"]} component={Search} />
            <Route exact path="/Players" component={Registrasi} />
            <Route exact path="/Edit" component={Edit} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
