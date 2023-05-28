import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from '../reducers/useReducer';
const composedEnhancer = applyMiddleware(thunkMiddleware)

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer, composedEnhancer);

export default store;