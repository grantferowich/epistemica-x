import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../reducers/useReducer';
import authReducer from '../reducers/authReducer';

// const persistedState = loadState();
const composedEnhancer = applyMiddleware(thunkMiddleware)

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
})

const store = createStore(rootReducer, composedEnhancer);

// store.subscribe(() => {
//     saveState(store.getState());
// })

export default store;