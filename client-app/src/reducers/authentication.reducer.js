import { SIGN_IN, SIGN_OUT } from "../actions/types";

export default function(state = {}, action) {
    switch(action.type) {
        case SIGN_IN:
            console.log("Sign In reducer");
            return { ...state, authenticated: true };
        case SIGN_OUT:
            console.log("Sign Out reducer");
            return { ...state, authenticated: false };
    }
    return state;
}