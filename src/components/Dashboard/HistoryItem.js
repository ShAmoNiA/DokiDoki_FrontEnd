import "./style/historyItem.css";
import React from "react";

export default function HistoryItem(props) {
	return (
		<div className="history-item">
			<div>
				<span className="history-item-title">{props.title}</span>
				<span className="history-item-date">
					<i className="bi bi-calendar3"></i>
					{props.date}
				</span>
			</div>
			<span>{props.location}</span>
		</div>
	);
}
