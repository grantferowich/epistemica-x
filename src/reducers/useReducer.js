// Define initial state
const initialStateHM = {
    userIDInt: null
};

// define the user reducer
const userReducer = ( stateHM = initialStateHM, actionObj) => {
    switch (actionObj.type) {
        case 'SET_USER_ID':
            return {
                ...stateHM,
                userIDInt: actionObj.payload
            };
        default: 
            return stateHM
    }
}

export default userReducer


