// action types
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_USER_BASKETS_ARR = 'SET_USER_BASKETS_ARR';
export const SET_USER_LOGGED_IN = 'SET_USER_LOGGED_IN';
export const SET_LAST_BASKET_DATA = 'SET_LAST_BASKET_DATA';

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

export const setUserLoggedIn = (userLoggedInToF) => ({
    type: SET_USER_LOGGED_IN,
    payload: userLoggedInToF
});

export const setLastBasketData = (lastBasketData) => ({
    type: SET_LAST_BASKET_DATA,
    payload: lastBasketData
});

