import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import think from './middleware/think';
import types from './actions/types';
import { checkAuth } from './actions';

import App from './components/app';

// taking everything from rootReducer and setting it to 'store'
const store = createStore(rootReducer, applyMiddleware(think));

if (localStorage.getItem('signedIn') === 'true'){
    store.dispatch({
        type: types.SIGN_IN,
        email: 'loading'
    });

    checkAuth()(store.dispatch);
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);
