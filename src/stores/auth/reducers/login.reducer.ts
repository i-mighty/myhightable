import { LoginState, LoginAction, LoginActionTypes } from '../types';
import { Reducer } from 'redux';

const initialState: LoginState = {
  email: '',
  password: '',
  new_password_confirm: '',
  otp: '',
  success: '',
  errors: {},
};

const loginReducer: Reducer<LoginState, LoginAction> = (
  state = initialState,
  action: LoginAction,
) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_REQUEST: {
      return { ...state };
    }
    case LoginActionTypes.LOGIN_REQUEST_FAILURE: {
      return { ...state, errors: action.payload.errors };
    }
    case LoginActionTypes.LOGIN_REQUEST_SUCCESS: {
      return { ...state, success: action.payload.success };
    }
    case LoginActionTypes.UPDATE_LOGIN_FIELD: {
      return { ...state, [action.payload.field]: action.payload.value };
    }
    default:
      return state;
  }
};

export default loginReducer;
