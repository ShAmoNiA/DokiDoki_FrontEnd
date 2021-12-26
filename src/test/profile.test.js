import React from 'react';
import {cleanup, render, screen, fireEvent, queryByTestId} from '@testing-library/react';
import {Provider} from "react-redux";
import store from "../redux/store";
import Dashboard from "../components/Dashboard/Dashboard";

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("Profile Tests", () => {
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
				<Dashboard/>
			</Provider>
		);
	});


	test("profile page should be loaded", () => {
		const page = screen.queryByTestId("profile-page-container");
		expect(page).toBeTruthy();
		expect(page).toBeInstanceOf(HTMLDivElement);
		expect(page).toHaveClass("box");
	});

	test("profile page should have a logo", () => {
		const logo = screen.queryByText("DokiDoki");
		expect(logo).toBeTruthy();
		expect(logo).toBeInstanceOf(HTMLHeadingElement);
	});

	test("profile page should have a navigation menu", () => {
		const nav = screen.queryByTestId("navigation-list");
		expect(nav).toBeTruthy();
		expect(nav.children.length).toBe(10);
	});

	test("profile page should have a main container", () => {
		const container = screen.queryByTestId("dashboard-main-container");
		expect(container).toBeTruthy();
		expect(container).toHaveClass("main-container");
	});

	test("profile page should have header user name", () => {
		const elem = screen.queryByTestId("header-profile-name");
		expect(elem).toBeTruthy();
		expect(elem).toHaveClass("header-prof-name");
		expect(elem).toBeInstanceOf(HTMLSpanElement);
	});

	test("profile page should have patient panel", () => {
		const panel = screen.queryByTestId("patient-panel");
		expect(panel).toBeTruthy();
		expect(panel).toHaveClass("panel-holder");
		expect(panel.children.length).toBe(3);
	});

	test("patient panel should have object panel", () => {
		const panel = screen.queryByTestId("patient-panel-object-panel");
		expect(panel).toBeTruthy();
		expect(panel.children.length).toBe(2);
		expect(panel.children[0]).toHaveClass("object-info");
		expect(panel.children[1].children.length).toBe(8);
		expect(panel.children[1]).toBeInstanceOf(HTMLUListElement);
		expect(panel.children[1]).toHaveClass("object-menu");
	});

	test("patient panel should have appointment info", () => {
		const panel = screen.queryByTestId("patient-panel-appointment-info");
		expect(panel).toBeTruthy();
		expect(panel.children.length).toBe(3);
		for(const _child of panel.children) {
			expect(_child).toBeInstanceOf(HTMLDivElement)
			expect(_child.children.length).toBe(2);
			expect(_child.children[0]).toHaveClass("app-info-title");
			expect(_child.children[1]).toHaveClass("app-info-description");
		}
	});

	test("patient panel should have details panel", () => {
		const panel = screen.queryByTestId("patient-panel-details-panel");
		expect(panel).toBeTruthy();
		expect(panel.children.length).toBe(3);
		for(const _panel of panel.children) {
			expect(_panel).toHaveClass("panel");
			expect(_panel).toBeInstanceOf(HTMLDivElement)
		}
	});
})