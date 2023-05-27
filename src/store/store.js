import { legacy_createStore as createStore } from 'redux';
import { combineReducers } from 'redux';
import userReducer from '../reducers/useReducer';

const rootReducer = combineReducers({
    user: userReducer
})
const storeHM = createStore(rootReducer);

export default storeHM;