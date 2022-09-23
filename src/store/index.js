import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import reducer from "../reducers/index.js";

const persistConfig = {
  key: "counter",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false,
    }),
});
// let store;
// function configureStore(state = {}) {
//   store = createStore(reducer, state);

//   return store;
// }

// export default configureStore();
