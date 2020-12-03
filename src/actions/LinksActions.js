const { apiPost, apiGet } = require("../helpers/api");

export const LINK_CREATE = "LINK_CREATE";
export const LINK_LIST = "LINK_LIST";

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  delete data.isSocial;
  const payload = apiPost("/link", { ...data, isSocial });

  return { type: LINK_CREATE, payload };
};

export const linkList = () => {
  const payload = apiGet("/link");
  return { type: LINK_LIST, payload };
};
