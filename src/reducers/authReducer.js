import { COMPLETED_SIGN_IN, SIGN_OUT } from "../actions/userActions";

const initialStateHM = {
    isAuthenticated: ''
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
                isAuthenticated: true
            };
        default: 
            return initialStateHM
    }
}

export default authReducer