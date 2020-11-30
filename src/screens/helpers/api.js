import axios from "axios";
export const getApiUrl = (path) => {
  return `http://localhost:3001${path}`;
};

export const getheaders = () => {
  return {};
};
export const apiPost = (path, data = {}) => {
  const url = getApiUrl(path);
  const options = {
    headers: getheaders(),
  };
  return axios.post(url, data, options);
};
