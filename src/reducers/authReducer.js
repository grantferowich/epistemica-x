import { SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from "../actions/userActions";

const authStateHM = {
    isLoggedIn: ''
};

const authReducer = ( state = authStateHM, action) => {
    switch (action.type) {
        case SET_USER_LOGGED_IN:
            return {
                ...authStateHM,
                isLoggedIn: false
            };
        case SET_USER_LOGGED_OUT: 
            return {
                ...state,
                isLoggedIn: true
            };
        default: 
            return authStateHM
    }
}

export default authReducer