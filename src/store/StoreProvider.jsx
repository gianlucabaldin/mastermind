import React from "react";
import { Provider } from "react-redux";
import reducer from "./reducers/index";
import { createStore } from "redux";

export const store = createStore(
  reducer,
  // to enable Redux plugin within the browser
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const StoreProvider = props => (
  <Provider store={store}>{props.children}</Provider>
);

// expose store when run in Cypress
if (window.Cypress) {
  window.store = store;
}
