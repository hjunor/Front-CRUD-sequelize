import React, { useState, useEffect } from "react";

const FormGroup = ({ name, label, type, data }) => {
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
  };

  return (
    <div className="form-group">
      <label className="font-weight-bold">{label}</label>
      <input className="form-control" {...inputProps} />
    </div>
  );
};

export default FormGroup;
