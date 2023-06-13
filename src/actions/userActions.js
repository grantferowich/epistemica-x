import localStorage from 'localStorage';
// action types
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_BASKETS_ARR = 'SET_USER_BASKETS_ARR';
export const SIGN_OUT = 'SIGN_OUT';
export const COMPLETED_SIGN_IN = 'COMPLETED_SIGN_IN'

export const setUserName = (name) => ({
    type: SET_USER_NAME,
    payload: name,
})

export const setUserEmail = (email) => ({
    type: SET_USER_EMAIL,
    payload: email,
})

export const setUserId = (id) => ({
    type: SET_USER_ID,
    payload: id
})

export const setUserBasketsArr = (basketsArr) => ({
    type: SET_USER_BASKETS_ARR,
    payload: basketsArr
})

export const completedSignIn = () => {
    console.log('completedSignIn fired.');
    // localStorage.setItem('user', JSON.stringify(responseHM.data.userObj));
    return {
        type: COMPLETED_SIGN_IN,
        isAuthenticated: true
    }
}

export const signOut = () => {
    localStorage.removeItem('user')
    console.log('signOut action fired.')
    return {
        type: SIGN_OUT,
        isAuthenticated: false
    }
}
