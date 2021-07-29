/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import createReducer from "./reducers";

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  // In case you want to inject more middleware

  const store = createStore(
    createReducer(),
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // Reducer registry
  store.injectedSagas = {}; // Saga registry

  return store;
}
