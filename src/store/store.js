import { legacy_createStore as createStore } from 'redux';
import userReducer from '../reducers/useReducer';

const storeHM = createStore(userReducer);

export default storeHM;