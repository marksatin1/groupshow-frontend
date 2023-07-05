import { ArtworkOptionsPropTypes } from "../../../types/ArtworkPropTypes";
import SelectMenu from "../SelectMenu";

const PaintingOptions: React.FC<ArtworkOptionsPropTypes> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="paintingType"
        defaultOption="Type"
        options={["OIL", "WATERCOLOR", "ACRYLIC"]}
        onChange={onChange}
      />
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

export default PaintingOptions;
