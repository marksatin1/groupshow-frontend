import { RadioBoxProps } from "../../types/UIPropTypes";
import Input from "./Input";

const RadioBox: React.FC<RadioBoxProps> = ({ id, options, onChange }) => {
  const radioInputs = options.map(value => {
    return <div className="radio-group"><Input key={value} type="radio" id={id} value={value} onChange={onChange} /></div>;
  });

  return <>{radioInputs}</>;
};

export default RadioBox;
