import { combineReducers, configureStore } from "@reduxjs/toolkit";
import accountReducer from "components/store/accountSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
};

const rootReducers = combineReducers({
  account: accountReducer,
});

export default persistReducer(persistConfig, rootReducers);
