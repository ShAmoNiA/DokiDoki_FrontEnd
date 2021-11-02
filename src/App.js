import React from "react";
import "./App.css";
import Login from "./screens/Login/Login";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/Login" exact>
              <Login type="signin" />
            </Route>
            <Route path="/Signup" exact>
              <Login type="signup" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
