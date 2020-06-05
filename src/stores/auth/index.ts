import { combineReducers } from 'redux';
import login from './reducers/login.reducer';
import register from './reducers/register.reducer';
import authOptions from './reducers/authOptions.reducer';
import authSaga from './sagas';

const authReducer = combineReducers({
  authOptions,
  login,
  register,
});

export type AuthState = ReturnType<typeof authReducer>;
export const saga = authSaga;
export default authReducer;
