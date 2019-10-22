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

	if (action.type === 'UPDATE_CLIENT') {
		let s = {...state};
		let index = -1;
		let client = s.clients.filter((client, ind) => {
			if (client._id === action.data._id) {
				index = ind;
				return client;
			}
		});
		if (client.length > 0 && index !== -1) {
			s.clients[index] = action.data;
		}
		return s;
	}

	if (action.type === 'SET_ALL_CLIENTS') {
		let s = {...state};
		s.clients = action.data;
		return s;
	}

	return state;
};

export default stateReducer;