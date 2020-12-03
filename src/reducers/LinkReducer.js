const { LINK_CREATE } = require("../actions/LinksActions");

const initialState = {
  state: null,
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LINK_CREATE:
      const response = payload ? payload.data : null;
      const link = response ? response.data : null;

      return { ...state, link };

    default:
      return state;
  }
}
