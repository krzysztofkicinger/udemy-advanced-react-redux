import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './authentication.reducer';
import FeatureReducer from './feature.reducer';
import { routerReducer as RouterReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    feature: FeatureReducer,
    routing: RouterReducer
});

export default rootReducer;
