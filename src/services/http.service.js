// import axios from "axios";
// import environment from "../environment";
// import { handleError } from "./error.service";

// const getConfig = (isToken) => {
//   if (isToken) {
//     return {
//       headers: {
//         "Time-Zone-Offset": new Date().getTimezoneOffset() * 60 * -1,
//         Authorization: `Bearer ${localStorage.getItem(environment.TOKEN_KEY)}`,
//       },
//     };
//   } else
//     return {
//       headers: {
//         "Time-Zone-Offset": new Date().getTimezoneOffset() * 60 * -1,
//       },
//     };
// };

// const getPostFormConfig = (isToken) => {
//   if (isToken)
//     return {
//       headers: {
//         "Time-Zone-Offset": new Date().getTimezoneOffset() * 60,
//         Authorization: `Bearer ${localStorage.getItem(environment.TOKEN_KEY)}`,
//         "Content-Type": "multipart/form-data",
//       },
//     };
//   else
//     return {
//       headers: {
//         "Time-Zone-Offset": new Date().getTimezoneOffset() * 60,
//         "Content-Type": "multipart/form-data",
//       },
//     };
// };

// export const GET = async (apiPath, isToken) => {
//   let res = {};
//   await axios
//     .get(`${environment.API_URL}/${apiPath}`, getConfig(isToken))
//     .then((response) => {
//       res.status = response.status;
//       res.data = response.data;
//     })
//     .catch((error) => {
//       handleError(error?.response);
//     });
//   return res;
// };

// export const GETWithParams = async (apiPath, requestParams, isToken) => {
//   let res = {};
//   try {
//     await axios
//       .get(`${environment.API_URL}/${apiPath}`, {
//         params: requestParams,
//         ...getConfig(isToken),
//       })
//       .then((response) => {
//         res.status = response?.status;
//         res.data = response?.data;
//       });
//   } catch (error) {
//     handleError(error?.response);
//   }
//   return res;
// };

// export const POST = async (apiPath, requestBody, isToken) => {
//   let res = {};

//   await axios
//     .post(`${environment.API_URL}/${apiPath}`, requestBody, getConfig(isToken))
//     .then((response) => {
//       res.status = response.status;
//       res.data = response.data;
//     })
//     .catch((error) => {
//       handleError(error?.response);
//     });
//   return res;
// };

// export const POSTForm = async (apiPath, requestBody, isToken) => {
//   let res = {};
//   await axios
//     .post(
//       `${environment.API_URL}/${apiPath}`,
//       requestBody,
//       getPostFormConfig(isToken)
//     )
//     .then((response) => {
//       res.status = response.status;
//       res.data = response.data;
//     })
//     .catch((error) => {
//       handleError(error?.response);
//     });
//   return res;
// };

// export const PUT = async (apiPath, requestBody, isToken) => {
//   let res = {};
//   try {
//     await axios
//       .put(`${environment.API_URL}/${apiPath}`, requestBody, getConfig(isToken))
//       .then((response) => {
//         res.status = response?.status;
//         res.data = response?.data;
//       });
//   } catch (error) {
//     handleError(error?.response);
//   }
//   return res;
// };

// export const PUTForm = async (apiPath, requestBody, isToken) => {
//   let res = {};
//   await axios
//     .put(
//       `${environment.API_URL}/${apiPath}`,
//       requestBody,
//       getPostFormConfig(isToken)
//     )
//     .then((response) => {
//       res.status = response.status;
//       res.data = response.data;
//     })
//     .catch((error) => {
//       handleError(error?.response);
//     });
//   return res;
// };

// export const PATCH = async (apiPath, requestBody, isToken) => {
//   let res = {};
//   try {
//     await axios
//       .patch(
//         `${environment.API_URL}/${apiPath}`,
//         requestBody,
//         getConfig(isToken)
//       )
//       .then((response) => {
//         res.status = response?.status;
//         res.data = response?.data;
//       });
//   } catch (error) {
//     handleError(error?.response);
//   }
//   return res;
// };

// export const PATCHForm = async (apiPath, requestBody, isToken) => {
//   let res = {};
//   try {
//     await axios
//       .patch(
//         `${environment.API_URL}/${apiPath}`,
//         requestBody,
//         getPostFormConfig(isToken)
//       )
//       .then((response) => {
//         res.status = response?.status;
//         res.data = response?.data;
//       });
//   } catch (error) {
//     handleError(error?.response);
//   }
//   return res;
// };

