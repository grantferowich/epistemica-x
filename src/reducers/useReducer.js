import { SET_USER_EMAIL, SET_USER_ID, SET_USER_NAME } from "../actions/userActions";

// Define initial state
const initialStateHM = {
    name: '',
    email: '',
    id: ''
};

// define the user reducer
const userReducer = ( stateHM = initialStateHM, actionObj) => {
    switch (actionObj.type) {
        case SET_USER_NAME:
            return {
                ...stateHM,
                name: actionObj.payload
            };
        case SET_USER_EMAIL: 
            return {
                ...stateHM,
                email: actionObj.payload
            };
        case SET_USER_ID:
            return {
                ...stateHM,
                id: actionObj.payload
            }
        default: 
            return stateHM
    }
}

export default userReducer


