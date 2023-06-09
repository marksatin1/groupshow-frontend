import React, { ChangeEventHandler } from "react";

type InputProps = {
  type: string;
  name: string;
  id: string;
  value?: string;
  onChange: ChangeEventHandler;
};

const Input: React.FC<InputProps> = ({ type, name, id, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{type === "radio" ? value : undefined}</label>
      <input type={type} name={name} id={id} placeholder={name} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
