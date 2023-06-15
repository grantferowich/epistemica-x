// import localStorage from 'localStorage';
// action types
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_BASKETS_ARR = 'SET_USER_BASKETS_ARR';
export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN';
export const SET_USER_LOGGED_OUT = 'SET_USER_LOGGED_OUT';

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

export const setUserLoggedIn = (isLoggedIn) => ({
    type: 'SET_IS_LOGGED_IN',
    payload: isLoggedIn,
  });

export const setUserLoggedOut = (isLoggedIn) => ({
    type: 'SET_IS_LOGGED_OUT',
    payload: isLoggedIn
})