import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/pages/Home";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { accountAuthSlice, accountInfoSlice, removeAuth, setAuth } from "components/store/accountSlice";
import axios from "axios";
import RootLayout from "components/layouts/root.layout";
import HomeLayout from "components/layouts/home.layout";

const MainRouter = () => {
  const accountAuth = useSelector(accountAuthSlice);

  useEffect(() => {
    if (accountAuth?.access?.token) {
      console.log(
        `Renewing access: ${accountAuth?.access?.token?.slice(-10)} / refresh: ${accountAuth?.refresh?.token?.slice(
          -10
        )}`
      );
      axios.defaults.headers.common["Authorization"] = `Bearer ${accountAuth.access.token}`;
    }
  }, [accountAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home></Home>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
