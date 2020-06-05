import {
  AuthOptions,
  SetAuthOptionType,
  AuthOptionActionTypes,
} from '../types';
import { Reducer } from 'redux';

const initialState: AuthOptions = 'register';

const authOptionReducer: Reducer<AuthOptions, SetAuthOptionType> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case AuthOptionActionTypes.SET_AUTH_OPTION: {
      return action.payload.authOption;
    }
    default:
      return state;
  }
};

export default authOptionReducer;
