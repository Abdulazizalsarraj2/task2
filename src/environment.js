
const config = {
  //API ENDPOINTS
  AUTH_ENDPOINT: "Auth",

  //LOCAL STORAGE KEYS
  TOKEN_KEY: "token",
  REFRESH_TOKEN_KEY: "refreshToken",
  DIRECTION_KEY: "dir",

  //CONSTANT
  API_KEY: "",

  // API_URL: axios.create({
  //    baseURL: '',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // }),
  API_URL: 'https://teknova-sy.com/backend/api',
};

const environment = {
  ...config,
};

export default environment;
