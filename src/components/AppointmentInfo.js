import AppointmentItem from "./AppointmentItem";

export default function AppointmentInfo() {
    return (
        <div className="appointment-info">
            <AppointmentItem title="Appointment Day" description="Nov 9, 2021"/>
            <AppointmentItem title="Appointment Time" description="02.30 PM"/>
            <AppointmentItem title="Appointment Type" description="New patient"/>
        </div>
    );
};