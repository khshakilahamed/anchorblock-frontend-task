import { createAsyncThunk } from "@reduxjs/toolkit";
import baseUrl from "../../helpers/baseUrl";
import { loginType } from "../../helpers/type";

interface LoginResponse {
  token: string;
}

interface RegisterResponse {
  id: number;
  token: string;
}

const baseURL = baseUrl();

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials: loginType) => {
    try {
      const res = await fetch(`${baseURL}/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const LoginResponse: LoginResponse = await res.json();

      // console.log(LoginResponse);

      localStorage.removeItem("token");
      localStorage.setItem("token", LoginResponse.token);

      return { token: LoginResponse.token };
    } catch (error) {
      console.log(error);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/sign-up",
  async (credentials: loginType) => {
    try {
      const res = await fetch(`${baseURL}/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const registerResponse: RegisterResponse = await res.json();

      localStorage.removeItem("token");
      localStorage.setItem("token", registerResponse.token);

      return { token: registerResponse.token };
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.removeItem("token");
  } catch (error) {
    console.log(error);
  }
});
