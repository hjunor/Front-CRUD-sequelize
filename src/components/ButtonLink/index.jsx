import React from "react";

import { GetButton, GetLink } from "./styles";

const ButtonLink = ({ color, name, title, handler, type, width, height, min_width }) => {
  const inputProps = {
    type,
    onClick: handler,
    name,
    color,
    width,
    height,
    min_width
  };

  return (
    <GetLink min_width={min_width} width={width} height={height} to={`/${name}`}>
      <GetButton {...inputProps}>{title}</GetButton>
    </GetLink>
  );
};

export default ButtonLink;
