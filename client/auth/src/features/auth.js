import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios, generateSecure, uuid } from "../config/libs";
import { AES } from "crypto-js";
import { SECURE, SK } from "../config";

const secure = () => {
  const str = AES.encrypt(`${generateSecure()}#${SECURE}`, SK).toString();
  return str;
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    { username, email, firstName, lastName, gender, phoneNo, password },
    thunkAPI
  ) => {
    try {
      const body = {
        username,
        email,
        firstName,
        lastName,
        gender,
        phoneNo,
        password,
      };
      const { data } = await Axios.post(`register`, body);
      return data;
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, We are working to fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const Login = createAsyncThunk(
  "auth/login",
  async ({ login, password, ip, userAgent }, thunkAPI) => {
    try {
      const body = { login, password, ip, userAgent };
      Axios.defaults.headers.common["Authorization"] = `Bearer ${secure()}`;
      const { data } = await Axios.post(`login`, body);
      return data;
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, We are working to fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const EmailVerify = createAsyncThunk(
  "account/email-verify",
  async ({ uuid, token }, thunkAPI) => {
    try {
      const body = { uuid, token };
      const { data } = await Axios.post(`email-verify`, body);
      return data;
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, We are working to fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

export const sendEmail = createAsyncThunk(
  "account/send-email",
  async ({ email, tag }, thunkAPI) => {
    try {
      const body = { email, tag };
      const { data } = await Axios.post(`send-email`, body);
      return data;
    } catch (err) {
      if (err?.response?.status === 400) {
        const errors = {
          status: err?.response?.status,
          statusText: err?.response?.statusText.toUpperCase(),
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      } else if (err?.message === "Network Error") {
        const errors = {
          status: 0,
          statusText: null,
          detail:
            "Unable to precess your request, We are working to fix this issue.",
        };
        return thunkAPI.rejectWithValue(errors);
      } else {
        const errors = {
          status: null,
          statusText: null,
          detail: err?.response?.data,
        };
        return thunkAPI.rejectWithValue(errors);
      }
    }
  }
);

const initialState = {
  loading: !!0,
  regLoading: !!0,
  isAuthenticated: !!0,
  details: {},
  error: !!0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    justAction: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(Login.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loading = !!0;
        state.details = action.payload;
      })
      .addCase(Login.rejected, (state) => {
        state.loading = !!0;
        state.error = !!1;
      })
      .addCase(register.pending, (state) => {
        state.loading = !!1;
        state.regLoading = !!1;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = !!0;
        state.regLoading = !!0;
        state.details = action.payload;
      })
      .addCase(register.rejected, (state) => {
        state.loading = !!0;
        state.regLoading = !!0;
        state.error = !!1;
      });
  },
});

export const { justAction } = authSlice.actions;
export default authSlice.reducer;
