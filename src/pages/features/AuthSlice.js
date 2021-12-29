import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : "",
  loading: false,
  signUpError: "",
  logInError: "",
  message: "",
  userInfo: "",
};

export const loginUser = createAsyncThunk("loginuser", async (data) => {
  const res = await axios.post(
    "https://tf-practical.herokuapp.com/api/login/",
    data
  );

  return res;
});

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signoutUser: (state) => {
      localStorage.removeItem("token");
      state.token = "";
      state.userInfo = "";
      state.logInError = "";
      state.signUpError = "";
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      const { data } = action.payload;
      console.log(data);
      state.loading = false;
      state.token = data.access;
      if (data) {
        state.userInfo = data.user;
      }
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.logInError = "";
    },
    [loginUser.rejected]: (state) => {
      state.loading = false;
      state.logInError = "Invalid User name or Password";
      state.message = "";
    },
  },
});

export const { signoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
