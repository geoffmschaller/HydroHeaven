import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

ReactDOM.render(
	<Provider store={createStore(rootReducer)}>
		<React.StrictMode>
			<App/>
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
