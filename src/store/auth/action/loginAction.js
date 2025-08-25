// src/store/auth/action/loginAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../../../services/http.service";
import environment from "../../../environment";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await POST("auth/login", userData);
      const respData = response.data || {};
      const inner = respData.data || {};

      const user = inner.user || respData.user || null;
      const tokenObj = inner.token || respData.token || {};

      const accessToken =
        tokenObj.access_token ||
        tokenObj.accessToken ||
        respData.accessToken ||
        null;

      const refreshToken =
        tokenObj.refresh_token ||
        tokenObj.refreshToken ||
        respData.refreshToken ||
        null;

      // تخزين متسق باستخدام environment keys
      if (accessToken) {
        localStorage.setItem(environment.TOKEN_KEY, accessToken);
      }
      if (refreshToken) {
        localStorage.setItem(environment.REFRESH_TOKEN_KEY, refreshToken);
      }

      return {
        user,
        accessToken,
        refreshToken,
        message: respData.message || null,
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
