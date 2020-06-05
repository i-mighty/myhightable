import { RegisterState, RegisterActionTypes, RegisterAction } from '../types';
import { Reducer } from 'redux';

const initialState: RegisterState = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  errors: {
    email: [],
    name: [],
    password: [],
    password_confirmation: [],
  },
  success: '',
};

const registerReducer: Reducer<RegisterState, RegisterAction> = (
  state = initialState,
  action: RegisterAction,
) => {
  switch (action.type) {
    case RegisterActionTypes.REGISTRATION_REQUEST: {
      return { ...state };
    }
    case RegisterActionTypes.REGISTRATION_REQUEST_FAILURE: {
      return { ...state, errors: action.payload.errors };
    }
    case RegisterActionTypes.REGISTRATION_REQUEST_SUCCESS: {
      return { ...state, loading: false, success: action.payload.status };
    }
    case RegisterActionTypes.UPDATE_REGISTRATION_FIELD: {
      return { ...state, [action.payload.field]: action.payload.value };
    }
    default:
      return state;
  }
};
export default registerReducer;
