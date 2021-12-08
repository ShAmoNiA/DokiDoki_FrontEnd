import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import "./style/HomePage.css";
import { Drawer, Button, Space, Radio } from "antd";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../helper/axiosInstance";
import { useHistory } from "react-router";
import auth from "../../helper/auth";
export default function HomePage() {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(async () => {
		if (!user.username) {
			const { data } = await axios.get("/my_profile_preview");
			console.log(data);
			if (data.success) {
				dispatch({ type: "SET_USER", user: data.profile });
			}
		}
	}, []);
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
					<div>Switch</div>
					<div>news</div>
					<div>Blog</div>

					<div onClick={auth.logout}>logout</div>
				</div>
			</Drawer>
			<Nav openDrawer={showDrawer} />
			<Main />
			<Footer />
		</div>
	);
}
