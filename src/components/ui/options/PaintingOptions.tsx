import SelectMenu from "../SelectMenu";
import { ExtraArtworkOptionsProps } from "../../../typing/UIPropTypes";

const PaintingOptions: React.FC<ExtraArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        name="paintingGenre"
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
