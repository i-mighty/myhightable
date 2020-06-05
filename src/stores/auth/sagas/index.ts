import { all, fork } from 'redux-saga/effects';
import watchRegisterAction from './register.saga';
import {
  watchLoginAction,
  watchNewPasswordRequest,
  watchResetPasswordRequest,
} from './login.saga';

function* authSaga() {
  yield all([
    fork(watchRegisterAction),
    fork(watchLoginAction),
    fork(watchResetPasswordRequest),
    fork(watchNewPasswordRequest),
  ]);
}

export default authSaga;
