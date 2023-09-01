import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios, uuid } from "../config/libs";

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
          detail: err?.response?.data?.detail,
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
      .addCase(register.pending, (state) => {
        state.loading = !!1;
        state.regLoading = !!1;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = !!0;
        state.regLoading = !!0;
        console.log(action);
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
