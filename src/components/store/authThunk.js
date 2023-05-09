import { createAsyncThunk } from "@reduxjs/toolkit";
import { composeReqUrl } from "components/store/thunkUtil";
import axios from "axios";

const APP_SERVER_URL = process.env.REACT_APP_APP_SERVER_URL;

// TODO :: find alternative of createAsyncThunk
export const login = createAsyncThunk("auth/login", async ({ email, encryptedSecret }) => {
  const url = composeReqUrl(APP_SERVER_URL, "auth/login");
  const result = await axios.post(url, { email, encryptedSecret }, { withCredentials: true });
  return result.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const url = composeReqUrl(APP_SERVER_URL, "auth/logout");
  const result = await axios.post(url, null, { withCredentials: true });
  return result.data;
});

export const singup = createAsyncThunk("auth/signup", async ({ email, username, encryptedSecret }) => {
  const url = composeReqUrl(APP_SERVER_URL, "auth/signup");
  const result = await axios.post(url, {
    email,
    userName: username,
    encryptedSecret,
  });
  return result.data;
});

export const refreshAuthToken = createAsyncThunk("auth/refreshToken", async ({ userName, email, refreshToken }) => {
  const url = composeReqUrl(APP_SERVER_URL, "auth/refreshToken");
  const result = await axios.post(url, { userName, email, refreshToken }, { withCredentials: true });
  return result.data;
});

export const verifyToken = createAsyncThunk("auth/verifyToken", async ({ userName, email, refreshToken }) => {
  const url = composeReqUrl(APP_SERVER_URL, "auth/verifyToken");
  const result = await axios.post(url, { userName, email, refreshToken }, { withCredentials: true });
  return result.data;
});
