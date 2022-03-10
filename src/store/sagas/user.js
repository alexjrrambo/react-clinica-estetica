import { call, put } from 'redux-saga/effects';

import { Actions as UserActions } from '../actions/user';
import { getUser as getUserRequest } from '../../services/user';

export function* getUser() {
  try {
    const response = yield call(getUserRequest);

    yield put(UserActions.getUserSuccess(response));
  } catch (error) {
    yield put(UserActions.getUsuarioError('Ocorreu algum erro, por favor, tente novamente'));
  }
}
