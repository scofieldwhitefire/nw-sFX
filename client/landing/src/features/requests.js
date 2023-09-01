import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Axios, uuid } from "../config/libs";

export const getPricing = createAsyncThunk(
  "request/get-pricing",
  async (_, thunkAPI) => {
    try {
      const { data } = await Axios.get(`get-pricing`);
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
            "Unable to precess your request, we are working to Fix this issue.",
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

export const getTestimonial = createAsyncThunk(
  "request/get-testimonial",
  async (_, thunkAPI) => {
    try {
      const { data } = await Axios.get(`get-testimonial`);
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
            "Unable to precess your request, we are working to Fix this issue.",
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

export const getFaqs = createAsyncThunk(
  "request/get-faqs",
  async ({ len }, thunkAPI) => {
    try {
      const { data } = await Axios.get(`get-faqs?len=${len}`);
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
            "Unable to precess your request, we are working to Fix this issue.",
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

export const getBlog = createAsyncThunk(
  "request/get-blog",
  async ({ len }, thunkAPI) => {
    try {
      const { data } = await Axios.get(`get-blog?len=${len}`);
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
            "Unable to precess your request, we are working to Fix this issue.",
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

export const getAllBlog = createAsyncThunk(
  "request/get-all-blog",
  async ({ len }, thunkAPI) => {
    const body = { len };
    try {
      const { data } = await Axios.post(`get-all-blog`, body);
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
            "Unable to precess your request, we are working to Fix this issue.",
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

export const Calculate = createAsyncThunk(
  "request/calculate",
  async ({ plan }, thunkAPI) => {
    try {
      const { data } = await Axios.post(`get-subplans`, { plan });
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
            "Unable to precess your request, we are working to Fix this issue.",
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
  pricing: [],
  testimonial: [],
  faqs: [],
  blogs: [],
  allBlogs: { blogs: [], topPost: [], tags: [] },
  cals: { subPlans: [] },
};

const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    justAction: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlog.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(getAllBlog.fulfilled, (state, action) => {
        state.loading = !!0;
        state.allBlogs = action.payload;
      })
      .addCase(getAllBlog.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(Calculate.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(Calculate.fulfilled, (state, action) => {
        state.loading = !!0;
        state.cals = action.payload;
      })
      .addCase(Calculate.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(getBlog.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(getBlog.fulfilled, (state, action) => {
        state.loading = !!0;
        state.blogs = action.payload;
      })
      .addCase(getBlog.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(getFaqs.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(getFaqs.fulfilled, (state, action) => {
        state.loading = !!0;
        state.faqs = action.payload;
      })
      .addCase(getFaqs.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(getTestimonial.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(getTestimonial.fulfilled, (state, action) => {
        state.loading = !!0;
        state.testimonial = action.payload;
      })
      .addCase(getTestimonial.rejected, (state) => {
        state.loading = !!0;
      })
      .addCase(getPricing.pending, (state) => {
        state.loading = !!1;
      })
      .addCase(getPricing.fulfilled, (state, action) => {
        state.loading = !!0;
        state.pricing = action.payload;
      })
      .addCase(getPricing.rejected, (state) => {
        state.loading = !!0;
      });
  },
});

export const { justAction } = requestsSlice.actions;
export default requestsSlice.reducer;
