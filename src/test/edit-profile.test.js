import React from 'react';
import {cleanup, render, screen, fireEvent} from '@testing-library/react';
import Dashboard from "../components/Dashboard/Dashboard";
import {Provider} from "react-redux";
import store from "../redux/store";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Edit Profile", () => {
	let editProfileBtn = null;
	// todo: uncomment skips
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

	})

	beforeEach(() => {
		render(
			<Provider store={store}>
				<Dashboard />
			</Provider>
		);
		// editProfileBtn = queryByText("EDIT PROFILE");
		editProfileBtn = screen.queryByText("EDIT PROFILE");
		fireEvent.click(editProfileBtn);
	});


	test("edit profile button should be exist", () => {
		expect(editProfileBtn).toBeTruthy();
	});

	test("Edit profile modal should be opened", () => {
		const editProfileModal = screen.queryByTestId("edit-profile-modal");
		expect(editProfileModal).toBeTruthy();
	});

	test("Edit profile form should have username field", () => {
		const field = screen.queryByLabelText("Username");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "text");
	});

	test("Edit profile form should have email field", () => {
		const field = screen.queryByLabelText("Email");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "text");
	});

	test("Edit profile form should have Phone field", () => {
		const field = screen.queryByLabelText("Phone");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "text");
	});

	test("Edit profile form should have First Name field", () => {
		const field = screen.queryByLabelText("First Name");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "text");
	});

	test("Edit profile form should have Last Name field", () => {
		const field = screen.queryByLabelText("Last Name");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "text");
	});

	test("Edit profile form should have radio group for sex", () => {
		const field = screen.queryByTestId("edit-profile-edit-sex-radio-group");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLDivElement);
		expect(field).toHaveProperty("id", "edit_sex");
	});

	test("Edit profile form should have Weight field", () => {
		const field = screen.queryByLabelText("Weight");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "number");
	});

	test("Edit profile form should have Height field", () => {
		const field = screen.queryByLabelText("Height");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLInputElement);
		expect(field).toHaveProperty("placeholder", "");
		expect(field).toHaveProperty("type", "number");
	});

	test("Edit profile form should have medical records field", () => {
		const field = screen.queryByLabelText("medical records");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLTextAreaElement);
		expect(field).toHaveProperty("placeholder", "");
	});

	test("Edit profile form should have submit button", () => {
		const field = screen.queryByTestId("edit-profile-submit-button");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLButtonElement);
		expect(field).toHaveProperty("type", "submit");
	});

	test("Edit profile form should have cancel button", () => {
		const field = screen.queryByTestId("edit-profile-cancel-button");
		expect(field).toBeTruthy();
		expect(field).toBeInstanceOf(HTMLButtonElement);
		expect(field).toHaveProperty("type", "button");
	})
});

