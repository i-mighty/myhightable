import { call, put, takeLatest, select } from 'redux-saga/effects';
import { RootState } from '@src/stores';
import {
  login,
  LoginError,
  LoginResponse,
  resetPassword,
  ResetPasswordRequestError,
  ResetPasswordRequestResponse,
  NewPasswordRequestResponse,
  NewPasswordRequestError,
  newPassword,
} from '@src/services/Auth';
import { ApiResponse } from 'apisauce';
import {
  setLoadingAction,
  setErrorAction,
  setSuccessAction,
} from '@src/stores/appNotifications/actions';
import { LoginActionTypes } from '../types';
import {
  loginRequestError,
  loginRequestSuccess,
} from '../actions/login.actions';
import { AsyncStorage } from 'react-native';
import { setAuthOption } from './../actions/authOptions';

function* sendLoginRequest() {
  yield put(setLoadingAction(true));
  const getRegisterDetails = (store: RootState) => store.auth.login;
  const {
    email,
    password,
  }: ReturnType<typeof getRegisterDetails> = yield select(getRegisterDetails);
  const res: ApiResponse<LoginResponse, LoginError> = yield call(login, {
    email,
    password,
  });
  if (res.ok) {
    if (res.data) {
      AsyncStorage.setItem('token', res.data?.token);
      AsyncStorage.setItem('token_type', res.data?.token_type);
      AsyncStorage.setItem('token_expires_in', res.data?.expires_in);
    }
    yield put(loginRequestSuccess('success'));
    yield put(setSuccessAction('Login successful'));
    yield put(setLoadingAction(false));
  } else {
    const errors = res.data?.errors;
    let errorString = `Couldn't complete login \n`;
    if (errors) {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const element = errors[key];
          errorString += element.join('\n');
          errorString += '\n';
        }
      }
      yield put(loginRequestError(errors));
      yield put(setErrorAction(errorString));
      yield put(setLoadingAction(false));
    }
  }
}

function* forgotPasswordRequest() {
  yield put(setLoadingAction(true));
  const getRegisterDetails = (store: RootState) => store.auth.login;
  const { email }: ReturnType<typeof getRegisterDetails> = yield select(
    getRegisterDetails,
  );
  const res: ApiResponse<
    ResetPasswordRequestResponse,
    ResetPasswordRequestError
  > = yield call(resetPassword, { email });
  if (res.ok) {
    if (res.data) {
      yield put(setSuccessAction(res.data.status));
    }
    yield put(setLoadingAction(false));
    yield put(setLoadingAction(false));
  } else {
    if (res.data) {
      yield put(setErrorAction(res.data.email));
    }
    yield put(setLoadingAction(false));
  }
}

function* newPasswordRequest() {
  yield put(setLoadingAction(true));
  const getRegisterDetails = (store: RootState) => store.auth.login;
  const {
    email,
    otp,
    password,
    new_password_confirm,
  }: ReturnType<typeof getRegisterDetails> = yield select(getRegisterDetails);

  const payload = {
    email,
    token: otp,
    password,
    password_confirmation: new_password_confirm,
  };
  const res: ApiResponse<
    NewPasswordRequestResponse,
    NewPasswordRequestError
  > = yield call(newPassword, payload);
  if (res.ok) {
    if (res.data) {
      yield put(setSuccessAction(res.data.status));
    }
    yield put(setAuthOption('login'));
    yield put(setLoadingAction(false));
  } else {
    if (res.data) {
      yield put(setErrorAction(res.data.email));
    }
    yield put(setAuthOption('passwordResetRequest'));
    yield put(setLoadingAction(false));
  }
}

export function* watchLoginAction() {
  yield takeLatest(LoginActionTypes.LOGIN_REQUEST, sendLoginRequest);
}

export function* watchResetPasswordRequest() {
  yield takeLatest(
    LoginActionTypes.RESET_PASSWORD_REQUEST,
    forgotPasswordRequest,
  );
}

export function* watchNewPasswordRequest() {
  yield takeLatest(LoginActionTypes.NEW_PASSWORD_REQUEST, newPasswordRequest);
}
