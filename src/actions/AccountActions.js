import { apiPost } from "../helpers/api";

export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SING_OUT = "SING_OUT";
export const INIT_ACCOUNT = "INIT_ACCOUNT";

export const signUp = (data) => {
  const payload = apiPost("/auth/sign-up", data);
  return { type: SIGN_UP, payload };
};

export const signIn = (data) => {
  const payload = apiPost("/auth/sign-in", data);
  return { type: SIGN_IN, payload };
};

export const signOut = () => {
  return { type: SING_OUT, payload: {} };
};

export const initAccount = () => {
  return { type: INIT_ACCOUNT, payload: {} };
};
