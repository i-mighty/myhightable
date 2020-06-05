import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import auth from './auth';
import appNotification from './appNotifications';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
  appNotification,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(saga);
  return store;
};

export const store = configureStore();
export type RootState = ReturnType<typeof rootReducer>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default rootReducer;
