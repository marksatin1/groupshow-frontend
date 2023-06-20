import { SubmitButtonProps } from "../../typing/UIPropTypes";

const SubmitButton: React.FC<SubmitButtonProps> = ({ name }) => {
  return <button type="submit">{name}</button>;
};

export default SubmitButton;
