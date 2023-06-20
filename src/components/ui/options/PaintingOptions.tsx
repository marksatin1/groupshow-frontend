import SelectMenu from "../SelectMenu";
import { ExtendedArtworkOptionsProps } from "../../../typing/UIPropTypes";

const PaintingOptions: React.FC<ExtendedArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="paintingGenre"
        defaultOption="Genre"
        options={["Oil", "Watercolor", "Acrylic"]}
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
