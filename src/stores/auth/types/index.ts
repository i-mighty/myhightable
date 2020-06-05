export type AuthOptions =
  | 'login'
  | 'register'
  | 'passwordResetRequest'
  | 'otp'
  | 'newPassword';

export enum AuthOptionActionTypes {
  SET_AUTH_OPTION = 'SET_AUTH_OPTION',
}

export interface SetAuthOptionType {
  type: AuthOptionActionTypes.SET_AUTH_OPTION;
  payload: {
    authOption: AuthOptions;
  };
}

export enum RegisterActionTypes {
  REGISTRATION_REQUEST = 'REGISTRATION_REQUEST',
  REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS',
  REGISTRATION_REQUEST_FAILURE = 'REGISTRATION_REQUEST_FAILURE',
  UPDATE_REGISTRATION_FIELD = 'UPDATE_REGISTRATION_FIELD',
}

export enum LoginActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE',
  UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD',

  RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
  NEW_PASSWORD_REQUEST = 'NEW_PASSWORD_REQUEST',
}

export interface RegistrationRequestPayload {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface LoginRequestPayload {
  email: string;
  password: string;
}

export interface ResetPasswordRequestPayload {
  email: string;
}

export interface NewPasswordRequestPayload {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export interface LoginRequestActionType {
  type: LoginActionTypes.LOGIN_REQUEST;
  payload: Omit<LoginState, 'loading'>;
}

export interface LoginSuccessActionType {
  type: LoginActionTypes.LOGIN_REQUEST_SUCCESS;
  payload: {
    success: string;
  };
}

export interface LoginFailureActionType {
  type: LoginActionTypes.LOGIN_REQUEST_FAILURE;
  payload: {
    errors: {
      [key in LoginFields]?: string[];
    };
  };
}

export interface LoginFieldUpdateType {
  type: LoginActionTypes.UPDATE_LOGIN_FIELD;
  payload: {
    field: string;
    value: string;
  };
}

export type LoginAction =
  | LoginRequestActionType
  | LoginSuccessActionType
  | LoginFailureActionType
  | LoginFieldUpdateType;

export interface RegisterRequestActionType {
  type: RegisterActionTypes.REGISTRATION_REQUEST;
}

export interface RegisterSuccessActionType {
  type: RegisterActionTypes.REGISTRATION_REQUEST_SUCCESS;
  payload: {
    status: string; //verification.sent
  };
}

export interface RegisterFailureActionType {
  type: RegisterActionTypes.REGISTRATION_REQUEST_FAILURE;
  payload: {
    errors: {
      [key in RegisterFields]?: string[];
    };
  };
}

export interface RegistrationFieldUpdateType {
  type: RegisterActionTypes.UPDATE_REGISTRATION_FIELD;
  payload: {
    field: string;
    value: string;
  };
}

export type RegisterAction =
  | RegisterRequestActionType
  | RegisterSuccessActionType
  | RegisterFailureActionType
  | RegistrationFieldUpdateType;

export type RegisterFields =
  | 'name'
  | 'email'
  | 'password'
  | 'password_confirmation';

export type LoginFields = 'email' | 'password' | 'new_password_confirm | otp';

export interface RegisterState {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  errors: {
    [key in RegisterFields]?: string[];
  };
  success: string;
}

export interface LoginState {
  email: string;
  password: string;
  new_password_confirm: string;
  otp: string;
  success: string;
  errors: {
    [key in LoginFields]?: string[];
  };
}
