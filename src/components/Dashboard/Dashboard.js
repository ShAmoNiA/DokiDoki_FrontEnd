import React, { useState, useEffect } from "react";

import Nav from "./Nav";
import Main from "./MainDashboard";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import axios from "../../helper/axiosInstance";

function App() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(async () => {
		if (!user.username) {
			const { data } = await axios.get("/profile_preview");
			console.log(data);
			if (data.success) {
				dispatch({ type: "SET_USER", user: data.profile });
			}
		}
	}, []);
	const [isOpen, open] = useState(false);

	const openNav = () => {
		open(!isOpen);
	};

	return (
		<div className="box" data-testid="profile-page-container">
			<Nav isOpen={isOpen} />
			<Main setOpen={openNav} />
		</div>
	);
}

export default App;
