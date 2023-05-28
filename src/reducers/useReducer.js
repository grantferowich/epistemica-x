import { SET_USER_EMAIL, SET_USER_ID, SET_USER_NAME } from "../actions/userActions";

// Define initial state
const initialStateHM = {
    name: '',
    email: '',
    id: ''
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
            }
        default: 
            return stateHM
    }
}

export default userReducer


