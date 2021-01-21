import React, { useState, useEffect } from "react";
import Input from "../Input";
import { Container } from "./styles";
const FormGroup = ({ name, label, type, data, width, height }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : null;
    if (initialValue !== undefined) setValue(initialValue);
  }, [name, data]);

  const handleChange = (e) => {
    if (value === e.target.value) return;
    setValue(e.target.value);
  };
  const inputProps = {
    type,
    name,
    value: value || "",
    onChange: handleChange,
    width,
    height,
  };
  return (
    <Container>
      <label className="font-weight-bold">{label}</label>
      <Input {...inputProps} />
    </Container>
  );
};

export default FormGroup;
