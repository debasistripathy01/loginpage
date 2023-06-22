import {
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
  } from "redux";
  
  import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;



const rootReducer = combineReducers({ });

const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export { store }
