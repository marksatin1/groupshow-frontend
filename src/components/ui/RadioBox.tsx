import { RadioBoxPropTypes } from "../../types/UIPropTypes";
import Input from "./Input";

const RadioBox: React.FC<RadioBoxPropTypes> = ({ id, options, onChange }) => {
  const radioInputs = options.map(option => {
    return <Input key={option} type="radio" id={id} onChange={onChange} />;
  });

  return <div className="radio-group">{radioInputs}</div>;
};

export default RadioBox;
