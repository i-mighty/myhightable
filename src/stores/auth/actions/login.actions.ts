import { action } from 'typesafe-actions';
import { LoginRequestPayload, LoginActionTypes, LoginFields } from '../types';

export const loginRequest = () => action(LoginActionTypes.LOGIN_REQUEST);
export const loginRequestSuccess = (success: string) =>
  action(LoginActionTypes.LOGIN_REQUEST_SUCCESS, { success });
export const loginRequestError = (
  errors: { [key in LoginFields]?: string[] },
) => action(LoginActionTypes.LOGIN_REQUEST_FAILURE, { errors });
export const loginFieldValueUpdate = (field: string, value: string) =>
  action(LoginActionTypes.UPDATE_LOGIN_FIELD, { field, value });

export const resetPasswordRequest = () =>
  action(LoginActionTypes.RESET_PASSWORD_REQUEST);
export const newPasswordRequest = () =>
  action(LoginActionTypes.NEW_PASSWORD_REQUEST);
