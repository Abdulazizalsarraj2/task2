// src/store/auth/action/logoutAction.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import environment from "../../../environment";

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem(environment.TOKEN_KEY);
      if (!token) return true;

      await axios.post(`${environment.API_URL}/auth/logout`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });

      return true;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: "فشل تسجيل الخروج" });
    }
  }
);
