import React from "react";
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
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

const App = () => {
	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" exact>
						{auth.checkLogin() ? (
							<Dashboard />
						) : (
							<Redirect to="/login" />
						)}
					</Route>
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
