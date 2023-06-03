export const SET_LAST_API_CALL_TIME = 'SET_LAST_API_CALL_TIME';
export const SET_COIN_LIST = 'SET_COIN_LIST';

export const setLastAPICallTime = (lastAPICallTime) => ({
    type: SET_LAST_API_CALL_TIME,
    payload: lastAPICallTime
})

export const setCoinList = (coinList) => ({
    type: SET_COIN_LIST,
    payload: coinList
})