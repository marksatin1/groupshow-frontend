import { ArtworkOptionsPropTypes } from "../../../types/ArtworkPropTypes";
import RadioBox from "../RadioBox";
import SelectMenu from "../SelectMenu";

const WritingOptions: React.FC<ArtworkOptionsPropTypes> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="writingType"
        defaultOption="Type"
        options={["NOVEL", "SHORT STORY", "POEM"]}
        onChange={onChange}
      />
      <RadioBox id="isFiction" options={["True", "False"]} onChange={onChange} />
      <input type="number" id="wordCount" placeholder="Word Count" min={1} onChange={onChange} />
    </>
  );
};

export default WritingOptions;
