import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  message: "",
  status: false,
};

export const createJob = createAsyncThunk(
  "createJob",
  async (data, thunkApi) => {
    const res = await axios.post(
      "https://tf-practical.herokuapp.com/api/job_post/",
      data,
      {
        headers: {
          Authorization: `Bearer ${thunkApi.getState().auth.token}`,
        },
      }
    );
    console.log(thunkApi.getState().auth.token);
    return res;
  }
);

const JobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: {
    [createJob.fulfilled]: (state, action) => {
      const data = action.payload;
      console.log(data);
      state.loading = false;
      state.message = "New job created";
    },

    [createJob.pending]: (state) => {
      state.loading = true;
      state.message = "";
    },

    [createJob.rejected]: (state) => {
      state.loading = false;
      state.message = "Failed to create a new job";
    },
  },
});

export default JobSlice.reducer;
