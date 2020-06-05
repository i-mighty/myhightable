import { action } from 'typesafe-actions';
import { AuthOptions, AuthOptionActionTypes } from '../types';

export const setAuthOption = (authOption: AuthOptions) =>
  action(AuthOptionActionTypes.SET_AUTH_OPTION, { authOption });
