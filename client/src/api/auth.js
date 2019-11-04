import Axios from "axios";

export const LoginAttempt = async (email, password) => {
	return await Axios.post("/api/auth/login", {email: email, password: password});
};