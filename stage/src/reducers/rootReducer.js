import generator from '../utils/generator';

const initialState = {
	session: generator(10)
}

const rootReducer = (state = initialState, action) => {
	return state;
}

export default rootReducer;