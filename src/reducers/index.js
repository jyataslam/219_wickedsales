//Bring all other reducers together here 
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';

// constructing what your state will ultimately look like
// for example...
// state = {

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer
});

export default rootReducer;
