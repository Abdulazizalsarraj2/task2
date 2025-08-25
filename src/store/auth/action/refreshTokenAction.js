// // src/store/auth/action/refreshTokenAction.js
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { POST } from "../../../services/http.service";
// import environment from "../../../environment";

// export const refreshToken = createAsyncThunk(
//   "auth/refreshToken",
//   async (_, { rejectWithValue }) => {
//     try {
//       const refresh = localStorage.getItem(environment.REFRESH_KEY);

//       if (!refresh) {
//         return rejectWithValue({ message: "Refresh token not found" });
//       }

//       const res = await POST("auth/token/refresh", { refresh }, false);

//       if (res.status === 200) {
//         localStorage.setItem(environment.TOKEN_KEY, res.data.access);
//         return { access: res.data.access };
//       } else {
//         return rejectWithValue(res.data || { message: "Token refresh failed" });
//       }
//     } catch (err) {
//       return rejectWithValue(err.response?.data || { message: "Unexpected error" });
//     }
//   }
// );
