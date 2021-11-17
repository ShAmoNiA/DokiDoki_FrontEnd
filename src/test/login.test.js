import axios from "axios";

const loginFunction = async () => {
	return await axios.post("http://185.141.107.81:1111/api/login", {
		username: "ahmadrezadl",
		password: "hardpassword",
	});
};

// http://185.141.107.81:1111/api/login

describe("Login", () => {
	test("trying to login to the application with provided credentials", async () => {
		try {
			const { data, status, statusText } = await loginFunction();
			expect(status).toEqual(200);
			expect(statusText).toEqual("OK");
			expect(data.success).toEqual(true);
			expect(typeof data.token).toEqual("string");
		} catch (e) {
			fail(e.message);
		}
	});
});
