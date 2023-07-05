import { ArtworkOptionsPropTypes } from "../../../types/ArtworkPropTypes";

const SongOptions: React.FC<ArtworkOptionsPropTypes> = ({ onChange }) => {
  return (
    <>
      <input
        type="number"
        id="durationMins"
        placeholder="Minutes"
        min={0}
        max={59}
        onChange={onChange}
      />
      <input
        type="number"
        id="durationSecs"
        placeholder="Seconds"
        min={0}
        max={59}
        onChange={onChange}
      />
    </>
  );
};

export default SongOptions;
