import { SubmitButtonProps } from "../../types/UIPropTypes";

const SubmitButton: React.FC<SubmitButtonProps> = ({ name }) => {
  return <button type="submit">{name}</button>;
};

export default SubmitButton;
