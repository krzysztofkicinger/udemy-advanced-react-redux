import {SIGN_IN, AUTHENTICATION_ERROR, SIGN_OUT, SIGN_UP} from './types';
import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'http://localhost:9300';

export function signInUser({ email, password }) {
    // Submit email/password to the server
    const request = axios.post(`${ROOT_URL}/signin`, { email, password });

    // If request is good
    //  - Update state to indicate user is authenticated
    //  - Save the JWT token
    //  - Redirect to the route /feature

    // If the request is bad...
    //  - Show an error to the user

    return dispatch =>
        request
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                dispatch({ type: SIGN_IN });
                browserHistory.push('/feature');
            })
            .catch((error) => {
                dispatch(authError('Bad login info'));
            });

}

export function signOutUser() {
    localStorage.removeItem('token');
    return { type: SIGN_OUT };
}

export function signUpUser({ user, password }) {

    const request = axios.post(`${ROOT_URL}/signup`, { email, password });

    return dispatch =>
        request
            .then((response) => {
                dispatch({ type: SIGN_UP });
                browserHistory.push('/signin');
            })
            .catch((error) => {
                dispatch(authError('Bad login info'));
            });
}

export function authError(error) {
    return {
        type: AUTHENTICATION_ERROR,
        payload: error
    }
}