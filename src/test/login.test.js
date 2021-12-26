import axios from "axios";
import React from 'react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Login from "../screens/Login/Login";
import {functions} from "./functions";

const {loginFunction} = functions;

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Login Tests", () => {
	test("trying to login to the application with provided credentials", async () => {
		try {
			const loginFunctionMock = jest.spyOn(functions, "loginFunction");
			loginFunctionMock.mockResolvedValue({
				success: true,
				token: "cc3d8ad26c2ab6686be78385d0520e14a78c6461"
			})

			const data = await functions.loginFunction();

			expect(loginFunctionMock).toHaveBeenCalledWith();
			expect(data).toEqual({
				success: true,
				token: "cc3d8ad26c2ab6686be78385d0520e14a78c6461"
			})
			expect(data.success).toEqual(true);
			expect(typeof data.token).toEqual("string");
		} catch (e) {
			fail(e.message);
		}
	});

	test("login page should have an intro text", () => {
		const {queryByText} = render(<Login type="signin" />);
		const text1 = queryByText("Have an");
		const text2 = queryByText("Account?");
		const text3 = queryByText("Please sign-in to continue!");
		expect(text1).toBeTruthy();
		expect(text2).toBeTruthy();
		expect(text3).toBeTruthy();
	});

	test("login page should have an input field for username", () => {
		const {queryByPlaceholderText} = render(<Login type="signin" />);
		const usernameInput = queryByPlaceholderText("Username");
		expect(usernameInput).toBeInstanceOf(HTMLInputElement);
		expect(usernameInput).toBeTruthy();
	});

	test("login page should have an input field for password", () => {
		const {queryByPlaceholderText} = render(<Login type="signin" />);
		const usernameInput = queryByPlaceholderText("Password");
		expect(usernameInput).toBeInstanceOf(HTMLInputElement);
		expect(usernameInput).toBeTruthy();
	});

	test("login page should have a forget password link", () => {
		const {queryByText} = render(<Login type="signin" />);
		const text = queryByText("Forget your password?");
		expect(text).toBeTruthy();
		expect(text).toBeInstanceOf(HTMLAnchorElement);
	});

	test("login page should have a submit button", () => {
		const {queryByTestId} = render(<Login type="signin" />);
		const btn = queryByTestId("login-form-submit-btn");
		expect(btn).toBeTruthy();
		expect(btn).toBeInstanceOf(HTMLButtonElement);
	});

	test("login page should have a link to signup page", () => {
		const {queryByText} = render(<Login type="signin" />);
		const link = queryByText("Don't have an account?");
		expect(link).toBeTruthy();
		expect(link).toBeInstanceOf(HTMLAnchorElement);
	});

});
