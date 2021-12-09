import axios from "axios";
import Auth from "./auth";

const axiosInstance = axios.create({
	baseURL: "http://185.141.107.81:1111/api",
});

axiosInstance.interceptors.request.use(
	async function (config) {
		const token = Auth.checkLogin();
		if (token) config.headers["Authorization"] = `token ${token}`;
		console.log(`Request ${config} Sending`);
		return config;
	},
	null,
	{ synchronous: true }
);

export default axiosInstance;
