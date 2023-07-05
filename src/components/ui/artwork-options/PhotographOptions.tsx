import { ArtworkOptionsPropTypes } from "../../../types/ArtworkPropTypes";
import RadioBox from "../RadioBox";

const PhotographOptions: React.FC<ArtworkOptionsPropTypes> = ({ onChange }) => {
  return (
    <>
      <p>Is the Photo printed? Yes / No</p>
      <RadioBox id="isPrinted" options={["True", "False"]} onChange={onChange} />
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
