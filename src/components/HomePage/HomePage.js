import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import "./style/HomePage.css";
import { Drawer, Button, Space, Radio } from "antd";
import { useState } from "react";
import { useHistory } from "react-router";
export default function HomePage() {
	const history = useHistory();
	const [visible, setVisible] = useState(false);
	const showDrawer = () => {
		console.log("called");
		setVisible(true);
	};
	const onClose = () => {
		setVisible(false);
	};
	return (
		<div className="wrapper">
			<Drawer
				title="DOKI DOKI"
				placement={"right"}
				width={300}
				onClose={onClose}
				visible={visible}
				extra={
					<Space>
						<Button onClick={onClose}>Cancel</Button>
						<Button type="primary" onClick={onClose}>
							OK
						</Button>
					</Space>
				}
			>
				<div className="drawer-items">
					<div
						onClick={() => {
							history.push("/dashboard");
						}}
					>
						Setting
					</div>
					<div>asb</div>
					<div>khar</div>
					<div>logout</div>
				</div>
			</Drawer>
			<Nav openDrawer={showDrawer} />
			<Main />
			<Footer />
		</div>
	);
}
