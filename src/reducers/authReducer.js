import { COMPLETED_SIGN_IN, SIGN_OUT } from "../actions/userActions";

const initialStateHM = {
    isAuthenticated: false
};

const authReducer = ( state = initialStateHM, action) => {
    switch (action.type) {
        case SIGN_OUT:
            return {
                ...initialStateHM,
                isAuthenticated: false
            };
        case COMPLETED_SIGN_IN: 
            return {
                ...state,
                isAuthenticated: action.isAuthenticated
            };
        default: 
            return initialStateHM
    }
}

export default authReducer