const initialState = {
	user: null
}

export const SET_USER = "set_user";

const AuthReducer = (state = initialState, action) => {

	if (action.type === SET_USER) {
		return {
			user: action.payload.user
		}
	}

	return state;
};

export default AuthReducer;