// export const DELETE = async (apiPath, isToken) => {
//   let res = {};
//   try {
//     await axios
//       .delete(`${environment.API_URL}/${apiPath}`, getConfig(isToken))
//       .then((response) => {
//         res.status = response?.status;
//         res.data = response?.data;
//       });
//   } catch (error) {
//     handleError(error?.response);
//   }
//   return res;
// };


// src/services/http.service.js
import axios from "axios";
import environment from "../environment";
import { store } from "../store/index";
import { refreshTokenSuccess, logout } from "../store/auth/authSlice";
console.log("http.service loaded");
// Request interceptor
axios.interceptors.request.use(
  (config) => {
    try {
      const url = config.url || "";
      if (
        url.includes("/auth/login") ||
        url.includes("/auth/register") ||
        url.includes("/auth/token/refresh")
      ) {
        return config;
      }

      const token = localStorage.getItem(environment.TOKEN_KEY);
      if (token) {
        config.headers = config.headers || {};
        config.headers["Authorization"] = "Bearer " + token;
      }
      return config;
    } catch (err) {
      return config;
    }
  },
  (error) => Promise.reject(error)
);

// Response interceptor (معالجة 401 وتجديد التوكن)
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const status = error?.response?.status;

    if (
      status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/auth/token/refresh")
    ) {
      originalRequest._retry = true;

      const refreshToken = localStorage.getItem(environment.REFRESH_TOKEN_KEY);
      
      console.log("[INTERCEPTOR] refreshToken present:", !!refreshToken);

      if (refreshToken) {
        try {
          const resp = await axios.post(
            `${environment.API_URL}/auth/token/refresh`,
            { refreshToken }
          );
          

          const respData = resp.data || {};
          const inner = respData.data || {};
          const tokenObj = inner.token || respData.token || {};

          const newAccessToken =
            tokenObj.access_token ||
            tokenObj.accessToken ||
            respData.accessToken ||
            null;

          const newRefreshToken =
            tokenObj.refresh_token ||
            tokenObj.refreshToken ||
            respData.refreshToken ||
            null;

            console.log("[INTERCEPTOR] refresh response data:", respData);
            console.log(
              "[INTERCEPTOR] newAccessToken:",
              newAccessToken ? `${newAccessToken.slice(0,50)}...` : null
            );
          
          if (newAccessToken) {
            localStorage.setItem(environment.TOKEN_KEY, newAccessToken);
            if (newRefreshToken) {
              localStorage.setItem(environment.REFRESH_TOKEN_KEY, newRefreshToken);
            }

            store.dispatch(refreshTokenSuccess(newAccessToken));

            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers["Authorization"] = "Bearer " + newAccessToken;

            return axios(originalRequest);
          } else {
            console.error("Refresh endpoint returned no access token", respData);
            store.dispatch(logout());
            window.location.href = "/login";
            return Promise.reject(error);
          }
        } catch (refreshError) {
          console.error("Unable to refresh token", refreshError);
          store.dispatch(logout());
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        store.dispatch(logout());
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

// Helpers
const getConfig = () => ({
  headers: {
    "Time-Zone-Offset": new Date().getTimezoneOffset() * 60 * -1,
  },
});

export const GET = async (apiPath) => {
  try {
    const response = await axios.get(`${environment.API_URL}/${apiPath}`, getConfig());
    return { status: response.status, data: response.data };
  } catch (error) {
    handleError(error?.response);
    throw error?.response?.data || { message: "An error occurred" };
  }
};

export const POST = async (apiPath, requestBody) => {
  try {
    const response = await axios.post(
      `${environment.API_URL}/${apiPath}`,
      requestBody,
      getConfig()
    );
    return { status: response.status, data: response.data };
  } catch (error) {
    handleError(error?.response);
    throw error?.response?.data || { message: "An error occurred" };
  }
};

export const PUT = async (apiPath, requestBody) => {
  try {
    const response = await axios.put(
      `${environment.API_URL}/${apiPath}`,
      requestBody,
      getConfig()
    );
    return { status: response.status, data: response.data };
  } catch (error) {
    handleError(error?.response);
    throw error?.response?.data || { message: "An error occurred" };
  }
};

export const DELETE = async (apiPath) => {
  try {
    const response = await axios.delete(`${environment.API_URL}/${apiPath}`, getConfig());
    return { status: response.status, data: response.data };
  } catch (error) {
    handleError(error?.response);
    throw error?.response?.data || { message: "An error occurred" };
  }
};

export const handleError = (error) => {
  if (!error) return;
  if (error.status === 401) {
    console.error("Session expired or invalid token.");
  } else if (error.status === 500) {
    console.error(
      "Server Error:",
      error?.data?.errors?.[0]?.message || error?.data?.message
    );
  }
};

