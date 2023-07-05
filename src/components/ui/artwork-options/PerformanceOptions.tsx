import { ArtworkOptionsPropTypes } from "../../../types/ArtworkPropTypes";
import SelectMenu from "../SelectMenu";

const PerformanceOptions: React.FC<ArtworkOptionsPropTypes> = ({ onChange }) => {
  return (
    <>
      <SelectMenu
        id="performanceType"
        defaultOption="Type"
        options={["BALLET", "CLASSICAL", "MODERN"]}
        onChange={onChange}
      />
      <input
        type="number"
        id="durationHours"
        placeholder="Hours"
        min={0}
        max={4}
        onChange={onChange}
      />
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

export default PerformanceOptions;
