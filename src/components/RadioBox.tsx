import React, { ChangeEventHandler } from "react";
import Input from "./Input";

type RadioBoxProps = {
  name: string;
  id: string;
  options: string[];
  onChange: ChangeEventHandler;
};

const RadioBox: React.FC<RadioBoxProps> = ({ name, id, options, onChange }) => {
  const radioInputs = options.map(value => {
    return <Input key={value} type="radio" name={name} id={id} value={value} onChange={onChange} />;
  });

  return <>{radioInputs}</>;
};

export default RadioBox;
