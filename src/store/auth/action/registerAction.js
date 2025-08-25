// src/store/auth/action/registerAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST } from "../../../services/http.service";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await POST("auth/register", userData, false);

      if (response?.status === 200 && response?.data) {
        return response.data;
      }

      // نخزن كامل response.data بدل من مجرد message
      return rejectWithValue(response?.data || { message: "Unexpected API response" });
    } catch (error) {
      return rejectWithValue(
        error?.response || { message: "An unexpected error occurred" }
      );
    }
  }
);

