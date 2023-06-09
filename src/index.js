import React from "react";
import ReactDOM from "react-dom/client";
import "static/styles/reset.scss";
import "static/styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import MainRouter from "components/routers/MainRouter";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import AxiosMiddleware from "components/middlewares/axios.middleware";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "components/store/rootReducer";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddleware) => defaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <MainRouter />
      <Toaster position="top-center" />
      <AxiosMiddleware />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
