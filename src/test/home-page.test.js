import axios from "axios";
import React from 'react';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import store from "../redux/store";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const loginFunction = async () => {
	return await axios.post("http://185.141.107.81:1111/api/login", {
		username: "ahmadrezadl",
		password: "hardpassword",
	});
};

const getProfile = async token => {
	return axios.get("http://185.141.107.81:1111/api/my_profile_preview", {
		headers: {
			Authorization: `token ${token}`
		}
	});
}

describe("Home Page Tests", () => {

	let token = null;
	let profile = null;

	beforeAll(() => {
		Object.defineProperty(window, 'matchMedia', {
			writable: true,
			value: jest.fn().mockImplementation(query => ({
				matches: false,
				media: query,
				onchange: null,
				addListener: jest.fn(), // Deprecated
				removeListener: jest.fn(), // Deprecated
				addEventListener: jest.fn(),
				removeEventListener: jest.fn(),
				dispatchEvent: jest.fn(),
			})),
		});
	});


	beforeAll(async () => {
		// get profile and token
		const {data: loginData} = await loginFunction();
		const {success, token: _token} = loginData;
		if(success) {
			token = _token;
		} else {
			fail()
			return;
		}

		// get profile
		const {data: profileData} = await getProfile(token);
		if(profileData.success) {
			profile = profileData.profile;
		}

	})

	beforeEach(() => {
		// render home-page
		render(
			<Provider store={store}>
				<HomePage testProfile={profile || null}/>
			</Provider>
		)

		// open drawer
		const profileNav = screen.queryByTestId("profile-navigation-test-id");
		expect(profileNav).toBeTruthy();
		expect(profileNav).toBeInstanceOf(HTMLDivElement);
		fireEvent.click(profileNav);
	});

	test("user profile should be loaded", () => {
		expect(profile).toBeTruthy();
		expect(profile.username).toBe("ahmadrezadl");
	});

	test("user profile should have profile image", () => {
		expect(profile).toBeTruthy();
		expect(profile.profile_picture_url).toBe("/images/profile_Iy1erA6.jpg");
	});

	test("home page should have user username", () => {
		const profileUsername = screen.queryByTestId("profile-name-test-id");
		expect(profileUsername).toBeTruthy();
		expect(profileUsername).toBeInstanceOf(HTMLSpanElement);
		expect(profileUsername).toHaveClass("profile-name");
		expect(profileUsername).toHaveTextContent(profile.username);
	});

	test("home page should have user profile picture", () => {
		const profilePic = screen.queryByTestId("profile-image-test-id");
		expect(profilePic).toBeTruthy();
		expect(profilePic).toBeInstanceOf(HTMLImageElement);
		expect(profilePic).toHaveClass("profile-pic");
		expect(profilePic).toHaveProperty("src", `http://185.141.107.81:1111${profile.profile_picture_url}`)
	});

	test("home page should have a navigation, opens with click on homepage navigation", () => {
		const profileDrawer = screen.queryByTestId("home-page-drawer-test-id");
		expect(profileDrawer).toBeTruthy();
		expect(profileDrawer).toHaveClass("ant-drawer-open");
	});

	test("home page drawer should have: setting, switch, news, blog, logout", () => {
		const drawerItems = screen.queryByTestId("profile-drawer-items-test-id");
		expect(drawerItems).toBeTruthy();
		expect(drawerItems).toBeInstanceOf(HTMLDivElement);
		expect(drawerItems.children.length).toBe(5);
		expect(drawerItems.children[0]).toHaveTextContent("Setting");
		expect(drawerItems.children[1]).toHaveTextContent("Switch");
		expect(drawerItems.children[2]).toHaveTextContent("news");
		expect(drawerItems.children[3]).toHaveTextContent("Blog");
		expect(drawerItems.children[4]).toHaveTextContent("logout");
	})
})