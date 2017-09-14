import { SIGN_IN, SIGN_OUT, AUTHENTICATION_ERROR } from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case SIGN_IN:
            return { ...state, message: '', authenticated: true };
        case SIGN_OUT:
            return { ...state, message: '', authenticated: false };
        case AUTHENTICATION_ERROR:
            return { ...state, message: action.payload }
    }
    return state;
}