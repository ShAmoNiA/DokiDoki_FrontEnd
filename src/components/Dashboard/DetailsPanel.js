import PanelItem from "./PanelItem";
import HistoryItem from "./HistoryItem";
import PrescriptionItem from "./PrescriptionItem";
import React from "react";

export default function DetailsPanel() {
	return (
    <div className="full-details-panel" data-testid="patient-panel-details-panel">
      <div className="panel">
        <PanelItem title="Symptoms / Medication" />
        <PanelItem title="New Diagnosis" />
        <PanelItem title="Referral Notes" />
        <PanelItem title="Current Medications" />
        <PanelItem title="Prescribe Medications" />
        <PanelItem title="Resident Documents" />
      </div>
      <div className="panel">
        <div className="panel-item">
          <span>Medical History</span>
        </div>
        <div className="panel-item-detail">
          <HistoryItem
            title="GP Visit"
            location="Dr Levine, Family Care Clinic"
            date="05 Dec 18"
          />
          <HistoryItem
            title="Discharge Letter"
            location="Saint Lukes Hospital"
            date="03 Jan 19"
          />
          <HistoryItem
            title="Prescription"
            location="Saint Lukes Hospital"
            date="07 Jan 19"
          />
          <HistoryItem
            title="Surgery Documents"
            location="Dr Levine, Family Care Clinic"
            date="09 Jan 19"
          />
          <HistoryItem
            title="GP Visit"
            location="Dr Levine, Family Care Clinic"
            date="19 Jan 19"
          />
        </div>
      </div>
      <div className="panel">
        <div className="prescription-holder">
          <h3>Prescription</h3>
          <PrescriptionItem
            title="Referee"
            description="Dr Levine, Family Care Clinic"
          />
          <PrescriptionItem
            title="Date & Time"
            description="05/01/19, 12:25 am"
          />
          <PrescriptionItem
            title="Practice Address"
            description="44 Rath Overpass Suite 997"
          />
          <PrescriptionItem
            title="Practice Address"
            description="Pain Killer - Paracetamol 1,500 mg IV q12 hours"
          />
        </div>
      </div>
    </div>
  );
}
