import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import AuthReducer from './authentication.reducer';
import FeatureReducer from './feature.reducer';

const rootReducer = combineReducers({
    form: FormReducer,
    auth: AuthReducer,
    feature: FeatureReducer
});

export default rootReducer;
