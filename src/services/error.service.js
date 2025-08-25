// import { errorToaster } from "../helpers/toasterConfiguration";

const ERRORS_OBJECT = {
  400: "400Error",
  401: "401Error",
  403: "403Error",
  404: "404Error",
  500: "500Error",
};

export const handleError = (error) => {
  if (error?.status === 400) {
    error?.data?.errors?.map((error) => {
      errorToaster(error?.message);
    });
  } else if (error?.status === 401) {
    // store.dispatch(setSessionEnd(true));
    // loggingout();
  } else if (error?.status === 404) {
    // window.location.href = "/error";
  } else if (error?.status === 423) {
    // store.dispatch(setDisabledAccount(true));
  } else if (error?.status === 428) {
    // store.dispatch(setSessionEnd(true));
  } else if (error?.status === 500) {
    errorToaster(error?.data?.errors[0]?.message);
  }
};
