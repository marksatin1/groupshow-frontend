import { InputProps } from "../../typing/UIPropTypes";

const Input: React.FC<InputProps> = ({ type, id, placeholder, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{type === "radio" ? value : undefined}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
