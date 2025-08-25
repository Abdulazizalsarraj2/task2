// // src/store/auth/registerSlice.js
// import { createSlice } from "@reduxjs/toolkit";
// import { registerUser } from "./action/registerAction";

// const initialState = {
//   user: null,
//   isLoading: false,
//   error: null,    // نخزن هنا { message, errors }
//   message: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.message = null;
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.message = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = {
//           name: action.payload.data?.name,
//           email: action.payload.data?.email,
//         };
//         state.message = action.payload.message || null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload; // نخزن كل شيء (message + errors)
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;


// src/store/auth/authSlice.js
// src/store/auth/authSlice.js

// import { createSlice } from "@reduxjs/toolkit";
// import { registerUser } from "./action/registerAction";
// import { loginUser } from "./action/loginAction";
// import environment from "../../environment";

// const initialState = {
//   user: null,
//   accessToken: localStorage.getItem(environment.TOKEN_KEY) || null,
//   isAuthenticated: !!localStorage.getItem(environment.TOKEN_KEY),
//   isLoading: false,
//   error: null,
//   message: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem(environment.TOKEN_KEY);
//       localStorage.removeItem(environment.REFRESH_TOKEN_KEY);
//       state.user = null;
//       state.accessToken = null;
//       state.isAuthenticated = false;
//       state.message = null;
//       state.error = null;
//       state.isLoading = false;
//     },
//     refreshTokenSuccess: (state, action) => {
//       state.accessToken = action.payload;
//       state.isAuthenticated = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.message = null;
//       })
//       .addCase(registerUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.user = action.payload.data?.user || action.payload.user || null;
//         state.message = action.payload.message || null;
//       })
//       .addCase(registerUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || { message: "حدث خطأ أثناء التسجيل" };
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//         state.message = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isAuthenticated = true;
//         state.user = action.payload.user || null;
//         state.accessToken = action.payload.accessToken || null;
//         state.message = action.payload.message || "تم تسجيل الدخول بنجاح";
//         state.error = null;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || { message: "فشل تسجيل الدخول" };
//       });
//   },
// });

// export const { logout, refreshTokenSuccess } = authSlice.actions;
// export default authSlice.reducer;


// src/store/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./action/registerAction";
import { loginUser } from "./action/loginAction";
// import { refreshTokenAction } from "./action/refreshTokenAction";
import { logoutUser } from "./action/logoutAction";
import environment from "../../environment";

const initialState = {
  user: null,
  accessToken: localStorage.getItem(environment.TOKEN_KEY) || null,
  refreshToken: localStorage.getItem(environment.REFRESH_TOKEN_KEY) || null,
  isAuthenticated: !!localStorage.getItem(environment.TOKEN_KEY),
  isLoading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem(environment.TOKEN_KEY);
      localStorage.removeItem(environment.REFRESH_TOKEN_KEY);
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
      state.message = null;
      state.error = null;
      state.isLoading = false;
    },
    refreshTokenSuccess: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message || "تم إنشاء الحساب بنجاح";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Login
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.accessToken = action.payload.access_token;
        // state.refreshToken = action.payload.refresh_token;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuthenticated = true;
        state.user = action.payload.user || null;

        // تخزين التوكن
        // localStorage.setItem(environment.TOKEN_KEY, action.payload.access_token);
        // localStorage.setItem(environment.REFRESH_TOKEN_KEY, action.payload.refresh_token);
        localStorage.setItem(environment.TOKEN_KEY, action.payload.accessToken);
        localStorage.setItem(environment.REFRESH_TOKEN_KEY, action.payload.refreshToken);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    // Refresh Token
    // builder
    //   .addCase(refreshTokenAction.fulfilled, (state, action) => {
    //     state.accessToken = action.payload;
    //     state.isAuthenticated = true;
    //     localStorage.setItem(environment.TOKEN_KEY, action.payload);
    //   })
    //   .addCase(refreshTokenAction.rejected, (state) => {
    //     // إذا فشل تجديد التوكن → نسجل خروج
    //     authSlice.caseReducers.logout(state);
    //   });

    // Logout
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        authSlice.caseReducers.logout(state);
      })
      .addCase(logoutUser.rejected, (state) => {
        authSlice.caseReducers.logout(state);
      });
  },
});

export const { logout, refreshTokenSuccess } = authSlice.actions;
export default authSlice.reducer;
