import { SET_USER_BASKETS_ARR, SET_USER_EMAIL, SET_USER_ID, SET_USER_NAME, SET_USER_LOGGED_IN, SET_USER_LOGGED_OUT } from "../actions/userActions";

// Define initial state
const initialStateHM = {
    name: '',
    email: '',
    id: '', 
    basketsArr: '',
    userLoggedIn: '',
    userLoggedOut: ''
};

// define the user reducer
const userReducer = ( stateHM = initialStateHM, action) => {
    switch (action.type) {
        case SET_USER_NAME:
            return {
                ...stateHM,
                name: action.payload
            };
        case SET_USER_EMAIL: 
            return {
                ...stateHM,
                email: action.payload
            };
        case SET_USER_ID:
            return {
                ...stateHM,
                id: action.payload
            };
        case SET_USER_BASKETS_ARR:
            return {
                ...stateHM,
                basketsArr: action.payload
            };
        case SET_USER_LOGGED_IN:
                return {
                    ...stateHM,
                    userLoggedIn: true,
                    userLoggedOut: false
                };
        case SET_USER_LOGGED_OUT: 
                return {
                    ...stateHM,
                    userLoggedIn: false,
                    userLoggedOut: true
                };
        default: 
            return stateHM
    }
}
export default userReducer


