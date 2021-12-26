import "./style/Nav.css";

import React from "react";
import { useSelector } from "react-redux";
export default function Nav({ openDrawer }) {
	const user = useSelector((state) => state.user);

	return (
		<nav className="nav-bar">
			<span className="nav-title">DokiDokii</span>
			<span>
				<i className="bi bi-search search-icon"></i>
			</span>
			<div onClick={openDrawer} className="nav-profile" data-testid={"profile-navigation-test-id"}>
				<span className="profile-name" data-testid={"profile-name-test-id"}>{user.username}</span>
				<img
					data-testid={"profile-image-test-id"}
					className="profile-pic"
					src={
						"http://185.141.107.81:1111" + user.profile_picture_url
					}
					alt="profile"
				/>
			</div>
		</nav>
	);
}
