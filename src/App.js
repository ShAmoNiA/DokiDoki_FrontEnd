import React, { useContext } from "react";
// import Sidebar from "./Sidebar";
// import Feed from "./Feed";
// import Widgets from "./Widgets";
// import Profile from "./Profile";
import "./App.css";
import Login from "./screens/Login/Login";
import axios from "axios";
import auth from "./helper/auth";
import Dashboard from "./components/Dashboard/Dashboard";
// import Search from "./Search";
import "antd/dist/antd.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainAvatar from "./components/avatar/avatar";
import ProfilePreview from "./components/profile/profilePreview";
import HomePage from "./components/HomePage/HomePage";
import { Home } from "@material-ui/icons";

import MainSearch from "./components/search/MainSearch";
import MainMessage from "./components/Chat/message";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            {/*{auth.checkLogin() ? <Dashboard/> : <Redirect to="/login"/>}*/}
            {auth.checkLogin() ? <HomePage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/Login" exact>
            <Login type="signin" />
          </Route>
          <Route path="/Signup" exact>
            <Login type="signup" />
          </Route>
          {!auth.checkLogin() ? (
            <Redirect to={"/login"} />
          ) : (
            <>
              <Route path="/dashboard">
                <Dashboard />
              </Route>

              <Route path="/search-test">
                <div style={{ overflowY: "auto", width: "100%" }}>
                  <MainSearch />
                </div>
              </Route>

              <Route path="/chat-test">
                <div
                  style={{
                    height: 500,
                    width: 500,
                    backgroundColor: "white",
                  }}
                >
                  <MainMessage
                    message="hello, its a message hello, its a message hello, its a message hello, its a message hello, its a message"
                    date="date"
                    sender
                    seen
                  />

                  <MainMessage
                    message="hello, its a message hello, its a message hello, its a message hello, its a message hello, its a message"
                    date="date"
                    seen
                    sender
                  />

                  <MainMessage message="its a message" multiple date="date" />

                  <MainMessage
                    multiple
                    sender
                    message=" its a message hello, its a message"
                    date="date"
                  />
                </div>
              </Route>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
