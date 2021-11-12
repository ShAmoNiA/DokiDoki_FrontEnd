import Profile from "../profile.png";

export default function ObjectPanel() {
    return <div className="object-panel">
        <div className="object-info">
            <div className="object-personal-info">
                <div>
                    <img className="info-profile" src={Profile} alt="profile"/>
                </div>
                <div>
                    <span className="profile-name">Mahziar T.</span>
                    <span>ID: 123456789</span>
                    <span className="info-block-button">SAVE</span>
                </div>
            </div>
            <div>
                <h3>Info</h3>
                <span>12 Dec 1998</span>
                <span>Male 174 CM</span>
            </div>
            <div>
                <h3>Allergies</h3>
                <span>Penicillin</span>
            </div>
            <div>
                <h3>FmHd</h3>
                <span>DM</span>
            </div>
        </div>
        <ul className="object-menu">
            <li>Today's consultation</li>
            <li>Previous</li>
            <li>Surgeries/Procedures</li>
            <li>Clinical Notes</li>
            <li>Tests</li>
            <li>Diagnosis</li>
            <li>Medication List</li>
            <li>Vaccination</li>
        </ul>
    </div>
};