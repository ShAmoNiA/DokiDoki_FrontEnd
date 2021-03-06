import AppointmentInfo from "./AppointmentInfo";
import ObjectPanel from "./ObjectPanel";
import DetailsPanel from "./DetailsPanel";
import React from "react";

import "./style/patientPanel.css";

export default function PatientPanel() {
	return (
		<section className="panel-holder" data-testid="patient-panel">
			<ObjectPanel />
			<AppointmentInfo />
			<DetailsPanel />
		</section>
	);
}
