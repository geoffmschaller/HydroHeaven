import Axios from "axios";

export const LoginAttempt = async (email, password) => {
	return await Axios.post("/api/auth/login", {email: email, password: password});
};

export const VerifyAuthToken = async (token) => {
	return await Axios.post('/api/auth/verify-token', {token: token});
}