import { Reducer } from 'redux';
import {
  AppNotificationState,
  AppNotificationAction,
  AppNotificationActionTypes,
} from './types';

const initialState: AppNotificationState = {
  error: '',
  message: '',
  loading: false,
};

const appNotificationReducer: Reducer<
  AppNotificationState,
  AppNotificationAction
> = (state = initialState, action) => {
  switch (action.type) {
    case AppNotificationActionTypes.REPORT_ERROR: {
      return { ...state, error: action.payload.error };
    }
    case AppNotificationActionTypes.REPORT_MESSAGE: {
      return { ...state, message: action.payload.message };
    }
    case AppNotificationActionTypes.REPORT_SUCCESS: {
      return { ...state, message: action.payload.message };
    }
    case AppNotificationActionTypes.SET_LOADING: {
      return { ...state, loading: action.payload.loading };
    }
    default:
      return state;
  }
};

export default appNotificationReducer;
