import { RadioBoxProps } from "../../typing/UIPropTypes";
import Input from "./Input";

const RadioBox: React.FC<RadioBoxProps> = ({ id, options, onChange }) => {
  const radioInputs = options.map(value => {
    return <Input key={value} type="radio" id={id} value={value} onChange={onChange} />;
  });

  return <>{radioInputs}</>;
};

export default RadioBox;
