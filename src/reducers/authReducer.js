import { LOG_OUT } from "../actions/userActions";

const initialStateHM = {
    isAuthenticated: false
};
const authReducer = ( state = initialStateHM, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state,
                isAuthenticated: false
            };
            default: 
                return state
    }
}

export default authReducer