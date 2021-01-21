import React, { useState, useEffect } from "react";
import { Container, Label, Input } from "./styles";
const FormCheck = ({ name, label, data }) => {
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    const initialValue = data && data[name] ? data[name] : undefined;
    if (initialValue !== undefined) setIsChecked(!!initialValue);
  }, [name, data]);

  const handleChange = (e) => {
    if (isChecked === e.target.checked) return;
    setIsChecked(!!e.target.checked);
  };
  const inputProps = {
    type: "checkbox",
    name,
    checked: isChecked || "",
    onChange: handleChange,
  };

  return (
    <Container>
      <Input {...inputProps} />
      <Label> {label}</Label>
    </Container>
  );
};

export default FormCheck;
