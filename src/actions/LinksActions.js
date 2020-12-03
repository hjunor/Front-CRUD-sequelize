const { apiPost } = require("../helpers/api");

export const LINK_CREATE = "LINK_CREATE";

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  delete data.isSocial;
  console.log("*** linkCreate.data", { ...data, ...isSocial });
  const payload = apiPost("/link", { ...data, isSocial });

  return { type: LINK_CREATE, payload };
};
