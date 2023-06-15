import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../reducers/userReducer';

const composedEnhancer = applyMiddleware(thunkMiddleware)
const rootReducer = combineReducers({
    user: userReducer,
})

const store = createStore(rootReducer, composedEnhancer);

export default store;