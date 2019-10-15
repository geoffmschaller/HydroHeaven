const initialState = {
	auth: {
		verified: false,
		email: null,
		id: null
	}
};

const authReducer = (state = initialState, action) => {

	if (action.type === 'LOGIN') {
		let s = {...state};
		s.auth = {
			verified: true,
			email: action.data.email,
			id: action.data.id
		};
		return s;
	}

	return state;
};

export default authReducer;