import "./style/Nav.css";

import React from "react";

export default function Nav({ openDrawer }) {
	return (
		<nav className="nav-bar">
			<span className="nav-title">DokiDokii</span>
			<span>
				<i className="bi bi-search search-icon"></i>
			</span>
			<div onClick={openDrawer} className="nav-profile">
				<span className="profile-name">Mahziar T.</span>
				<span className="profile-pic">
					<i className="bi bi-person-circle"></i>
				</span>
			</div>
		</nav>
	);
}
