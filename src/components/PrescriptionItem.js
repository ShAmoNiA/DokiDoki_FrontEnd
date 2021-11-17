import './style/prescriptionItem.css'

export default function PrescriptionItem(props) {
    return (
        <div className="prescription-item">
            <span className="prescription-title">{props.title}</span>
            <span className="prescription-description">{props.description}</span>
        </div>
    );
};