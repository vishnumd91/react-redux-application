import { applyMiddleware, createStore, compose } from "redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

const logger = createLogger({
  collapsed: true,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(
      applyMiddleware(logger, immutableStateInvariantMiddleware())
    )
  );
}
