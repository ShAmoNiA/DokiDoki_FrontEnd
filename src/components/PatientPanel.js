import AppointmentInfo from "./AppointmentInfo";
import ObjectPanel from "./ObjectPanel";
import DetailsPanel from "./DetailsPanel";

import './style/patientPanel.css'

export default function PatientPanel() {
    return (
        <section className="panel-holder">
            <ObjectPanel/>
            <AppointmentInfo/>
            <DetailsPanel />
        </section>
    );
};