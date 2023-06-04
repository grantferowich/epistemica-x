import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
// import { loadState, saveState } from './sessionStorage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import userReducer from '../reducers/useReducer';

// const persistedState = loadState();
const composedEnhancer = applyMiddleware(thunkMiddleware)

const rootReducer = combineReducers({
    user: userReducer
})

const store = createStore(rootReducer, composedEnhancer);

// store.subscribe(() => {
//     saveState(store.getState());
// })

export default store;