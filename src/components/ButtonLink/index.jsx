import React from "react";

import { GetButton, GetLink } from "./styles";

const ButtonLink = ({ color, name, title, handler, type, width, height }) => {
  const inputProps = {
    type,
    onClick: handler,
    name,
    color,
    width,
    height,
  };

  return (
    <GetLink width={width} height={height} to={`/${name}`}>
      <GetButton {...inputProps}>{title}</GetButton>
    </GetLink>
  );
};

export default ButtonLink;
