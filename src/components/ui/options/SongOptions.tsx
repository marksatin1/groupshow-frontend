import { ExtraArtworkOptionsProps } from "../../../typing/UIPropTypes";

const SongOptions: React.FC<ExtraArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <input
        type="number"
        id="durationMin"
        placeholder="Minutes"
        min={0}
        max={59}
        onChange={onChange}
      />
      <input
        type="number"
        id="durationSec"
        placeholder="Seconds"
        min={0}
        max={59}
        onChange={onChange}
      />
    </>
  );
};

export default SongOptions;
