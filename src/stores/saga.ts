import { all, fork } from 'redux-saga/effects';
import appNotificationSaga from './appNotifications/saga';
import authSaga from './auth/sagas';

export default function* rootSaga() {
  yield all([fork(appNotificationSaga), fork(authSaga)]);
}
