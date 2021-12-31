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
export const signupUser = createAsyncThunk("signupUser", async (data) => {
  const res = await axios.post(
    "https://tf-practical.herokuapp.com/api/register/",
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
      state.loading = false;
      state.token = data.access;
      if (data) {
        state.userInfo = data.user;
      }
      localStorage.setItem("token", JSON.stringify(state.token));
    },
    [signupUser.fulfilled]: (state, action) => {
      const { data } = action.payload;
      state.loading = false;
      state.signUpError = "";
      state.message =
        "Registration successful. Now sign in to enter the job portal";
      if (data) {
        state.userInfo = data;
      }
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.logInError = "";
    },
    [signupUser.pending]: (state) => {
      state.loading = true;
      state.signUpError = "";
      state.message = "";
    },
    [loginUser.rejected]: (state) => {
      state.loading = false;
      state.logInError = "Invalid User name or Password";
      state.message = "";
    },
    [signupUser.rejected]: (state) => {
      state.loading = false;
      state.signUpError =
        "Failed to create an account (password must contain at least 8 characters and a combination of letter,number or symbols)";
      state.message = "";
    },
  },
});

export const { signoutUser } = AuthSlice.actions;

export default AuthSlice.reducer;
