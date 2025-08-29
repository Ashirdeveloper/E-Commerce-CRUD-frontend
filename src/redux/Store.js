import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist'
import { rootReducers } from "./reducers";

const persistConfig = {
  key: 'root',
  storage,
    whitelist: ['Auth'] // only Auth will be persisted
}
const persistedReducer = persistReducer(persistConfig, rootReducers)
const store = configureStore({
  reducer: persistedReducer
});

const persistor = persistStore(store)

export { store, persistor };
