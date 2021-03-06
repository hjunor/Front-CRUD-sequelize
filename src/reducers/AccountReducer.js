import {
  SIGN_IN,
  SIGN_UP,
  SING_OUT,
  INIT_ACCOUNT,
  REFRESH_TOKEN,
} from "../actions/AccountActions";
import {
  removeAccount,
  removeRefreshToken,
  removeToken,
  setAccount,
  setRefreshToken,
  setToken,
  getAccount,
} from "../helpers/account";

const initialState = {
  account: null,
  error: null,
};
export default function AcoountReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGN_IN:
    case SIGN_UP:
      if (!payload) {
        return { ...state, error: { mesage: "Senha ou email errado" } };
      }
      const response = payload ? payload.data : null;
      const account = response ? response.data : null;
      const metadata = response ? response.metadata : null;

      const token = metadata ? metadata.token : null;
      const refreshToken = metadata ? metadata.refreshToken : null;

      if (account) setAccount(account);
      if (token) setToken(token);
      if (refreshToken) setRefreshToken(refreshToken);

      return { ...state, account };
    case SING_OUT:
      removeAccount();
      removeToken();
      removeRefreshToken();
      return { ...state, account: null };

    case INIT_ACCOUNT: {
      const account = getAccount();
      return { ...state, account };
    }
    case REFRESH_TOKEN: {
      const response = payload ? payload.data : null;
      const metadata = response ? response.metadata : null;
      const token = metadata ? metadata.token : null;

      if (token) setToken(token);

      return state;
    }
    default:
      return state;
  }
}
