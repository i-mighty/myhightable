import {
  all,
  call,
  fork,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { Toast } from 'native-base';
import {
  AppNotificationActionTypes,
  ReportErrorAction,
  ReportMessageAction,
} from './types';
import { setErrorAction } from './actions';

function* showErrorToast(action: ReportErrorAction) {
  Toast.show({
    text: action.payload.error,
    type: 'danger',
    position: 'top',
    duration: 5000,
  });
}

function* showMessageToast(action: ReportMessageAction) {
  Toast.show({
    text: action.payload.message,
    type: 'success',
    position: 'top',
    duration: 5000,
  });
}

function* watchSetError() {
  yield takeLatest(AppNotificationActionTypes.REPORT_ERROR, showErrorToast);
}

function* watchSetMessage() {
  yield takeEvery(AppNotificationActionTypes.REPORT_MESSAGE, showMessageToast);
}

export default function* appNotificationSaga() {
  yield all([fork(watchSetError), fork(watchSetMessage)]);
}
