export const SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL = 'SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL';
export const SET_COIN_LIST = 'SET_COIN_LIST';
export const CLEAR_COIN_LIST = 'CLEAR_COIN_LIST'
export const setHoursSinceLastExternalAPICall = (hoursSinceLastExternalAPICall) => ({
    type: SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL,
    payload: hoursSinceLastExternalAPICall
})
export const setCoinList = (coinList) => ({
    type: SET_COIN_LIST,
    payload: coinList
})
export const clearCoinList = () => ({
    type: CLEAR_COIN_LIST,
    payload: ""
})