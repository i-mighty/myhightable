import { action } from 'typesafe-actions';
import { AppNotificationActionTypes } from './types';

export const setErrorAction = (error: string) =>
  action(AppNotificationActionTypes.REPORT_ERROR, { error });
export const setMessageAction = (message: string) =>
  action(AppNotificationActionTypes.REPORT_MESSAGE, { message });
export const setSuccessAction = (message: string) =>
  action(AppNotificationActionTypes.REPORT_MESSAGE, { message });
export const setLoadingAction = (loading: boolean) =>
  action(AppNotificationActionTypes.SET_LOADING, { loading });
