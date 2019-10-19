const initialState = {
	auth: {
		verified: false,
		email: null,
		id: null
	},
	clients: []
};

const stateReducer = (state = initialState, action) => {

	if (action.type === 'LOGIN') {
		let s = {...state};
		s.auth = {
			verified: true,
			email: action.data.email,
			id: action.data.id
		};
		return s;
	}

	if (action.type === 'NEW_CLIENT') {
		let s = {...state};
		s.clients.push(action.data);
		return s;
	}

	if (action.type === 'GET_ALL_CLIENTS') {
		let s = {...state};
		s.clients = action.data;
		return s;
	}

	return state;
};

export default stateReducer;