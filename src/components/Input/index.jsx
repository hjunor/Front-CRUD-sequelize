import React from "react";

import { InputStyles } from "./styles";

const Input = ({ placeholder, type, name, width, height, value, onChange }) => {
  return (
    <InputStyles
      name={name}
      placeholder={placeholder}
      type={type}
      width={width}
      height={height}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
