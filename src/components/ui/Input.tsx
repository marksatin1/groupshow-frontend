import { InputPropTypes } from "../../types/UIPropTypes";

const Input: React.FC<InputPropTypes> = ({
  type,
  id,
  placeholder,
  autocomplete,
  value,
  onChange,
}) => {
  return (
    <>
      <label htmlFor={id}>{type === "radio" ? value : undefined}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        autoComplete={autocomplete}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
