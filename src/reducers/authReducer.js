import { SIGN_OUT } from "../actions/userActions";

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
            default: 
                return initialStateHM
    }
}

export default authReducer