import { call, put, takeLatest, select } from 'redux-saga/effects';
import { RootState } from '@src/stores';
import {
  register,
  RegistrationResponse,
  RegistrationErrors,
} from '@src/services/Auth';
import { ApiResponse } from 'apisauce';
import {
  setLoadingAction,
  setErrorAction,
  setSuccessAction,
} from '@src/stores/appNotifications/actions';
import { RegisterActionTypes } from '../types';
import {
  registrationRequestSuccess,
  registrationRequestError,
} from '../actions/register.actions';
import { setAuthOption } from '../actions/authOptions';

function* sendRegisterRequest() {
  yield put(setLoadingAction(true));
  const getRegisterDetails = (store: RootState) => store.auth.register;
  const {
    errors,
    success,
    ...rest
  }: ReturnType<typeof getRegisterDetails> = yield select(getRegisterDetails);
  const res: ApiResponse<RegistrationResponse, RegistrationErrors> = yield call(
    register,
    rest,
  );
  if (res.ok) {
    yield put(registrationRequestSuccess(res.data?.status || ''));
    yield put(
      setSuccessAction(
        'Registration successful \nPlease verify your email before proceeding to login',
      ),
    );
    yield put(setAuthOption('login'));
    yield put(setLoadingAction(false));
  } else {
    const errors = res.data?.errors;
    let errorString = `Couldn't complete registration \n`;
    if (errors) {
      for (const key in errors) {
        if (errors.hasOwnProperty(key)) {
          const element = errors[key];
          errorString += element.join('\n');
          errorString += '\n';
        }
      }
      yield put(registrationRequestError(errors));
      yield put(setErrorAction(errorString));
      yield put(setLoadingAction(false));
    }
  }
}

export default function* watchRegisterAction() {
  yield takeLatest(
    RegisterActionTypes.REGISTRATION_REQUEST,
    sendRegisterRequest,
  );
}
