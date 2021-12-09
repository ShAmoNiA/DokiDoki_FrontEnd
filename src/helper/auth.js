import { decode } from "jsonwebtoken";
const ACCESS_TOKEN_KEY = "token";
class Auth {
	checkLogin() {
		return localStorage.getItem(ACCESS_TOKEN_KEY);
	}

	isTokenExpired(token) {
		if (token == "" || !token) return true;
		try {
			const decoded = decode(token);
			return decoded.exp ? decoded.exp < Date.now() / 1000 : false;
		} catch (err) {
			return false;
		}
	}

	getToken() {
		return localStorage.getItem(ACCESS_TOKEN_KEY);
	}

	setToken(acc) {
		console.log(acc);
		localStorage.setItem("token", acc);
	}
	logout() {
		localStorage.setItem("token", "");
		window.location.reload();
	}
}

const auth = new Auth();
export default auth;
