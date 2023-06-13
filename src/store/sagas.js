import { takeLatest, put, all } from 'redux-saga/effects';
import { setUserLoggedIn, setUserLoggedOut } from '../actions/userActions';

function* watchIsLoggedIn() {
  yield takeLatest('SET_USER_LOGGED_IN', setUserLoggedInSaga);
  yield takeLatest('SET_USER_LOGGED_OUT', setUserLoggedOutSaga);
}

function* setUserLoggedInSaga() {
  // Perform any additional logic or API calls if needed
  yield put(setUserLoggedIn(true));
}

function* setUserLoggedOutSaga() {
  // Perform any additional logic or API calls if needed
  yield put(setUserLoggedIn(false));
}

export default function* rootSaga() {
  yield all([watchIsLoggedIn()]);
}
