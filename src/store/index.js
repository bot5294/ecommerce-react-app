import { createStore } from "redux";

import reducer from "../reducers/index.js";

let store;
function configureStore(state = {}) {
  store = createStore(reducer, state);

  return store;
}

export default configureStore();
