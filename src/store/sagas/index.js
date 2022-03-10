import { all, takeLatest } from 'redux-saga/effects';

import { Types as SessionTypes } from '../actions/session';
import { Types as UserTypes } from '../actions/user';
import { loginUser, logoutUser } from './session';
import { getUser } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(SessionTypes.LOGIN_REQUEST, loginUser),
    takeLatest(SessionTypes.LOGOUT_REQUEST, logoutUser),
    takeLatest(UserTypes.GET_REQUEST, getUser),
  ]);
}
