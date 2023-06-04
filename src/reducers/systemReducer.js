import { SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL, SET_COIN_LIST } from './actionTypes';

const initialState = {
  hoursSinceLastExternalAPICall: 0,
  coinList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL:
      return {
        ...state,
        hoursSinceLastExternalAPICall: action.payload
      };
    case SET_COIN_LIST:
      return {
        ...state,
        coinList: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
