/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { logout, signIn, signUp } from "./authActions";

interface InitialStateInterface {
  token: string | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  error: string | null;
}

const token = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState: InitialStateInterface = {
  token,
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.isSuccess = true;
        state.token = payload?.token!;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message!;
      });

    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = null;
        state.token = payload?.token!;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message!;
      });

    builder
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = null;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message!;
      });
  },
});

export default authSlice.reducer;
