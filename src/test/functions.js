const axios = require("axios");


export const functions = {
	loginFunction: async () => {
		const {data} = await axios.post("http://185.141.107.81:1111/api/login", {
			username: "ahmadrezadl",
			password: "hardpassword",
		});
		return data;
	},

	getProfile: async token => {
		const {data} = await axios.get("http://185.141.107.81:1111/api/my_profile_preview", {
			headers: {
				Authorization: `token ${token}`
			}
		});
		return data;
	}
}
