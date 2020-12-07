import axios from "axios";
import { getToken } from "./account";

export const getApiUrl = (path) => {
  return `http://localhost:3001${path}`;
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
  return axios.post(url, data, options);
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
  return axios.delete(url, options);
};
