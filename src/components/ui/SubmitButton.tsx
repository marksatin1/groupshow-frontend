import { SubmitButtonPropTypes } from "../../types/UIPropTypes";

const SubmitButton: React.FC<SubmitButtonPropTypes> = ({ name }) => {
  return (
    <button className="btn" type="submit">
      {name}
    </button>
  );
};

export default SubmitButton;
