import { SIGN_IN } from './types';
import axios from 'axios';

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

    return dispatch =>{
        dispatch({
            type: SIGN_IN,
            payload: { email, password }
        });
    }

}