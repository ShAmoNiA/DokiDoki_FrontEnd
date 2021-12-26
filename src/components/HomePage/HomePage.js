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

/**
 *
 * @param testProfile for unit tests
 * @returns {JSX.Element}
 * @constructor
 */
export default function HomePage({testProfile = null}) {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	useEffect(async () => {
		if (!user.username && !testProfile) {
			const { data } = await axios.get("/my_profile_preview");
			console.log(data);
			if (data.success) {
				dispatch({ type: "SET_USER", user: data.profile });
			}
		}
		if(testProfile) {
			dispatch({ type: "SET_USER", user: testProfile });
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
        data-testid={"home-page-drawer-test-id"}
        title="Main Menu"
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
        <div
          className="drawer-items"
          data-testid={"profile-drawer-items-test-id"}
        >
          <div
            onClick={() => {
              history.push("/dashboard");
            }}
          >
            Dashboard
          </div>

          <div>Switch</div>
          <div>Setting</div>
          <div>Cards</div>
          <div>News</div>
          <div>Blog</div>
          <div>Help</div>
          <span className="line"></span>
          <div className="logout-items" onClick={auth.logout}>
            logout
          </div>
        </div>
      </Drawer>
      <Nav openDrawer={showDrawer} />
      <Main />
      <Footer />
    </div>
  );
}
