import { ExtraArtworkOptionsProps } from "../../../typing/UIPropTypes";
import RadioBox from "../RadioBox";

const PhotographOptions: React.FC<ExtraArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <RadioBox id="isPrint" options={["True", "False"]} onChange={onChange} />
      <input type="number" id="width" placeholder="Width" min={0} step={0.25} onChange={onChange} />
      <label htmlFor="width">in</label>
      <input
        type="number"
        id="height"
        placeholder="Height"
        min={0}
        step={0.25}
        onChange={onChange}
      />
      <label htmlFor="height">in</label>
    </>
  );
};

export default PhotographOptions;
