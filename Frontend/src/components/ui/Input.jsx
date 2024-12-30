import React, { forwardRef } from "react";
import "./input.css";

const Input = forwardRef(({ placeholder, required, onChange, onKeyDown, value, type, className}, ref) => {
  const UpdatedClassName = className ? `${className} ui_input` : "ui_input";
  return (
    <input
      ref={ref}
      type={type}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={value}
      placeholder={placeholder}
      required={required}
      className={UpdatedClassName}
    />
  );
});

export default Input;
