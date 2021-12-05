import "./style/panelItem.css";
import React from "react";

export default function PanelItem(props) {
	return (
		<div className="panel-item">
			<span>{props.title}</span>
			<div>
				<div className="item-quantity">
					<span>1</span>
					<i className="bi bi-chevron-right"></i>
				</div>
				<div className="item-add">
					<i className="bi bi-plus"></i>
				</div>
			</div>
		</div>
	);
}
