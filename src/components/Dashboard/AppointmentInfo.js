import AppointmentItem from "./AppointmentItem";
import React from "react";

export default function AppointmentInfo() {
	return (
		<div className="appointment-info" data-testid="patient-panel-appointment-info">
			<AppointmentItem
				title="Appointment Day"
				description="Nov 9, 2021"
			/>
			<AppointmentItem title="Appointment Time" description="02.30 PM" />
			<AppointmentItem
				title="Appointment Type"
				description="New patient"
			/>
		</div>
	);
}
