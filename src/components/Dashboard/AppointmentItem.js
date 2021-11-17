import React from "react";
export default function AppointmentItem(props) {
	return (
		<div>
			<span className="app-info-title">{props.title}</span>
			<span className="app-info-description">{props.description}</span>
		</div>
	);
}
