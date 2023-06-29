import { ExtendedArtworkOptionsProps } from "../../../types/UIPropTypes";
import SelectMenu from "../SelectMenu";

const VideoOptions: React.FC<ExtendedArtworkOptionsProps> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="videoGenre"
        defaultOption="Genre"
        options={["Short", "Feature", "Commercial", "Music Video", "Experimental"]}
        onChange={onChange}
      />
      <input
        type="number"
        id="durationHour"
        placeholder="Hours"
        min={0}
        max={4}
        onChange={onChange}
      />
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

export default VideoOptions;
