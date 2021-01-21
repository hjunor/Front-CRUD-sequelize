import React from "react";

import { GetButton } from "./styles";

const Button = ({ color, name, title, handler, type, width, height }) => {
  const inputProps = {
    type,
    onClick: handler,
    name,
    color,
    width,
    height,
  };

  return <GetButton {...inputProps}>{title}</GetButton>;
};

export default Button;
