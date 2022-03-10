import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Actions as SessionActions } from '../actions/session';
import { showToast } from '../../components/Toast';
import { history } from '../../routes';

export function* loginUser(action) {
  try {
    const { email, password, redirect } = action.session;

    const response = yield call(api.post, '/session', {
      email,
      password,
    });

    localStorage.setItem('user', response.data.token);

    yield put(SessionActions.loginUserSuccess(response.data));

    if (redirect) {
      history.push('/dashboard/home');
    }
  } catch (error) {
    let errorMessage = 'Falha na comunicação com o servidor';

    if (error.response.data.error) {
      errorMessage = error.response.data.error;
    }

    showToast(errorMessage, 'error');
    yield put(SessionActions.loginUserError(errorMessage));
  }
}

export function* logoutUser() {
  localStorage.removeItem('user');
  yield put(SessionActions.logoutUserSuccess());

  history.push('/home');
}
