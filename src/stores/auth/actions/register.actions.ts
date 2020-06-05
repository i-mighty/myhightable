import { action } from 'typesafe-actions';
import {
  RegistrationRequestPayload,
  RegisterActionTypes,
  RegisterState,
  RegisterFields,
} from '../types';

export const registrationRequest = () =>
  action(RegisterActionTypes.REGISTRATION_REQUEST);
export const registrationRequestSuccess = (status: string) =>
  action(RegisterActionTypes.REGISTRATION_REQUEST_SUCCESS, { status });
export const registrationRequestError = (
  errors: { [key in RegisterFields]?: string[] },
) => action(RegisterActionTypes.REGISTRATION_REQUEST_FAILURE, { errors });
export const updateRegistrationField = (field: string, value: string) =>
  action(RegisterActionTypes.UPDATE_REGISTRATION_FIELD, { field, value });
