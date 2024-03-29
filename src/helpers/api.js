import axios from "axios";
import { getToken, getRefreshToken } from "./account";

export const getApiUrl = (path) => {
  // return `http://localhost:3003${path}`;
  return `http://192.168.2.121:3003${path}`;
};

export const getheaders = () => {
  const token = getToken();
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};
export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };

  const res = axios.post(url, data, options);

  return res;
};

export const apiPut = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.put(url, data, options);
};

export const apiGet = (path) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.get(url, options);
};
export const apiDelete = (path) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  const result = axios.delete(url, options);
  return result;
};

export const apiRefreshToken = () => {
  const url = getApiUrl("/auth/refresh");
  const refreshToken = getRefreshToken();

  const options = {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  };

  const result = axios.post(url, {}, options);

  return result;
};
