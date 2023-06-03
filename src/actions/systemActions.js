export const SET_LAST_API_CALL_TIME = 'SET_LAST_API_CALL_TIME';

export const setLastAPICallTime = (lastAPICallTime) => ({
    type: SET_LAST_API_CALL_TIME,
    payload: lastAPICallTime
})