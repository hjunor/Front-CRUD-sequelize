import { apiPost, apiRefreshToken } from "../helpers/api";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SING_OUT = "SING_OUT";
export const INIT_ACCOUNT = "INIT_ACCOUNT";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

export const signUp = (data) => {
  const payload = apiPost("/auth/sign-up", data);
  return { type: SIGN_UP, payload };
};

export const signIn = (data) => {
  try {
    const payload = apiPost("/auth/sign-in", data);

    return { type: SIGN_IN, payload };
  } catch (err) {
    const { data } = err.response;
    console.log("***data", data);
  }
};

export const signOut = () => {
  return { type: SING_OUT, payload: {} };
};

export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};

export const getFreshToken = () => {
  const payload = apiRefreshToken();
  return { type: REFRESH_TOKEN, payload };
};
