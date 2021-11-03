import React from "react";
import "./App.css";
import Login from "./screens/Login/Login";
import axios from "axios";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";
import { Component } from "react";

const App = () => {
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
};

export default App;
