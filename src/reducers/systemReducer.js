import { SET_HOURS_SINCE_LAST_EXTERNAL_API_CALL, SET_COIN_LIST, CLEAR_COIN_LIST } from '../actions/systemActions';

const initialState = {
  hoursSinceLastExternalAPICall: '',
  coinList: ''
};

const systemReducer = (state = initialState, action) => {
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
    case CLEAR_COIN_LIST:
      return {
        ...state
      }
    default:
      return state;
  }
};

export default systemReducer;
