export interface AppNotificationState {
  error: string;
  message: string;
  loading: boolean;
}

export enum AppNotificationActionTypes {
  REPORT_ERROR = 'REPORT_ERROR',
  REPORT_MESSAGE = 'REPORT_MESSAGE',
  REPORT_SUCCESS = 'REPORT_SUCCESS',
  SET_LOADING = 'SET_LOADING',
}

export interface ReportErrorAction {
  type: AppNotificationActionTypes.REPORT_ERROR;
  payload: {
    error: string;
  };
}

export interface ReportMessageAction {
  type:
    | AppNotificationActionTypes.REPORT_MESSAGE
    | AppNotificationActionTypes.REPORT_SUCCESS;
  payload: {
    message: string;
  };
}

export interface SetLoadingAction {
  type: AppNotificationActionTypes.SET_LOADING;
  payload: {
    loading: boolean;
  };
}

export type AppNotificationAction =
  | ReportErrorAction
  | ReportMessageAction
  | SetLoadingAction;
