import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import authReducer from '../reducers/authReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas.js'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)
export default store;