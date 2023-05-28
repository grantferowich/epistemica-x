import { configureStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from '../reducers/useReducer';
const composedEnhancer = applyMiddleware(thunkMiddleware)

const rootReducer = combineReducers({
    user: userReducer
})

const storeHM = configureStore(rootReducer, composedEnhancer);

export default storeHM;