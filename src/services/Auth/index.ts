import api from '../index.services';
import {
  RegistrationRequestPayload,
  LoginRequestPayload,
  ResetPasswordRequestPayload,
  NewPasswordRequestPayload,
} from '@src/stores/auth/types';

export interface RegistrationResponse {
  status: string;
}
export interface RegistrationErrors {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface LoginResponse {
  token: string;
  token_type: string;
  expires_in: string;
}

export interface LoginError {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export interface ResetPasswordRequestResponse {
  status: string;
}

export interface ResetPasswordRequestError {
  email: string;
}

export interface NewPasswordRequestResponse {
  status: string;
}

export interface NewPasswordRequestError {
  email: string;
}

export const register = async (
  registrationPayload: RegistrationRequestPayload,
) => {
  return await api.post<RegistrationResponse, RegistrationErrors>(
    '/auth/register',
    registrationPayload,
  );
};

export const login = async (loginPayload: LoginRequestPayload) => {
  return await api.post<LoginResponse, LoginError>('/auth/login', loginPayload);
};

export const resetPassword = async (payload: ResetPasswordRequestPayload) => {
  return await api.post<
    ResetPasswordRequestResponse,
    ResetPasswordRequestError
  >('/auth/password/email', payload);
};

export const newPassword = async (payload: NewPasswordRequestPayload) => {
  return await api.post<NewPasswordRequestResponse, NewPasswordRequestError>(
    '/auth/password/reset',
    payload,
  );
};
