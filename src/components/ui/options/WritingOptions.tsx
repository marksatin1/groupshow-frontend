import { ExtendedArtworkOptionsProps } from "../../../typing/UIPropTypes";
import RadioBox from "../RadioBox";
import SelectMenu from "../SelectMenu";

const WritingOptions: React.FC<ExtendedArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="writingGenre"
        defaultOption="Genre"
        options={["Novel", "Short Story", "Poem"]}
        onChange={onChange}
      />
      <RadioBox id="isFiction" options={["True", "False"]} onChange={onChange} />
      <input type="number" id="wordCount" placeholder="Word Count" min={1} onChange={onChange} />
    </>
  );
};

export default WritingOptions;
