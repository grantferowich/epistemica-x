import { legacy_createStore as createStore} from 'redux'
import { compose, combineReducers, applyMiddleware } from 'redux';
import userReducer from '../reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import systemReducer from '../reducers/systemReducer';

const rootReducer = combineReducers({
    user: userReducer,
    system: systemReducer
})

const persistConfig = { 
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export {store, persistor}