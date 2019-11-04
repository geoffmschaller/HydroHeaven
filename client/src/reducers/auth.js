const initialState = {
	user: null,
	token: null
}

export const SET_USER = "set_user";

const AuthReducer = (state = initialState, action) => {

	if (action.type === SET_USER) {
		return {
			user: action.payload.user,
			token: action.payload.token
		}
	}

	return state;
};

export default AuthReducer;