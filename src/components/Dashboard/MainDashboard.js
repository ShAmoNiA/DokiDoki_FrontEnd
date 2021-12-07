import React from "react";
import PatientPanel from "./PatientPanel";

import "./style/main.css";
import Profile from "./profile.png";
import { useSelector } from "react-redux";
export default function Main(props) {
	const user = useSelector((state) => state.user);
	return (
		<section
			className="main-container"
			data-testid="dashboard-main-container"
		>
			<header>
				<i onClick={props.setOpen} className="bi bi-list side-nav"></i>
				<i className="bi bi-bell notification"></i>

				<span
					className="header-prof-name"
					data-testid="header-profile-name"
				>
					{user.username}
				</span>
				<img
					className="header-prof"
					src={
						"http://185.141.107.81:1111" + user.profile_picture_url
					}
					alt="profile-photo"
				/>
			</header>
			<PatientPanel />
		</section>
	);
}
