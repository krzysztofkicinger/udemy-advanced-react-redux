import { combineReducers } from 'redux';
import AuthenticationReducer from './authentication.reducer';

const rootReducer = combineReducers({
    authenticated: AuthenticationReducer
});

export default rootReducer;
