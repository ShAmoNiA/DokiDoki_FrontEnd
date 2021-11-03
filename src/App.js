import React from "react";
// import Sidebar from "./Sidebar";
// import Feed from "./Feed";
// import Widgets from "./Widgets";
// import Profile from "./Profile";
import "./App.css";
import Login from "./screens/Login/Login";
import axios from "axios";
// import Search from "./Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isAuth: false, user: {} };
  }

  // componentDidMount() {
  //   axios
  //     .get("http://185.141.107.81:1111/api/login", {
  //       headers: { Authorization: document.cookie.slice(14) },
  //     })
  //     .then((res) => {
  //       if (res.data.status == "true") {
  //         this.setState({ isAuth: true, user: res.data });
  //       }
  //     });
  // }

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route path="/" exact>
              {this.state.isAuth ? (
                {
                  /* <Feed myId={this.state.user.id} /> */
                }
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/Login" exact>
              {!this.state.isAuth ? <Login /> : <Redirect to="/" />}
            </Route>

            <Route
              exact
              path="/user/:id"
              render={(props) => {
                const id = props.match.params.id;
                // return <Profile id={id} me={this.state.user} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
